import products from "@/products"

export default function handler(req, res) {
    console.log('req.query' + req.query)
    
    res.send({products: products})
    
  } 