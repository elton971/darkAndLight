import { createContext, ReactNode, useState } from "react";

interface ThemeContextData{
    theme: string;
    toggleTheme:(tipo:string)=>void;
    dark: string;
    luz: string;
    color: string;
}

interface ThemeContextProps{
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider= ({ children }:ThemeContextProps) => {

    const [dark, setDark] = useState("none");
    const [luz, setLuz] = useState("block");

    const [color, setColor] = useState("#fff");

    const [theme, setTheme] = useState('light');
    

    const toggleTheme = (tipo:string) => {
        setTheme(tipo);
        if(tipo==='dark'){
            setDark("none");
            setLuz("block");
            setColor("#fff");
            
            
        }
        else{
            setDark("block");
            setLuz("none");
            setColor("#000");
        }
       
    }



     return(
         <ThemeContext.Provider value={{
                theme,
                toggleTheme,
                dark,
                luz,
                color

         }}>
                {children}
        </ThemeContext.Provider>
     )
        
}