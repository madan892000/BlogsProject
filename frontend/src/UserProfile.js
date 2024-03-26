import React from 'react'
import "./UserProfile.css"

const UserProfile = (props) => {

  const {showUserProfileData} = props
  const [showData,changeShowDataStatus] = React.useState(true)

  const showUserData = () => {
      changeShowDataStatus( (prevState) => !prevState)
      showUserProfileData(showData)
  }

  return (
    <div className='UserProfileViewing'>
        <img className = "userProfile" 
        src = "https://th.bing.com/th/id/OIP.6TwhoOQY72DwcJBG_kcwZwHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
        alt = "userProfile" onClick={showUserData}/>
    </div>
  )
}

export default UserProfile