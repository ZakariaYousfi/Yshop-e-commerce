import products from "@/products"

export default function handler(req, res) {
    const { pid } = req.query
    const arr = JSON.parse(pid)
    let ret = []
    arr.forEach(element => {
        ret.push(products[element])
    });
    //console.log(ret)
    res.send({data: ret})
  }