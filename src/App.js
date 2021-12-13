import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
          setAlert(null) 
        }, 2000);
  }

  const toggle=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='#3e4041';
        document.body.style.color='white';
        showAlert("Dark mode is enabled","success");
        document.title="Text Utiles-Dark";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        showAlert("Light mode is enabled","success");
        document.title="Text Utiles-Light";
      }
  }
  return (
    <Router>
      <Navbar title="Text Utiles" mode={mode} toggle={toggle}/>
      <Alert alert={alert}/>
      <div className="container my-5">
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/" element={<TextArea mode={mode} showAlert={showAlert}/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
