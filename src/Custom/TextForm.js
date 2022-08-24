import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnClick = () => {
        const a = text.toUpperCase();
        setText(a)
    }
    const handleOnChange = (event) => {
        console.log("text changed")
        setText(event.target.value)

    }
    const handleDownClick = (event) => {
        const a = text.toLowerCase();
        setText(a);
    }
    const handleClear = (event) => {
        setText("");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    const handleReverse = () => {
        setText(text.split('').reverse().join(''));
    }
    const handleExtraSpaces = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return (
        <>
            <div className="container">
                <h1>{props.Heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" id="mybox" rows="8" placeholder="Enter text here" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse</button>
                <button className="btn btn-primary my-3" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview!"}</p>
            </div>


        </>

    )
}
