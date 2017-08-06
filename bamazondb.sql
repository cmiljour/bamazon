create DATABASE bamazondb;

use bamazondb;

CREATE TABLE products (
	item_id int not null auto_increment,
	product_name VARCHAR(100) NULL,
	department_name VARCHAR(100) NULL,
	price decimal(10,2) NULL,
	stock_qty int NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_qty) VALUES
('diapers', 'family', 10.95, 3),
('cucumbers', 'produce', 6.32, 120),
('apples','produce', 7.75, 1000 ),
('jordans', 'shoes', .50, 300)