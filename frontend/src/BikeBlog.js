import React from 'react'
import ShowSpecs from './ShowSpecs'
import "./BikerPage.css"

const BikeBlog = (props) => {
    const data = props.present
    const [showSpec,changeShowSpecs] = React.useState(false)
    const specs = JSON.parse(data.specifications)
    const {deleteBlogItem,deleteMsg,editBlogItem} = props

    console.log(data.specifications)

    const deleteBlog = () => {
        deleteBlogItem(data.id) 
    }

    const editBlog = () => {
        console.log('editting after click')
        editBlogItem(data.id)
     }

    const showSpecifications = () => {
        changeShowSpecs((prevState) => (!prevState))
    }
  return (
    <div>
        <div className = "childpage">
            <div>
                <img src = {data.image} className='childImage' alt = {data.title}/>
            </div>
            <div className='text'>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p>Click to know about specs == <button onClick={showSpecifications} className='hit-me-button'>Hit Me</button></p>
                <div>
                    {
                        showSpec ? (
                            Object.keys(specs).map((key) => <ShowSpecs val1 = {specs[key]} val2 = {key}/>)
                        ) : null
                    }
                </div>
                <div>
                    <button className='edit-button' onClick={editBlog}>Edit Blog</button>
                    <button className='delete-button' onClick={deleteBlog}>Delete Blog</button>
                </div>
                <div>
                    {
                        deleteMsg ? (<p>This blog is deleted refresh to see results</p>) : null
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default BikeBlog