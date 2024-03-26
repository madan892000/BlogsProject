import React from 'react'
import LoginPage from "./LoginPage"
import HeaderBar from './HeaderBar'
import UserProfile from './UserProfile'
import "./App.css"

const HomePage = () => {

  const [loginStatus,changeStatus] = React.useState(true)
  const [viewStatus,changeViewStatus] = React.useState(false)
  const [userDataFromLocal, changeUserData] = React.useState({name:"",username:""})

  React.useEffect(() => {
    let val = localStorage.getItem("userCred")
    if (val === "success"){
      changeStatus(true);
      return;
    }
    changeStatus(false)
  },[])

  const logoutButton = () => {
    changeStatus(false)
    localStorage.removeItem("userCred")
    localStorage.removeItem("userData")
  }

  const showUserProfileData = (view) => {
    changeViewStatus(view)
    const data = JSON.parse(localStorage.getItem("userData"))
    
    changeUserData( (prevState) => ({...prevState,name:data.name,username:data.username}))

  }
  
  
  
  return (
    
    <div>
      {
        loginStatus ? (<main>
          <header className = "heading">
            <a href = "home" ><span>A</span>uto<span>M</span>obile <span>B</span>logs</a>
            <nav className = "navbar">
              <a href = "home" onClick={logoutButton}><span>L</span>og<span>O</span>ut</a>
              <UserProfile showUserProfileData = {showUserProfileData} />
            </nav>
          </header>
          <div>
            {
                viewStatus ? (<div className='UserInfoDisplay'> <p>Name : {userDataFromLocal.name}</p> <p>UserName : {userDataFromLocal.username}</p> </div>) : null
            }
          </div>
          <HeaderBar />
        </main>):(<LoginPage/>)
      }
    </div>
  )
}

export default HomePage