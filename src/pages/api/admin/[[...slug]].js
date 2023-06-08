import products from "@/products"

export default async function handler(req, res) {
    console.log('req.query' + req.query)
    
    res.send({products: products})
    
  } 