//import users from "@/pages/api/users/users"
import path from 'path';
import { promises as fs } from 'fs'

export default async function handler(req, res) {

  const jsonDirectory = path.join(process.cwd(), 'json');

  const str = await fs.readFile(jsonDirectory + '/users.json', 'utf8')

    console.log("str" + str)
    let users = JSON.parse(str)
    console.log(str)
    console.log(users)
    const { login } = req.query
    const info = JSON.parse(login)
    console.log(info)
    const user = users.find((user) => user.username == info.username && user.password == info.password )
    if(!user && info.signIn) res.send({data: 'user does not exist in the database'})
    else if(user && user.admin)    res.send({data: {id: user.id, username: user.username, admin:true}})
    else if(user && !user.admin)   res.send({data: {id: user.id, username: user.username, admin:false}})
    else if(!info.signIn) {
                            let temp = {id: users.length+1 , username: info.username, password: info.password, admin: false}
                            let str = JSON.stringify([...users,temp])
                            await fs.writeFile( jsonDirectory + "/users.json", str ,(err) => {
                              if (err)
                                console.log(err);
                              else {
                                console.log("File written successfully\n");
                                console.log("The written has the following contents:");
                                console.log(fs.readFileSync("users.json", "utf8"));
                              }
                            })
                            res.send({data: temp})
                          }
  }