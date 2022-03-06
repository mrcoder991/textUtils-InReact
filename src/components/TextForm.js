import React, {useState} from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleUpChange = (event) => {
    setText(event.target.value);
    
  };

  const [text, setText] = useState("Enter text here");
  // text = "new text"; // wrong way to update
  // setText("new text"); // correct way to update
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleUpChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
    </div>
  );
}
