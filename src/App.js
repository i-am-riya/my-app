import './App.css';
import Alert from './Components/Alert';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
setAlert({
  msg: message,
  type: type,
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = "#00050f";
    showAlert("Dark mode has been enabled", "success");
    document.title = "TextUtils - Dark Mode"
  } else {
    setMode('light');
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "success");
  }

  // setTimeout(() => {
  //   showAlert();
  // }, 1500);
}

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route index path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analayse below" mode={mode} />} />
        <Route exact path="/about" element={<AboutUs />} mode={mode} />
        {/* <Route component={NotFound} /> */}
        </Routes>
      </div>
      <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
