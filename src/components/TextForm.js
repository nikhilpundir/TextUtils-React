import React, {useState} from 'react'


export default function TextForm(props) {
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);

    }
    const handleUpClick = ()=>{
        // console.log("Upper case was clicked "+ text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick = ()=>{
        // console.log("Upper case was clicked "+ text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClrClick = ()=>{
        // console.log("Upper case was clicked "+ text);
        let newText= '';
        setText(newText)
        props.showAlert("Cleared!","success");
    }
    const handleRevClick = ()=>{
        let newText= text.split("").reverse().join("");
        setText(newText)
        props.showAlert("Reversed!","success");
    }
    // const wordCount=()=>{
    //     let wc=text.split(" ");
        
    // }
    const [text, setText] = useState('');
    // text="new text"; wrong way to change text
    // setText("newText"); correct way 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleRevClick}>Reverse</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>
                Your text summary
            </h2>
            {/* <p>{text.split(" ").length} Words and {text.length} characters</p> */}
            <p >{((text.trim().split(" ")).filter(function (element) {
                    return element !== "";
                })).length} words and {text.length} characters </p>
                
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the text box above to preview it here"}</p>
        </div>
        </>
    )
}
