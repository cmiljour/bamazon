var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user:  'global',
    password: '',
    database: 'bamazondb'
});

connection.connect(function(err){
    createProduct();
});

function createProduct(){
    var query = connection.query(
        'insert into products set ?',
        {
            product_name: 'shake weight',
            department_name: 'fitness',
            price: 19.99,
            stock_qty: 999
        },
        function(err, res){
            console.log(res);
            console.log(res.affectedRows + ' product inserted');
        }
    )
}