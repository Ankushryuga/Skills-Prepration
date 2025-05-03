## Create a Database:
1. MySQL/MariaDB:
   **CREATE DATABASE mydb;**

2. PostgreSQL:
   **CREATE DATABASE mydb;**


## Create a table:
1. Mysql/MariaDB:
   **CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  age INT
);**

2. PostgreSQL:
   **CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INT
);**

## Inserting Data:
1. MySQL/MariaDB:
   **INSERT INTO users (id, name, age) VALUES (1, 'Alice', 30);**

2. PostgreSQL:
   **INSERT INTO users (name, age) VALUES ('Alice', 30);**



## Advanced SQL Features:
## Auto-Increment/Serial:
1. Mysql/MariaDB:
   **CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);**

2. Postgres:
   **CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);**


## Foreign Keys:

All:
**CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);**


## Joins:
All:
**SELECT users.name, orders.order_id
FROM users
JOIN orders ON users.id = orders.user_id;**


## Subqueries:
All:
**SELECT name FROM users
WHERE id IN (SELECT user_id FROM orders WHERE order_id = 1);**


## Indexes:
All:
**CREATE INDEX idx_user_name ON users(name);**




## Unique features by database:
1. **Stored Procedures**:
2. 1. Mysql/MariaDB:
**DELIMITER //
CREATE PROCEDURE GetUser(IN user_id INT)
BEGIN
  SELECT * FROM users WHERE id = user_id;
END //
DELIMITER ;**

2. 2. Postgres:
**CREATE OR REPLACE FUNCTION get_user(user_id INT)
RETURNS TABLE(id INT, name VARCHAR) AS $$
BEGIN
  RETURN QUERY SELECT id, name FROM users WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;**


## Triggers:
1. Mysql/MariaDB:
   **CREATE TRIGGER before_insert_user
BEFORE INSERT ON users
FOR EACH ROW
SET NEW.created_at = NOW();**
2. Postgresql:
   **CREATE TRIGGER before_insert_user
BEFORE INSERT ON users
FOR EACH ROW
EXECUTE FUNCTION set_created_at();**






