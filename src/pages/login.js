import { useRef, useContext, useState} from "react";
import apiURL from '@/apiURL';
import UserContext from "@/state/User";
import { Button, Input } from "@chakra-ui/react";

const Login = () => {

    const userRef = useRef();
    const passRef = useRef();

    const {info,setInfo} = useContext(UserContext)
    
    const [signIn, setSignIn] = useState(true) 

    const useLogin = async (e) => {
        e.preventDefault()
        const info = {
            username: userRef.current.value,
            password: passRef.current.value,
            signIn : signIn
        }
        const response = await fetch(apiURL+'api/users/'+JSON.stringify(info),{
        method: "GET",
    }
        );
        const jsonData = await response.json();
        console.log(jsonData.data)
        if(jsonData.data !== 'user does not exist in the database') 
        setInfo({id:jsonData.data.id, username: jsonData.data.username, admin : jsonData.data.admin, signIn : signIn})
    }

    const logOff = () => {
        setInfo({})
    }
    return info.id ?   (info.admin ?  <>you are logged in as admin.<br/><br/>
                        <Button colorScheme = "blue" onClick = {logOff } style={{align: 'center'}}>Log Off?</Button>
                        </>
                        : <>you are logged in.<br/><br/>
                        <Button colorScheme = "blue" onClick = {logOff } style={{align: 'center'}}>Log Off?</Button>
                            </>)
                 : 
                 signIn ? <><form onSubmit = { useLogin } >
        username :  <Input ref = {userRef} style = {{margin:'5px', border: '1px solid green'}}></Input><br/>
        password : <Input ref = {passRef} style = {{margin:'5px', border: '1px solid green'}}></Input><br/><br/>
        <Button type = "submit" style={{align:'right'}} colorScheme="green">Login</Button><br/><br/>
        don't have an account yet? <Button onClick = { () => setSignIn(false) } colorScheme="blue" height = '40px' width = '60px'>Sign up</Button> </form> </>
        :
        <><form onSubmit = { useLogin } >
        username :  <Input ref = {userRef} style = {{margin:'5px', border: '1px solid green'}}></Input><br/>
        password : <Input ref = {passRef} style = {{margin:'5px', border: '1px solid green'}}></Input><br/><br/>
        <Button type = "submit" style={{align:'right'}} colorScheme="green">Sign up</Button><br/><br/>
        have an account? <Button onClick = { () => setSignIn(true) } colorScheme="blue">Sign In</Button>
    </form></>
}

export default Login