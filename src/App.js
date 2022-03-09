import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {setAlert(null);}, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text-Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
          {/* exact used for exact matching of links */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />} />
        {/* <TextForm heading="Enter a Text to analyse" mode={mode} showAlert={showAlert}/> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
