import React, { Component } from 'react';
import './App.css';
import CharComponent from './components/CharComponent'
import ValidationComponent from './components/ValidationComponent'
class App extends Component {

   state = { 
     lengthOfText: 0,
     text:""
   }

   handleTextListener =(event) =>{
     this.setState(
       {
         lengthOfText : event.target.value.length,
         text:event.target.value
       }
     )
  }

  deleteCharacter=(index)=>{
     const arrayOfChars = this.state.text.split('')
     arrayOfChars.splice(index,1)
     const newText = arrayOfChars.join('')
     this.setState({text:newText,
                 lengthOfText:newText.length})

  }

  render() {

    let characters =
     this.state.text.split('').map((char,index) =>{
      return <CharComponent click ={this.deleteCharacter.bind(this,index)} character = {char} key ={index}/>
     })

  
    return (
      <div className="App">

        <input type="text" onChange ={this.handleTextListener} value ={this.state.text}/>
    <p>The length of entered text is {this.state.lengthOfText}</p>
    <ValidationComponent text ={this.state.text}/>
    {characters}
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component  ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (CharComponent) and style it as an inline box (display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
