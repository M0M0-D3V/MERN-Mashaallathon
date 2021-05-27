import "./App.css";
import Monica from "./components/Monica/Monica";
import Alreem from "./components/Alreem/Alreem";
import Asrar from "./components/Asrar/Asrar";
import Abeer from "./components/Abeer/Abeer";
import Amal from "./components/Amal/Amal";
import Layla from "./components/Layla/Layla";
import Maha from "./components/Maha/Maha";
import Nouf from "./components/Nouf/Nouf";
import Rawan from "./components/Rawan/Rawan";

function App() {
  return (
    <div className="flex">
      <Monica />
      <Alreem />
      <Rawan />
      <Abeer />
      <Amal />
      <Layla />
      <Maha />
      <Nouf />
      <Asrar/>
    </div>
  );
}

export default App;
