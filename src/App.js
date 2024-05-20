

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior DEV" company="Amazon" />
      <Job salary={60000} position="Junior DEV" company="Google" />
      <Job salary={20000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (props) => {
return(
  <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
  </div>
);
};
export default App;
