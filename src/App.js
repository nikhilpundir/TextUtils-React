
import './App.css';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); //whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      showAlert("light mode has been enabled", "success")
      document.title = 'TextUtils - light Mode';

    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#0d1c3e';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        {/* <Navbar/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;
