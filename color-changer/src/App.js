import Header from "./Header";
import Results from "./Results";
import { useState } from "react";
import Input from "./Input";
import './App.css';

function App() {
  const [bgColorValue , setColorValue] = useState("");
  return (
    <div className="App">
     <Header />
     <Results 
     bgColorValue={bgColorValue}
     />
     <Input 
     bgColorValue={bgColorValue}
     setColorValue={setColorValue}
     />
    </div>
  );
}

export default App;
