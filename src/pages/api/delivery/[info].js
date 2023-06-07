import products from "@/products"

export default function handler(req, res) {
    console.log("hello")
    const { info } = req.query
    res.send({data: "all your orders are being taken into consideration!"})
  }