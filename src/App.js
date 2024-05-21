// import { User } from "./User";
import { useState } from "react";

// working with State in react
function App() {
  const [textColor, setTextColor] = useState("black");



  return (
    <div className="App">
      <button onClick={() => {
        setTextColor(textColor === "black" ? "green" : "black")
      }}>
        color
      </button>
      <h1 style={{color: textColor}}>HI MY NAME IS DANIEL</h1>
    </div>
  );
}

export default App;
