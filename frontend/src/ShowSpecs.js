import React from 'react'

const ShowSpecs = (props) => {

    const {val1,val2} = props
    console.log(val1,val2)
    
    
  return (
    <div>
        <p>{val2} ::::: {val1}</p>
    </div>
  )
}

export default ShowSpecs