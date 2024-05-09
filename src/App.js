import { useState } from 'react';
import './App.css';
import ColorInput from './ColorInput/ColorInput';
import Header from './Header/Header';
import Square from './Square/Square';

function App() {
  const [colorValue,setColorValue] = useState("");
  const [hexValue,setHexValue] = useState("");
  const [darkText,setDarkText] = useState(true);
  return (
    <div className="App">
      <Header/>
      <Square colorValue={colorValue} hexValue = {hexValue} darkText = {darkText} />
      <ColorInput colorValue={colorValue} setColorValue = {setColorValue} setHexValue = {setHexValue} darkText = {darkText} setDarkText = {setDarkText} />
    </div>
  );
}

export default App;
