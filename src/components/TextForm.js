import React, {useState} from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleUpChange = (event) => {
    setText(event.target.value);
    
  };

  const [text, setText] = useState("");
  // text = "new text"; // wrong way to update
  // setText("new text"); // correct way to update
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleUpChange} placeholder="Enter text here" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to lowercase</button>
      </div>
      <div className="container my-3">
        <h2>Your text summery</h2>
        <p>{text == "" ? 0 : text.split(" ").length} Words, {text.length} Characters</p>
        <p>{Math.floor(0.008 * text.length)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>

    </>
  );
}
