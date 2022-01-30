import "./styles.css";
import COMPONENTS from "./components";
import { useState } from "react";


export default function App() {
 
  
  return (
    <div className="App">
      <COMPONENTS.Topnavbar/>
      <COMPONENTS.Navbar  />
      <COMPONENTS.Dashboard />
      <COMPONENTS.Footer />
      
    </div>
  );
}
