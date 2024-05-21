import { User } from "./User";

// list or working with array in react
function App() {
  const planet = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {planet.map((planet, key) => 
        planet.isGasPlanet && <h1>{ planet.name}</h1> 
      )}
    </div>
  );
}

export default App;
