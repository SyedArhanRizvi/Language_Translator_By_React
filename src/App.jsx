import { useState } from "react";
import "./App.css";
import Option from '../src/OptionsComponents/Option'
import axios from 'axios';
import { useEffect,useContext } from "react";
import { OptionStore } from './contextapi/optionstore'
import Option2 from "./OptionsComponents/Option2";
import { MdOutlineFindReplace } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";



// import { useContext } from 'react'

function App() {
      const [language, setLanguage] = useState();
      const [translateLang, setTranslateLang] = useState();
      const [selectLang, setSelectLang] = useState();
      const [selectLang2, setSelectLang2] = useState();
      const [translatedData, setTranslatedData] = useState();

//   const getAllLang = async ()=>{
//     const options = {
//       method: 'GET',
//       url: 'https://text-translator2.p.rapidapi.com/getLanguages',
//       headers: {
//         'x-rapidapi-key': '1c961dd2d7msh283ebf6bb67718cp13ec92jsn500229935cbf',
//         'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
//       }
//     };
    
//     try {
//       const response = await axios.request(options);
//       console.log(response.data);
//       localStorage.setItem('data', JSON.stringify(response.data));
//     } catch (error) {
//       console.error(error);
//     }
//   } 
//  getAllLang();

    const transLateLang = async ()=>{
      const data = new FormData();
data.append('source_language', selectLang);
data.append('target_language', selectLang2);
data.append('text', language);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'x-rapidapi-key': '1c961dd2d7msh283ebf6bb67718cp13ec92jsn500229935cbf',
    'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
  },
  data: data
};

try {
	const response = await axios.request(options);
	console.log(response.data.data.translatedText);
  setTranslatedData(response.data.data.translatedText);
} catch (error) {
	console.error(error);
}
    }
    // transLateLang();

const  {langOptions} = useContext(OptionStore);
const lg = langOptions.data.languages;
  

  
  const getInputVal = (e)=>{
    setLanguage(e.target.value);
  }

  const getOpVal = (e)=>{
      setSelectLang(e.currentTarget.value);
  }

  const getOpVal2 = (e)=>{
    setSelectLang2(e.currentTarget.value);
  }
  // console.log(selectLang);
  // console.log(selectLang2);
  return <>
    <div className="parent">
      <div className="main">

        <div className="typedLang">
        <div className="langOption"><select name="" id="" onChange={getOpVal}>
          {
            lg.map((item)=>{
              return <Option code={item.code} value={item.name}/>
            })
          } 
          </select></div>
         <div className="input"><textarea name="" id="" onChange={getInputVal}></textarea></div> 
          <div className="voice"><h1><FaMicrophoneAlt /></h1></div>
        </div>

      <div className="getLang">
        <div className="langoptio2">
          <select name="" id="" onChange={getOpVal2}>
            {lg.slice(1, 110).map((item)=>{
              return <Option2 code={item.code} value={item.name}/>
            })}
          </select>
        </div>
        <div className="input2"><textarea name="" id="" value={translatedData}>
          </textarea></div>
          <div className="hear"><RiUserVoiceFill /></div>
      </div>
      </div>
      <div className="btn"><button onClick={transLateLang}><MdOutlineFindReplace /></button></div>
      
  </div>
  </>;
}

export default App;
