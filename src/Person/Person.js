import React from 'react'

const Person =(props)=>{
    return(
    // <p>I'm a person and my age is {Math.floor(Math.random()*30)}</p>
    <div>
    <p>I'm {props.name} and my age is {props.age}</p>
    <p>{props.children}</p>
    </div>
    )
}

export default Person;