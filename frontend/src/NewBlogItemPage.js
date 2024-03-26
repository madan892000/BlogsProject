import React from 'react'
import "./NewBlogItemPage.css"
import NewBlogCreatedPage from './NewBlogCreatedPage'

const NewBlogItemPage = (props) => {

    const {getBackFromNewBlogItemPage} = props
    const [blogData,saveChangeddata] = React.useState({title : "",description : "" ,specifications : "",image:""})
    const [dataSentStatus,changeSentStatus] = React.useState(false)

    const sendDataToPostgresql = async() => {
        const stringifydata = JSON.stringify(blogData)
        try {
            await fetch('http://localhost:3006/bikesData/addData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: stringifydata
            }).then((d) => console.log(d))
            .then((d1) => console.log(d1))
            
            console.log('Data sent successfully');
            changeSentStatus(true)

          } catch (error) {
            console.error('Error sending data:', error.message);
          }
    }

    const dataSentSuccessStatus = () => {
        changeSentStatus(false)
    }

    const changeNewBlogStatus = () => {
        getBackFromNewBlogItemPage("Done")
    }

    const saveTitledata = (event) => {
        saveChangeddata((prevState) => ({...prevState,title : event.target.value}) )
    }

    const saveDescriptionData = (event) => {
        saveChangeddata((prevState) => ({...prevState,description : event.target.value}))
    }

    const saveSpecificationsData = (event) => {
        saveChangeddata((prevState) => ({...prevState,specifications : event.target.value}))
    }

    const saveImageData = (event) => {
        saveChangeddata((prevState) => ({...prevState,image:event.target.value}))
    }

  return (
   <div>
    {
        dataSentStatus ? (<NewBlogCreatedPage dataSentSuccessStatus = {dataSentSuccessStatus}/>) : ( <div className='container'>
        <div >
            <h1 className='heading'>This is the Form to create New Blogs</h1>
            <div>
                <label className='label'>Enter Title</label>
                <input type = "text" onChange={saveTitledata} className='form-input'/>
            </div>
            <div>
                <label className='label'>Enter description</label>
                <textarea onChange={saveDescriptionData} className='textarea'></textarea>
            </div>
            <div>
                <label className='label'>Enter specifications in "key" : "value" , format</label>
                <textarea onChange={saveSpecificationsData} className='textarea'></textarea>
            </div>
            <div>
                <label className='label'>Paste image link</label>
                <input type = "text" onChange={saveImageData} className='form-input'/>
            </div>
        </div>
        <div>
            <button onClick={sendDataToPostgresql} className='button'>Click to send data</button>
            <button onClick={changeNewBlogStatus} className='button1'>
                Go Back
            </button>
        </div>
    </div>)
    }
   </div>
  )
}

export default NewBlogItemPage