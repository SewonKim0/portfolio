import './App.css';
import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills"
import Albums from "./Components/Albums/Albums";

function App() {
  //processEnv
  let processEnv = process.env.PUBLIC_URL;

  //state: iconMap
  const [iconMap, setIconMap] = useState(null);
  //fetch: iconMap
  useEffect(() => {
    fetch(processEnv + "/Api/icon-map.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setIconMap(json);
      })
  }, [])

  return <>
    <Navbar />
    <Header />
    <About />
    <Skills
      iconMap={iconMap}
    />
    <Albums />
  </>
}

export default App;