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
    setCopy("Copy to clipboard")
  };

  const handleClrClick = () => {
    setText("")
  };

  const handleCopyToClip = () => {
    var text = document.getElementById("myBox")
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
      .then(() => {
        setCopy("Copied to clipboard");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  };

  const [text, setText] = useState("");
  // text = "new text"; // wrong way to update
  // setText("new text"); // correct way to update

  const [copy, setCopy] = useState("Copy to clipboard")
  return (
    <>
      <div className="container" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleUpChange} placeholder="Enter text here" id="myBox" rows="8" style={{color: props.mode === "light" ? "black" : "white", backgroundColor : props.mode === "light" ? "white" : "#343a40"}}></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button className="btn btn-success m-2" onClick={handleCopyToClip}>{copy}</button>
        <button className="btn btn-danger m-2" onClick={handleClrClick}>Clear text</button>
      </div>
      <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h2>Your text summery</h2>
        <p>{text == "" ? 0 : text.split(" ").length} Words, {text.length} Characters</p>
        <p>{Math.floor(0.008 * text.length)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text === "" ? "Type text in above box to preview here" : text}</p>
      </div>

    </>
  );
}
