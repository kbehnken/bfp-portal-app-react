CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  is_admin BOOLEAN,
  role VARCHAR(40) NOT NULL,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  phone_number VARCHAR(40),
  email_address VARCHAR(60) NOT NULL,
  hash text
);

CREATE TABLE service_addresses
(
  id SERIAL PRIMARY KEY,
  street_address VARCHAR(70) NOT NULL,
  city VARCHAR(40) NOT NULL,
  state VARCHAR(40) NOT NULL,
  postal_code VARCHAR(10) NOT NULL,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE service_calls
(
  id SERIAL PRIMARY KEY,
  service_date TIMESTAMP,
  salt varchar(40),
  phosphates varchar(40),
  tds varchar(40),
  filter_psi varchar(40),
  chlorine varchar(40),
  ph varchar(40),
  alkalinity varchar(40),
  cya varchar(40),
  trichlor_shock varchar(40),
  soda_ash varchar(40),
  sodium_bicarbonate varchar(40),
  tabs INTEGER,
  granular_trichlor varchar(40),
  phosphate_remover varchar(40),
  user_id INTEGER REFERENCES users(id),
  service_address_id INTEGER REFERENCES service_addresses(id)
);

CREATE TABLE invoices
(
  id SERIAL PRIMARY KEY,
  service_start TIMESTAMP NOT NULL,
  service_end TIMESTAMP NOT NULL,
  invoice_number INTEGER NOT NULL,
  invoice_amount INTEGER NOT NULL,
  payment_date TIMESTAMP,
  payment_type varchar(40),
  payment_amount INTEGER,
  invoice_balance INTEGER NOT NULL,
  invoice_status varchar(40) NOT NULL,
  user_id INTEGER REFERENCES users(id),
  service_address_id INTEGER REFERENCES service_addresses(id)
);

CREATE TABLE services
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(70) NOT NULL,
  description TEXT,
  service_call_id INTEGER REFERENCES service_calls(id)
);

CREATE TABLE equipment
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(70) NOT NULL,
  description TEXT,
  service_address_id INTEGER REFERENCES service_addresses(id)
);

CREATE TABLE photos
(
  id SERIAL PRIMARY KEY,
  date_taken TIMESTAMP,
  category varchar(40),
  photo_url varchar(70),
  user_id INTEGER REFERENCES users(id),
  service_call_id INTEGER REFERENCES service_calls(id)
);