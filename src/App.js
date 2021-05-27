import "./App.css";
import Monica from "./components/Monica/Monica";
import Alreem from "./components/Alreem/Alreem";
import Abeer from "./components/Abeer/Abeer";
import Amal from "./components/Amal/Amal";
import Layla from "./components/Layla/Layla";
import Maha from "./components/Maha/Maha";
import Nouf from "./components/Nouf/Nouf";

function App() {
  return (
    <div className="flex">
      <Monica />
      <Alreem />
      <Abeer />
      <Amal />
      <Layla />
      <Maha />
      <Nouf />
    </div>
  );
}

export default App;
