import { useContext, useState } from 'react'
import { Dark } from './Components/Dark'
import { Light } from './Components/Light'


import estilo from './Styles/app.module.css'	// importando o estilo
import { ThemeContext } from './ThemeContext/ThemeContext';

function App() {
  const {theme,dark,luz,color}=useContext(ThemeContext);



  return (
    <div style={{backgroundColor: `${color}`}}  
    className={estilo.app}>
        <div style={{display:`${dark}`}}><Light/></div>
        <div style={{display:`${luz}`}}><Dark/></div>
    </div>
  )
}

export default App
