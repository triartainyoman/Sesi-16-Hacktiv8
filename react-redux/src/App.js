import "./App.css";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";

function App() {
  return (
    <div className="container">
      <ClassCounter />
      <hr />
      <FunctionalCounter />
    </div>
  );
}

export default App;
