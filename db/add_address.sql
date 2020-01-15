INSERT INTO service_addresses
(street_address, city, state, postal_code, user_id, map_url)
VALUES
($1, $2, $3, $4, $5, $6);

SELECT * FROM service_addresses;