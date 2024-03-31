CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INTEGER 
);
CREATE TABLE todolist(
    id SERIAL PRIMARY KEY,
    task VARCHAR(255),
    difficult INTEGER,
    user_id INTEGER,
        FOREIGN KEY (id) REFERENCES person (id)
);