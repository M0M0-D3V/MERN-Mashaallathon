import "./App.css";
import Monica from "./components/Monica/Monica";
import Alreem from "./components/Alreem/Alreem";
import Asrar from "./components/Asrar/Asrar";

function App() {
  return (
    <div className="flex">
      <Monica />
      <Alreem />
      <Asrar/>
    </div>
  );
}

export default App;
