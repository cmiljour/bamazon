Welcome to BAMAZON!

This is an application which utilizes a simple MySQL database to display data on the command line through javascript and NodeJs.

Prerequisites:

1.  NodeJS - https://nodejs.org/en/
2.  mysql NPM package - https://www.npmjs.com/package/mysql
3.  inquirer NPM package - https://www.npmjs.com/package/inquirer

**Get Started with Customer View:**

Open up a terminal and type 'node bamazon.js' without the quotes.  This brings you to the customer main menu where you can choose an ID
and quantity of goods to purchase.  Once an id and quantity is specified, the purchase will be made and the total dollar amount will be displayed.  See below for example output.

![Image of Mainmenu](https://github.com/cmiljour/bamazon/blob/master/markdown/bamazonmainmenu.png)

**Get Started with Manager View:**

Open up a terminal and type 'node bamazonmanager.js' without the quotes.  This brings you to the manager main menu where you
can list products for sale, view low inventory, add to inventory, and add new product

![Image of bamazonmanager main menu](https://github.com/cmiljour/bamazon/blob/master/markdown/bamazonmanager.png)


**Notes:**

*pressing CTRL-C on the keyboard will exit the program.  If you don't like pressing that, there is usually a menu exit selection.

*if you type an out of bound ID or inventory level (-34234 quantity), it will spit an error and reset the menus

**Northwestern Coding Bootcamp Staff - screenshots are stored at https://github.com/cmiljour/bamazon/tree/master/markdown **
