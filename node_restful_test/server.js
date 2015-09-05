var express = require('express')
    restful = require('node-restful')
    mongoose = restful.mongoose
    methodOverride = require('method-override');
    bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());


mongoose.connect('mongodb://localhost/restful');

var ProductSchema = mongoose.Schema({
   name: String,
   sku: String,
   price: Number
});

var Products = restful.model('products', ProductSchema);

Products.methods(['get', 'put', 'post', 'delete' ]);

Products.register(app, '/api/products');

app.listen(3000);
console.log('Server is running');
