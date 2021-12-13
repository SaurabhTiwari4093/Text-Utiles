import React,{useState} from 'react'

export default function TextArea(props) {
    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "info")
    }

    const handleDownClick = () => {
        let newText2=text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to Lower Case", "info")
    }

    const clearText = () => {
        setText("");
        props.showAlert("Text cleared", "danger")
    }

    const handleOnChange= (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <div className="mb-3">
            <h1>Enter the text to analysis below</h1>
            <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="mytext" rows="8" value={text} placeholder="Enter text here" onChange={handleOnChange} ></textarea>
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleDownClick} >Convert to LowerCase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={clearText} >Clear Text</button>
            <h4>Text summary</h4>
            <p>{text===""?"0":(text[text.length-1]===' '?(text.split(" ").length-1):text.split(" ").length)} words and {text.length} character</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
    )
}
