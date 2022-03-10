import React, {useState} from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text converted to uppercase","success")
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text converted to lowercase","success")
  }

  const handleUpChange = (event) => {
    setText(event.target.value);
    setCopy("Copy to clipboard")
    
  };

  const handleClrClick = () => {
    setText("")
    props.showAlert("Text cleared","success")
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
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard","success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces","success")
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
        <button className="btn btn-primary m-2" disabled={text.length===0} onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary m-2" disabled={text.length===0} onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary m-2" disabled={text.length===0} onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button className="btn btn-success m-2" disabled={text.length===0} onClick={handleCopyToClip}>{copy}</button>
        <button className="btn btn-danger m-2" disabled={text.length===0} onClick={handleClrClick}>Clear text</button>
      </div>
      <div className="container my-3" style={{color: props.mode === "light" ? "black" : "white"}}>
        <h2>Your text summery</h2>
        <p>{text.split(/\s/).filter((element) => {return element.length !== 0}).length} Words, {text.length} Characters</p>
        <p>{Math.floor(0.008 * text.length)} Minutes read</p>
        <h3>Preview</h3>
        <p>{text === "" ? "Nothing to preview!" : text}</p>
      </div>

    </>
  );
}
