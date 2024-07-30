import { Children, createContext, useState, useEffect } from "react";
export const OptionStore = createContext();
export const ContextProvider = ({children}) =>{
    const data = JSON.parse(localStorage.getItem('data'));
    // console.log(data);
    const [langOptions, setLangOptions] = useState(data);
    // useEffect(()=>{
        // setLangOptions(JSON.parse(localStorage.getItem('data')));
         
    //   }, []) 
    //   console.log("All Lang Data is ", langOptions.data.languages[0]);

    return (
        <OptionStore.Provider value={{langOptions}}> {children}</OptionStore.Provider>
    )
}