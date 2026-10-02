import express from 'express'
import Pool from './db.js';
const app = express();
app.use(express.json());
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Mobile",
    price: 30000
  }
];
// api 1 
app.get('/products',(req , res) =>{
  res.json("products");
//   res.json("hello products");  
})
app.post('/products', (req, res) => {

  const newProduct = req.body;

  products.push(newProduct);

  res.json(newProduct);

});
app.put('/products/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const product = products.find(product => product.id === id);

  if (!product) {
    return res.json("Product not found");
  }

  product.name = req.body.name;
  product.price = req.body.price;

  res.json(product);

});
app.delete('/products/:id', (req, res) => {

  const id = parseInt(req.params.id);

  const index = products.findIndex(product => product.id === id);

  if (index === -1) {
    return res.json("Product not found");
  }

  const deletedProduct = products.splice(index, 1);

  res.json(deletedProduct);

});
// api 2

app.get('/',(req , res) =>{
  res.json("hello home page");
 
})
// api 3
app.get('/contact',(req , res) =>{
  
  res.json("hello contact page");  
})

// api 4
app.get('/about',(req , res) =>{
  
  res.json("hello about page");  
})


Pool.query("SELECT NOW()",(error , result)=>{
if(error){
  console.log("Database Failed");
  console.log(error);
}
else {
  console.log("Database is connected", result.rows)
}
})


app.listen(5000,()=>{
    console.log("Server running on port 5000");

});
