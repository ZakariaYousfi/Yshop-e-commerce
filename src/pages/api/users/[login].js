import products from "@/products"

export default function handler(req, res) {
    const { login } = req.query
    const info = JSON.parse(login)
    console.log(info)
    if(info.username == 'user' && info.password == 'pass')
    res.send({data: 'helloworldz!'})
  }