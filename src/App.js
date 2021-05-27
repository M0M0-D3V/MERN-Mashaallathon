import "./App.css";
import Monica from "./components/Monica/Monica";
import Alreem from "./components/Alreem/Alreem";
import Rawan from "./components/Rawan/Rawan";

function App() {
  return (
    <div className="flex">
      <Monica />
      <Alreem />
      <Rawan />
    </div>
  );
}

export default App;
