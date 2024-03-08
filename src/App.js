import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
import './App.css';

import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#031d37';
      showAlert('Dark mode has been enabled', 'success');

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')

    }
  }

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)

  }
  return (
    <>
      <Router>
        <Navbar title='TextUtiles' home='Home' about='About' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading='Enter the text to analyze below' mode={mode} alert={showAlert} />} />
          </Routes>
        </div >
      </Router >
    </>
  );
}

export default App;
