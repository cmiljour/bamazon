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
    console.log('');
    runInquirer();
});

function runInquirer(){
    inquirer
        .prompt({
            name: "manager",
            type: "list",
            message: ["What boring job routine would you like to perform?"],
            choices: ["View Products for sale","View Low Inventory", "Add to Inventory",
                        "Add New Product", "I changed my mind, please exit"]     
        })
        .then(function(answer){
            switch (answer.manager) {
                case 'View Products for sale':
                    displayProduct();
                    break;
                case 'View Low Inventory':
                    displayLowInv();
                    break;
                case 'Add to Inventory':
                    runInquirerAddInv();
                    break;
                case 'Add New Product':
                    runInquirerAddProd();
                    break;
                case 'I changed my mind, please exit':
                    goodBye();
                    connection.end();
                    break;
                default:  console.log("Something didn't work!");       
            }
        }); 
}

function runInquirerAddInv(){
    inquirer
        .prompt([{
            name: "id",
            type: "input",
            message: ["What is the ID of product?"]       
        },
        {
            name: "quantity",
            type: "input",
            message: ["How many units to add to inventory?"] 
        }])
        .then(function(answer){
            var stockId = parseInt(answer.id);
            var quantityNumber = parseInt(answer.quantity);
                if (stockId < 1 || stockId > 10){
                    invalidId();
                    return runInquirerAddInv();
                };
                if (quantityNumber < 1){
                    invalidQty();
                    return runInquirerAddInv();
                };
            addToInventory(stockId, quantityNumber);
        }); 
}

function runInquirerAddProd(){
    inquirer
        .prompt([
        {
            name: "product",
            type: "input",
            message: ["What is the product name?"] 
        },
        {    
            name: "department",
            type: "input",
            message: ["What is the department name?"]
        },
                {    
            name: "price",
            type: "input",
            message: ["What is the price?"]
        },
                {    
            name: "qty",
            type: "input",
            message: ["What is the stock quantity?"]
        }])
        .then(function(answer){
            var itemId = 5;
            quantityNumber = parseInt(answer.qty);
            if (itemId < 1 || itemId > 10){
                invalidId();
                return runInquirerAddProd();
            };
            if (quantityNumber < 1){
                invalidQty();
                return runInquirerAddProd();
            };
            addInventory(answer.product, answer.department, answer.price, answer.qty);
            runInquirerAgain();
        }); 
}

function runInquirerAgain(){
    inquirer
        .prompt({
            name: "yorn",
            type: "list",
            message: "Use the arrow keys to select Y to add more or N to cancel",
            choices: ["Y", "N"]       
        })
        .then(function(yorn){ 
            if (yorn.yorn === 'Y'){
                runInquirerAddProd();
            }
            else if (yorn.yorn === 'N'){
                goodBye();
                connection.end();
            }
        });  
}

function addInventory(product, department, price, qty){
    var query = connection.query(
        'insert into products set ?',
        {
            product_name: product,
            department_name: department,
            price: price,
            stock_qty: qty
        },
        function(err, res){   
        }
    )
}

function addToInventory(id, qty){
    var query = connection.query(
        `UPDATE products SET stock_qty = stock_qty + ${qty} WHERE item_id = ${id}`,
        function(err, res){   
            displayProduct();
        }
    )
}

function displayProduct(){
    var query = connection.query(
        'SELECT * FROM products',
        function(err, res){
            console.log('');
            console.log(`----------------------------------------------------------------`)
            res.forEach(function(element) {
                console.log(`Item ID:${element.item_id}, NAME:${element.product_name}, PRICE:${element.price}, Qty:${element.stock_qty}`);
                console.log(`----------------------------------------------------------------`)
            }, this);
            console.log('');    
            runInquirer();
        }
    )
}

function displayLowInv(){
    var query = connection.query(
        'SELECT * FROM products WHERE stock_qty < 5',
        function(err, res){
            console.log('');
            console.log(`----------------------------------------------------------------`)
            res.forEach(function(element) {
                console.log(`Item ID:${element.item_id}, NAME:${element.product_name}, PRICE:${element.price}, Qty:${element.stock_qty}`);
                console.log(`----------------------------------------------------------------`)
            }, this);
            console.log('');    
            runInquirer();
        }
    )
}

function invalidQty(){
    console.log("=====================================");
    console.log("You entered an invalid quantity!  Try again");
    console.log("====================================="); 
}

function invalidId(){
    console.log("=====================================");
    console.log("You entered an invalid ID!  Try again");
    console.log("=====================================");
}

function goodBye(){
    console.log("=====================================");
    console.log("goodbye!");
    console.log("=====================================");
}