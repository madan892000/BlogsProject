import React from 'react'
import UserDataSent from "./UserDataSent"
import "./RegisterPage.css"

const RegisterPage = () => {
    let [data,sendata] = React.useState({name : "",username : "",password : ""})
    let [status,changeStatus] = React.useState(true)
    let [alreadyExistError,changeError] = React.useState("")
    

    const dataSend = async () => {
        try {
            var new1;
            await fetch('http://localhost:3001/postData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }).then((d) => d.json())
            .then((log) => new1 = log)
            console.log(new1)
            if (!(new1 === "Data inserted successfully.")){
                console.log(new1)
                changeError(new1)
            }
            else{
                changeStatus(false)
            }
          } catch (error) {
            console.error('Error:', error.message);
          }
    }

    const nameChange = (event) => {
        sendata(prevState => {
            return {...prevState,name : event.target.value}
        }) 
    }

    const usernameChange = (event) => {
        sendata((prevState) => ({...prevState,username:event.target.value}))
    }

    const passwordChange = (event) => {
        sendata((prevState) => ({...prevState,password:event.target.value}))
    }


  return (
    <div>
        {
            status ? (
            <div className='form-container'>
                <h1 className='form-header'>Register</h1>
                <div>
                    <label htmlFor = "name" className='form-header'>Name : </label>
                    <input type = "text" id = "name" onChange={nameChange} className='form-input'/> 
                </div>
                <div>
                    <label htmlFor = "username" className='form-header'>UserName : </label>
                    <input type = "text" id = "username" onChange={usernameChange} className='form-input'/> 
                </div>
                <div>
                    <label htmlFor = "password" className='form-header'>Password : </label>
                    <input type = "text" id = "password" onChange={passwordChange} className='form-input'/> 
                </div>
                <div>
                    <button onClick={dataSend} className='submit-button'>
                        Register
                    </button>
                </div>
                <div>
                    <h1 className='user-exists-error'> {alreadyExistError}</h1>
                </div>
            </div>):(<UserDataSent />)
        }
    </div>
  )
}

export default RegisterPage