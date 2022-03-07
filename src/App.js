import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#343a40";
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="Text-Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter a Text to analyse" mode={mode}/>
      </div>
    </>
  );
}

export default App;
