
// list or working with array in react
function App() {
  const name = ["Daniel", "David","Precious", "Queen" ];

  return (
    <div className="App">
      {name.map((name, key) =>{
      return <h1 key={key}>{name}</h1>
 } )}

    </div>
  );
}


export default App;
