import './App.css';
import React,{useState} from 'react'
import Homebar from './components/Homebar';
import Navbar from './components/Navbar';
import Alertro from './components/Alertro';
import AboutUs from './components/AboutUs';
import{
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type,message) =>{
    setAlert({
      type: type,
      msg : message
    })
  } 
  const [btntext , setBtntext] = useState("Enable : Light mode") 
  const [mode,setMode] = useState('light');
  const changeOnClick = () =>{
    if(mode === 'light'){
      setMode('dark')
        document.body.style.backgroundColor ="#477386"
        setBtntext("Enable : Dark mode")
        showAlert("success : " , "Dark mode has been Enbled mere Bhai")
    }else{
      setMode('light')
      document.body.style.backgroundColor ="#74797e"
      setBtntext("Enable : Light mode")
      showAlert("success : " , "Light mode has been Enabled mere bhai")
    }
  }
 

  return (
   <>
        <Navbar title="Dev~modifier"btntext={btntext} mode={mode} changeOnClick={changeOnClick}/>
        <Alertro alert={alert}/>
       
        <Routes>
             <Route path='/' element={<div className="container "><Homebar heading=" Write The Text For Formatting "/></div>} />
             <Route path='/about' element={<div className="container"><AboutUs/></div>} />
        </Routes>
   </>
  );
}

export default App;
