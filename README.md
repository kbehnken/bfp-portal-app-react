# bfp-portal

## Features

- Customers can:
  - Log into customer portal
  - View account summary
  - View service history
  - View billing history
  - Reset personal portal password

- Admins can:
  - Add users (customers and employees)
  - Edit users (customers and employees)
  - Add services
  - Edit services
  - Delete services
  - Add equipment
  - Edit equipment
  - Delete equipment
  - Add customer service history
  - Edit customer service history
  - Delete customer service history
  - Add customer billing history
  - Edit customer billing history
  - Delete customer billing history
  - Reset password for all users


## Front-end

### Checklist

- reset.css ==> eric meyers 2.0 reset
- package.json
  - "main": "server/index.js"
  - "proxy": "http://localhost:4000"

### File Structure

- src/
  - App.js => class
  - index.js
  - App.css
  - index.css => reset.css
  - setupProxy.js
  - Components/
    - Auth.js
    - Header.js
    - Dashboard.js
    - UserForm.js
    - ServicesForm.js
    - EquipmentForm.js
    - ServiceCallForm.js
    - InvoiceForm.js
    - Button.js
  - redux
  
### Dependencies

- axios ==> make API calls
- react-redux ==> store state
- redux-promise-middleware
- react-router-dom ==> navigate components
- react-icons


## Back-end

### Checklist

### File Structure

- server/
  - index.js
  - controllers/
    - authController.js
  - middleware
    - authMiddleware.js

### Dependencies

- express
- express-session
- massive
- bcryptjs
- dotenv

### API Routes

- Get all services: GET `/api/services
- Get all equipment: GET `/api/equipment
- Create service: POST `/api/service`
- -Create equipment: POST `/api/equipment`
- Edit service: PUT `/api/service/:id` {body: name, description}
- Edit equipment: PUT `/api/equipment/:id` {body: name, description}

#### Example usage
```js
app.put(`/api/service/:id`, (req, res, next) => {
  const { name, description } = req.body;
});

app.put(`/api/equipment/:id`, (req, res, next) => {
  const { name, description } = req.body;
});
```

- Delete service: DELETE `/api/service/:id`
- Delete equipment: DELETE `/api/equipment/:id`

### Data

```js
const service = {
    id: Number,
    name: String,
    description: String
}
```