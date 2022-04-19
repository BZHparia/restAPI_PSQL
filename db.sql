CREATE DATABASE db_data;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE data(
    data_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);


CREATE TABLE patients(
	patient_id SERIAL PRIMARY KEY,
	surname TEXT DEFAULT '',
	firstname TEXT DEFAULT '',
	zip_code TEXT DEFAULT ''
);

ALTER TABLE patients
ADD COLUMN new_column_name data_type constraint;