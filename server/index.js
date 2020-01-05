require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const app = express();

const authCtrl = require('./controllers/authController');
const servicesCtrl = require('./controllers/servicesController');
const equipmentCtrl = require('./controllers/equipmentController');
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

app.post('/api/auth/add-user', authCtrl.addUser);
app.post('/api/auth/login', authCtrl.login);
app.post('/api/auth/logout', authCtrl.logout);

app.get('/api/services', auth.usersOnly, servicesCtrl.getServices);
app.post('/api/services', auth.usersOnly, servicesCtrl.addService);
// app.put('/api/services/:id', auth.usersOnly, servicesCtrl.editService);
app.delete('/api/services/:id', auth.usersOnly, servicesCtrl.deleteService);

app.get('/api/equipment', auth.usersOnly, equipmentCtrl.getEquipment);
app.post('/api/equipment', auth.usersOnly, equipmentCtrl.addEquipment);
// app.put('/api/equipment/:id', auth.usersOnly, equipmentCtrl.editEquipment);
app.delete('/api/equipment/:id', auth.usersOnly, equipmentCtrl.deleteEquipment);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));