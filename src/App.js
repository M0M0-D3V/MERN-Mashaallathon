import "./App.css";
import Maram from "./components/Maram/Maram";
import Yara from "./components/Yara/Yara";
import Rana from "./components/Rana/Rana";
import Alreem from "./components/Alreem/Alreem";
import Monica from "./components/Monica/Monica";
import Amaal from "./components/Amaal/Amaal";
import Amani from "./components/Amani/Amani";





function App() {
  return (
    <div className="flex">
       <Monica/>

      <Alreem/>
      < Maram/>
      < Yara/>
      <Rana/>
      <Amaal/>
      <Amani/>
    </div>
  );
}

export default App;
