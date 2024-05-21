// import { User } from "./User";
import { useState } from "react";

// working with State in react
function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  );
}

export default App;
