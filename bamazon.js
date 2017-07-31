var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user:  'root',
    password: '',
    database: 'bamazondb',
    multipleStatements: true
});

connection.connect(function(err){
  if(err){
      throw err;
  }
    displayProduct();
});

function runInquirer(){
    inquirer
        .prompt([{
            name: "buy",
            type: "input",
            message: ["What is the ID of the product you would like to buy?"]       
        },
        {
            name: "quantity",
            type: "input",
            message: ["How many units?"] 
        }])
        .then(function(answer){
            numBuy = parseInt(answer.buy);
            quantityNumber = parseInt(answer.quantity);
            if (numBuy < 1 || numBuy > 10){
                console.log("=====================================");
                console.log("You entered an invalid ID!  Try again");
                console.log("=====================================");
                return runInquirerAgain();
            };
            if (quantityNumber < 1){
                console.log("=====================================");
                console.log("You entered an invalid quantity!  Try again");
                console.log("====================================="); 
                return runInquirerAgain();
            };
            validateStock(answer.buy, answer.quantity);
        }); 
}

function runInquirerAgain(){
    inquirer
        .prompt({
            name: "yorn",
            type: "list",
            message: "Use the arrow keys to select Y to buy more or N to cancel",
            choices: ["Y", "N"]       
        })
        .then(function(yorn){ 
            if (yorn.yorn === 'Y'){
                displayProduct();
            }
            else if (yorn.yorn === 'N'){
                console.log("=====================================");
                console.log("goodbye!");
                console.log("=====================================");
                connection.end();
            }
        });  
}

function validateStock(id, qty){
    var query = connection.query(
        `SELECT * FROM products WHERE item_id = ${id}`,
        function(err, res){ 
            stock = res[0].stock_qty;
            if ((stock - qty) < 1){
                console.log("Insufficient quantity available.!");
                return runInquirerAgain();
            }
            else{
                buyProduct(id, qty);
                console.log("=====================================");
                console.log("Thank You!  Your purchase was $" + qty * res[0].price);
                console.log("=====================================");
            }
            runInquirerAgain();
        }
    )
}

function buyProduct(id, qty){
    var query = connection.query(
        `UPDATE products SET stock_qty = stock_qty - ${qty} WHERE item_id =  ${id}`,
        function(err, res){ 
        }
    )
}

function selectProduct(id){
    var query = connection.query(
        `SELECT * FROM products WHERE item_id = + ${id}`,
        function(err, res){   
            console.log(res);
        }
    )
}

function displayProduct(){
    var query = connection.query(
        'SELECT * FROM products',
        function(err, res){
            console.log('');
            res.forEach(function(element) {
                console.log(`Item ID:${element.item_id}, NAME:${element.product_name}, PRICE:${element.price}`);
                console.log(`------------------------------`)
            }, this);
            console.log('');    
            runInquirer();
        }
    )
    
}

function createProduct(){
    var query = connection.query(
        'insert into products set ?',
        {
            product_name: 'shucker',
            department_name: 'kitchen',
            price: 1.99,
            stock_qty: 1200
        },
        function(err, res){   
            console.log(res.affectedRows + ' product inserted');
        }
    )
}