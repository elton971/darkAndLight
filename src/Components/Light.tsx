import style from "../Styles/theme.module.css";
import lightPng from "../Assets/light.png";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export const Light=()=>{
    const { toggleTheme } = useContext(ThemeContext);

    return(
        <div className={style.lightContainer}>
            
            <div className={style.lightConttent}
            onClick={()=>toggleTheme('dark')}>
                <button className={style.buttonLight}>
                    <img src={lightPng} alt="" />
                </button>
                <p>Clica para ver o efeito</p>
            </div>
            
            
        </div>
    )

}