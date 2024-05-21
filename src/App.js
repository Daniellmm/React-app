// import { User } from "./User";
import { useState } from "react";

// working with State in react
function App() {
  const [age, setAge] = useState(0);

 const increaseAge = () => {
   setAge(age + 1)
  };

  return (
    <div className="App">
      { age} <button onClick={increaseAge}>Increase age</button>
    </div>
  );
}

export default App;
