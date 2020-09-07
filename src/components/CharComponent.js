import React from 'react'
import './Char.css'



const CharComponent = props => {
return <div className ="char">
    <p onClick = {props.click}> Letter: {props.character}</p>
</div>
}

export default CharComponent