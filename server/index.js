require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();

const authCtrl = require('./controllers/authController');
const userCtrl = require('./controllers/userController');
const servicesCtrl = require('./controllers/servicesController');
const equipmentCtrl = require('./controllers/equipmentController');
const photosCtrl = require('./controllers/photosController');
const addressesCtrl = require('./controllers/addressesController');
const callsCtrl = require('./controllers/callsController');
const invoicesCtrl = require('./controllers/invoicesController');
const auth = require('./middleware/authMiddleware');

const { SESSION_SECRET, CONNECTION_STRING } = process.env;
massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('db connected');
});

app.use(express.json());
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  })
);

app.post('/api/auth/login', authCtrl.login);
app.post('/api/auth/logout', authCtrl.logout);

app.get('/api/users', userCtrl.getUsers);
app.post('/api/user/add-user', userCtrl.addUser);
app.put('/api/user/', auth.usersOnly, userCtrl.updateUser);

app.get('/api/services', auth.usersOnly, servicesCtrl.getServices);
app.post('/api/service', auth.usersOnly, servicesCtrl.addService);
app.put('/api/service/', auth.usersOnly, servicesCtrl.updateService);
app.delete('/api/service/:id', auth.usersOnly, servicesCtrl.deleteService);

app.get('/api/equipment', auth.usersOnly, equipmentCtrl.getEquipment);
app.post('/api/equipment', auth.usersOnly, equipmentCtrl.addEquipment);
app.put('/api/equipment/:id', auth.usersOnly, equipmentCtrl.updateEquipment);
app.delete('/api/equipment/:id', auth.usersOnly, equipmentCtrl.deleteEquipment);

app.get('/api/photos', auth.usersOnly, photosCtrl.getPhotos);
app.post('/api/photos', auth.usersOnly, photosCtrl.addPhoto);
// app.put('/api/photos/:id', auth.usersOnly, photosCtrl.updatePhoto);
app.delete('/api/photos/:id', auth.usersOnly, photosCtrl.deletePhoto);

app.get('/api/addresses', auth.usersOnly, addressesCtrl.getUserAddresses);
app.get('/api/addresses/:id', auth.usersOnly, addressesCtrl.getAddressesById);
app.post('/api/address', auth.usersOnly, addressesCtrl.addAddress);
app.put('/api/address/:id', auth.usersOnly, addressesCtrl.updateAddress);
app.delete('/api/address/:id', auth.usersOnly, addressesCtrl.deleteAddress);

app.get('/api/calls', auth.usersOnly, callsCtrl.getCalls);
app.post('/api/call', auth.usersOnly, callsCtrl.addCall);
app.put('/api/call/:id', auth.usersOnly, callsCtrl.updateCall);
app.delete('/api/call/:id', auth.usersOnly, callsCtrl.deleteCall);

app.get('/api/invoices', auth.usersOnly, invoicesCtrl.getInvoices);
app.post('/api/invoice', auth.usersOnly, invoicesCtrl.addInvoice);
app.put('/api/invoice/:id', auth.usersOnly, invoicesCtrl.updateInvoice);
app.delete('/api/invoice/:id', auth.usersOnly, invoicesCtrl.deleteInvoice);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));