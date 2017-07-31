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