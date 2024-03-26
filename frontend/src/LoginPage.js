import React from 'react'
import RegisterPage from "./RegisterPage"
import HomePage from "./HomePage"
import "./Login.css"

const LoginPage = () => {

    const [register,checkRegister] = React.useState(true)
    let [userdata,changeData] = React.useState({username:"",password:""})
    let [loginStatus,changeloginStatus] = React.useState(true)
    let [showErr,changeShowError] = React.useState(false)
    
    const registerClick = () => {
        checkRegister(false)
    }

    React.useEffect(() => {
        const val = localStorage.getItem("userCred")
        if (val === "success"){
            changeloginStatus(false)
        }
    },[])

    const loginButton = async () => {
        try {
            var output;
            var answer = await fetch('http://localhost:3001/checkData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userdata)
            }).then((b) => b.json())
            .then((dta) => output = dta)
            if (!(output === "failed")){
                changeloginStatus(false)
                localStorage.setItem("userCred" , "success")
                console.log(answer[0])
                localStorage.setItem("userData",JSON.stringify(answer[0]))
                changeShowError(false)
            }
            else{
                console.log("failed")
                changeloginStatus(true)
                changeShowError(true)
            }
          } catch (error) {
            console.error('Error:', error.message);
          }
    }

    const usernameChange = (event) => {
        changeData((prevState) => ({...prevState,username : event.target.value}))
    }

    const passwordChange = (event) => {
        changeData((prevState) => ({...prevState,password:event.target.value}))
    }

  return (
    <div>
        {
            register ? (<div> {
                loginStatus ? (
                <div className = "mainCon">
                    <div className = "loginContainer">
                        <h1>Lo<span className = "spanEle">g</span>in</h1>
                        <div className = "userbox">
                            <label htmlFor = "username" className = "label">User<span>N</span>ame</label>
                            <div>
                                <input type = "text" id = "username" className = "input" onChange={usernameChange}/>
                            </div>
                        </div>
                        <div className = "userbox">
                            <label htmlFor = "password" className = "label">Pass<span>W</span>ord</label>
                            <div>
                                <input type = "text" id = "password" className = "input" onChange={passwordChange}/>
                            </div>
                        </div>
                        <div>
                        <button className = "login-button" onClick={loginButton}>
                            Login
                        </button>
                        <button className = "register-button" onClick={registerClick}>
                                Register
                            </button>
                        </div>
                        {
                            showErr ? (<p>* <span className='error'>Password</span> and <span className='error'>Username</span> mismatch</p>) : null
                        }
                    </div>
                </div>) : (<HomePage />)} </div>) : (<RegisterPage />)
        }
    </div>
  )
}

export default LoginPage