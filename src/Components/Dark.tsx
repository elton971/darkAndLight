
import style from "../Styles/dark.module.css";
import darkPng from "../Assets/dark.png";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";


export const Dark = () => {

    const { toggleTheme } = useContext(ThemeContext);

    //return dark mode
    return(
        <div className={style.darkContainer}>
            
        <div className={style.dakrConttent}>
            <button className={style.buttonDark}
            onClick={()=>toggleTheme('light')}>
                <img src={darkPng} alt="" />
            </button>
            <p>Clica para ver o efeito</p>
        </div>
       
        
        </div>
    )
}