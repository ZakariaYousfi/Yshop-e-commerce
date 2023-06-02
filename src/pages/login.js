import { useRef } from "react";
import apiURL from '@/apiURL';

const login = () => {

    const userRef = useRef();
    const passRef = useRef();
    
    const Login = async (e) => {
        e.preventDefault()
        const info = {
            username: userRef.current.value,
            password: passRef.current.value
        }
        const response = await fetch(apiURL+'api/users/'+JSON.stringify(info),{
        method: "GET",
    }
        );
        const jsonData = await response.json();
        console.log(jsonData.data)
    }

    return <form onSubmit = { Login } >
        username :  <input ref = {userRef} style = {{margin:'5px'}}></input><br/>
        password : <input ref = {passRef} style = {{margin:'5px'}}></input><br/>
        <button type = "submit" style={{align:'center'}}>Login</button>
    </form>
}

export default login