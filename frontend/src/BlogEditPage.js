import React from 'react'
import "./NewBlogItemPage.css"

const BlogEditPage = (props) => {

    const {editData,afterEdit} = props 
    const [dataWasEdited,changeDataWasEdited] = React.useState(false)

    const [blogData,saveChangeddata] = React.useState({title : editData.title,description : editData.description ,specifications : editData.specifications,image:editData.image})

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

    const goBackAfterEdit = () => {
        afterEdit()
    }

    const postEditData = async () => {
        console.log("start")
        var edited;
        console.log(editData.id)
        console.log(blogData)

        const response = await fetch(`http://localhost:3006/bikesData/updateData/${editData.id}` , {
            method : "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(blogData)
        }).then((r) => r.json())
        .then((y) => edited = y)
        console.log(edited)

        if (edited === "Data edited successfully"){
            console.log("edited")
            changeDataWasEdited(true)
        }
    }

  return (
    <div>
        {
            dataWasEdited ? (<div> 
                <p>Data was edited go back to see updated results</p>
                <button onClick={goBackAfterEdit}>Go back to Bikes blog page</button>
            </div>) : (<div>
                <h1>Change the field which you need to change</h1>
                <div>
                        <label className='label'>Enter Title</label>
                        <input type = "text" onChange={saveTitledata} className='form-input'  />
                </div>
                <div>
                        <label className='label'>Enter description</label>
                        <textarea onChange={saveDescriptionData} className='textarea' ></textarea>
                </div>
                    <div>
                        <label className='label'>Enter specifications in "key" : "value" , format</label>
                        <textarea onChange={saveSpecificationsData} className='textarea' ></textarea>
                    </div>
                    <div>
                        <label className='label'>Paste image link</label>
                        <input type = "text" onChange={saveImageData} className='form-input' />
                    </div>
                    <button onClick={postEditData}>Post the edits</button>
            </div>)
        }
    </div>
  )
}

export default BlogEditPage