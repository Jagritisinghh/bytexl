import './App.css';
import {useState} from "react"

import Weather from "./components/Weather";
import Converter from "./components/Converter";
import Quotes from "./components/Quotes";

function App() {
  const [tab, setTab] = useState("weather");

  

 
  return (
   <div className="app-container">
      <div className="tabs">
        <button onClick={() => setTab("weather")} className={tab === "weather" ? "active-tab" : "tab"}>Weather</button>
        <button onClick={() => setTab("converter") } className={tab === "converter" ? "active-tab" : "tab"}>Currency</button>
        <button onClick={() => setTab("quotes")} className={tab === "quotes" ? "active-tab" : "tab"}>Quotes</button>
      </div>

      <div className="content">
        {tab === "weather" && <Weather />}
        {tab === "converter" && <Converter />}
        {tab === "quotes" && <Quotes />}
      </div>
    </div>
  );
}

export default App;
