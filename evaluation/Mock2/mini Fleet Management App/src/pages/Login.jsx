import {useState,useRef,useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Login=({ setIsAuth })=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const emailRef=useRef(null);
    const navigate=useNavigate();

    useEffect(()=>{
    emailRef.current.focus();
    },[]);
    const handleLogin=()=>{
        if(email==="admin@gmail.com && password"==="admin1234"){
            alert("Login Succesful")
            setIsAuth(true);
            navigate("/admin");
        }else{
            alert("Wrong Email Password")
        }
    };
    return(
        <div>
            <h2>Login Page</h2>
            <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}>
         </input>
         <input
         type="password"
         placholder="Password"
         onChange={(e)=>setPassword(e.target.value)}>
         </input>
         <button onClick={handleLogin}>Login</button>
        </div>
    );
};
export default Login;