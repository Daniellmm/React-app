// import { User } from "./User";
import { useState } from "react";

// working with State in react
function App() {
  const [count, setCount] = useState(0);



  return (
    <div className="App">
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease</button>
      <button onClick={() => {
        setCount(0);
      }}>Set to zero</button>

      {count}
    </div>
  );
}

export default App;
