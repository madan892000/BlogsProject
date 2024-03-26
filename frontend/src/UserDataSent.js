import React from 'react'
import Login from "./LoginPage"
import "./UserDataSent.css"

const UserDataSent = () => {

    let [go,gob] = React.useState(true)

    const goback = () => {
        gob(false)
    }
  return (
    <div>
        {
            go ? (<div className = "UserDataSentContainer container">
                <h1 className='heading'>Registration Done</h1>
                <p className='message'>UserData Sent to database you can login now with these credentials</p>
                <button onClick={goback} className='goBackButton button'>Go Back</button>
            </div>) : (<Login />)
        }
    </div>
  )
}

export default UserDataSent