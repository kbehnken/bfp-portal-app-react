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
  service_date varchar(100),
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
  service_address_id INTEGER REFERENCES service_addresses(id),
  technican varchar(40)
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
  invoice_balance INTEGER,
  invoice_status varchar(40),
  invoice_url  varchar(70),
  user_id INTEGER REFERENCES users(id),
  service_address_id INTEGER REFERENCES service_addresses(id)
);

CREATE TABLE services
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(70) NOT NULL,
  description TEXT
);

CREATE TABLE services_performed
(
  id SERIAL PRIMARY KEY,
  service_id INTEGER REFERENCES services(id),
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


insert into invoices (
service_start, service_end, invoice_number, invoice_amount, payment_date, payment_type, payment_amount, user_id, service_address_id, invoice_url) 
values(
'09/19/19',
'12/13/19',
1525,
99.99,
'01/05/20',
'Zelle',
99.99,
8,
5,
'http://images.beachfamilypools.com/invoice-1525-graves.pdf'
);

select * from invoices;

INSERT INTO service_calls 
VALUES(
default,
'11/14/19',
'3900',
'N/A',
'N/A',
'30,',
'15',
'8.4',
'240',
'300',
'0',
'0',
'0',
0,
'0',
'0',
8,
5,
'Jeremy Saffell'
);

SELECT * FROM service_calls;