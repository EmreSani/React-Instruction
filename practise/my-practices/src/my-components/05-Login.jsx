import { useState } from "react";

export const Login = () => {

    let [username, setUsername] = useState();
    let [password, setPassword] = useState();
    let [isLoginValid, setIsLoginValid] = useState();
    let [display, setDisplay] = useState("d-none");

    const handleUsername = (event)=>{
        setUsername(event.target.value);
    }

    const handlePassword = (event)=>{
        setPassword(event.target.value);
    }

    const handleLogin = (event)=>{
        setIsLoginValid(username == "Admin" && password == 12345);
        event.preventDefault();
        setDisplay("d-block");    
    }

  return (
    <div className="m-3">
        <form className="form-control p-3" style={{width:"25rem"}}>
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" id="username" className="form-control" onChange={handleUsername}/>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="text" id="password" className="form-control" onChange={handlePassword}/>
            <button className="btn btn-info mt-3 w-100" onClick={handleLogin}>Login</button>
        </form>

        {isLoginValid ? (setTimeout(()=>window.location = "https://www.google.com.tr/", 3000) && <p>Giriş yapılıyor...</p>) : <p className={display}>Giriş Başarısız</p>}
    </div>
  )
}
