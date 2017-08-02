# bamazon






[cynics@cynics-pc bamazon]$ systemctl start mariadb.service
[cynics@cynics-pc bamazon]$ node bamazon

Item ID:1, NAME:onions, PRICE:2
------------------------------
Item ID:2, NAME:peppers, PRICE:1
------------------------------
Item ID:3, NAME:green beans, PRICE:3
------------------------------
Item ID:4, NAME:dell xps 13, PRICE:900
------------------------------
Item ID:5, NAME:dell latitude 7440, PRICE:1000
------------------------------
Item ID:6, NAME:Catcher in the rye, PRICE:5.95
------------------------------
Item ID:7, NAME:Independence Day, PRICE:9.99
------------------------------
Item ID:8, NAME:Gods Must Be Crazy, PRICE:5.99
------------------------------
Item ID:9, NAME:Game of Thrones Season 1, PRICE:9.99
------------------------------
Item ID:10, NAME:shucker, PRICE:1.99
------------------------------
Item ID:11, NAME:pencils, PRICE:0.5
------------------------------
Item ID:12, NAME:cereal, PRICE:3
------------------------------
Item ID:13, NAME:snakes, PRICE:100
------------------------------
Item ID:14, NAME:rabbits, PRICE:25
------------------------------
Item ID:15, NAME:peas, PRICE:0.75
------------------------------
Item ID:16, NAME:kittens, PRICE:1500
------------------------------
Item ID:17, NAME:pens, PRICE:0.25
------------------------------
Item ID:18, NAME:tshirts, PRICE:5.55
------------------------------

? What is the ID of the product you would like to buy? (OR PRESS CTRL-C TO QUIT)


? What is the ID of the product you would like to buy? 1
? How many units? 5
=====================================
Thank You!  Your purchase was $10
=====================================
? Use the arrow keys to select Y to buy more or N to cancel (Use arrow keys)
❯ Y 
  N 


? Use the arrow keys to select Y to buy more or N to cancel N
=====================================
goodbye!
=====================================
[cynics@cynics-pc bamazon]$ 
[cynics@cynics-pc bamazon]$ node bamazonmanager.js 

? What boring job routine would you like to perform? (Use arrow keys)
❯ View Products for sale 
  View Low Inventory 
  Add to Inventory 
  Add New Product 
  I changed my mind, please exit 



? What boring job routine would you like to perform? View Low Inventory

----------------------------------------------------------------
Item ID:16, NAME:kittens, PRICE:1500, Qty:3
----------------------------------------------------------------


? What boring job routine would you like to perform? Add New Product
? What is the product name? tshirts
? What is the department name? clothes
? What is the price? 5.55
? What is the stock quantity? 30
? Use the arrow keys to select Y to add more or N to cancel N
=====================================
goodbye!


? What boring job routine would you like to perform? Add to Inventory
? What is the ID of product? 5
? How many units to add to inventory? 3


