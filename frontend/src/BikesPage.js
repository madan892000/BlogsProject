import React from 'react'
import BikeBlog from './BikeBlog';
import NewBlogItemPage from './NewBlogItemPage';
import BlogEditPage from './BlogEditPage';
import "./BikerPage.css"

const CategoryPage1 = () => {
  var deleteOrNot;
  const [data, setData] = React.useState([]);
  const [newBlog,changeNewBlogStatus] = React.useState(false)
  const [deleteMsg,changeDeleteStatus] = React.useState(false)
  const [editData,changeEditData] = React.useState({})
  const [editStatus,changeEditStatus] = React.useState(false)

  const newBlogItem = () => {
    changeNewBlogStatus(true)
  }

  const deleteBlogItem = async (id) => {
    const deleteId = id;
    try {
      const response = await fetch(`http://localhost:3006/bikesData/delete/${deleteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const responseData = await response.json();
      console.log(responseData);
  
      if (responseData === "deleted") {
        changeDeleteStatus(true);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
      // Handle error appropriately
    }
  }
  

  const editBlogItem = async (id) => {
    console.log('enterred the edit')
    const editId = id;
    var dataForEdit;
    let options = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }
    await fetch(`http://localhost:3006/bikesData/getData/${editId}`,options)
    .then((j) => j.json())
    .then((k) => dataForEdit = k)
    if (typeof(dataForEdit) === "object"){
      changeEditData((prevState) => ({...prevState,...dataForEdit}))
      changeEditStatus(true)
    }
  }
  console.log(editData)
  
  const getBackFromNewBlogItemPage = (props) => {

    if (props === "Done"){
      changeNewBlogStatus(false)
    }
    
  }

  const afterEdit = () => {
    changeEditStatus(false)
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3006/bikesData');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {
          editStatus ? (<BlogEditPage editData = {editData} afterEdit = {afterEdit}/>):(<div> <div>
            {
              newBlog ? (<NewBlogItemPage getBackFromNewBlogItemPage = {getBackFromNewBlogItemPage}/>):(<div className='bikerpagecontainer'>
              <div className='bikerpageHeader'>
              <h1>The blogs realted to bikes will be displayed here</h1>
              <p>To add the blogs : <button className='clickHereButton' onClick={newBlogItem}>Click Here</button></p>
              </div>
        
              <div>
                {
                  data.map((singleData) => (
                    <BikeBlog  present = {singleData} key = {singleData.present} deleteBlogItem = {deleteBlogItem} deleteMsg = {deleteMsg} editBlogItem = {editBlogItem}/>
                  ))
                }
              </div>
            </div>)
            }
          </div>
            </div>)
      }
    </div>
  )
}

export default CategoryPage1