import React from 'react'



const Validation = props => {
if(props.text.length<5)
return <p> Text too short</p>
else
return <p>Text  long enough</p>
}

export default Validation