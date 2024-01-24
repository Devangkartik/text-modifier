import React,{useState} from 'react'

const Homebar = (props) =>{
 const [text,setText] = useState('');
 const copyToText = () =>{
  var text = document.getElementById("ControlTextarea");
    text.select();
   document.getSelection().removeAllRanges();
   navigator.clipboard.writeText(text.value)
 }
 const removeExtraSpace = () =>{
  let newText = text.replace(/\s+/g,' ').trim();
  setText(newText);
 }
 const clearTheText = () =>{
  let newText = '';
  setText(newText)
 }
 const changeToLowClick = () =>{
  let newText = text.toLowerCase();
  setText(newText);
 }
const changeToUpClick = () =>{
let newText = text.toUpperCase();
setText(newText);
}
const capitalizeTheWords = () =>{
  let newText = text.replace(/\b\w/g, (c) => c.toUpperCase());
  setText(newText);
}
const handleOnChange = (event)=>{
   setText(event.target.value);
}
    return(
            <>
            <div className="mb-3 ">
              <h1 htmlFor="exampleFormControlTextarea1"  className="form-label text-center " >{props.heading} </h1>
              <textarea className="form-control " value={text} onChange={handleOnChange} id="ControlTextarea" rows="10"></textarea>
            </div>
            <button disabled={text.length === 0} type="button" onClick={changeToUpClick} className="btn btn-primary mx-2 my-2 ">Convert to Upperase</button>
            <button disabled={text.length === 0} type="button" onClick={changeToLowClick} className="btn btn-primary mx-2 my-2 ">Convert to lowercase</button>
            <button disabled={text.length === 0} type="button" onClick={removeExtraSpace} className="btn btn-primary mx-2 my-2 ">Remove to Extraspaces</button>
            <button disabled={text.length === 0} type="button" onClick={capitalizeTheWords} className="btn btn-primary mx-2 my-2 ">Capitalize Eachwords</button>
            <button disabled={text.length === 0} type="button" onClick={copyToText} className="btn btn-primary mx-2 my-2 ">Copy</button>
            <button disabled={text.length === 0} type="button" onClick={clearTheText} className="btn btn-primary mx-2 my-2 ">Clear</button>
       <div className="container">
            <h2>Preview of the Dev~Modifier</h2>
            <p>There are {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} charaters in your docs...</p>
            <p>You take {0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length}  minutes time to read All  </p>
            <h3>Here Is the Preview of your text</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
       </div>
     </>
    )
}
export default Homebar ;


