import React from 'react'
import "./NewBlogItemPage.css"

const NewBlogCreatedPage = (props) => {

    const {dataSentSuccessStatus} = props

    const NewBlogDataSuccess = () => {
        dataSentSuccessStatus()
    }

  return (
    <div className = "BlogDataSent success-container-message">
        <div>
            <img src = "https://cdn-icons-png.flaticon.com/512/5839/5839078.png" alt = "success" className='success-image'/>
        </div>
        <div>
            <h1>The Blog data was sent successfully</h1>
            <p className='success-message'>Click on the button to view blogs : <button onClick = {NewBlogDataSuccess} className='success-button'>Click Here</button></p>
        </div>
    </div>
  )
}

export default NewBlogCreatedPage