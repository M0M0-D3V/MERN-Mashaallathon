import "./App.css";
import Maram from "./components/Maram/Maram";
import Yara from "./components/Yara/Yara";
import Rana from "./components/Rana/Rana";
import Alreem from "./components/Alreem/Alreem";
import Monica from "./components/Monica/Monica";
import Amaal from "./components/Amaal/Amaal";
import Amani from "./components/Amani/Amani";
import RawanAlsabbah from "./components/RawanAlsabbah/RawanAlsabbah";
import Hissah from "./components/Hissah/Hissah";
import Samaher from "./components/Samaher/Samaher";
import Rahaf from "./components/Rahaf/Rahaf";
import Asrar from "./components/Asrar/Asrar";
import Abeer from "./components/Abeer/Abeer";
import Amal from "./components/Amal/Amal";
import Layla from "./components/Layla/Layla";
import Maha from "./components/Maha/Maha";
import Nouf from "./components/Nouf/Nouf";
import RawanAlhazmi from "./components/RawanAlhazmi/RawanAlhazmi";

function App() {
  return (
    <div className="flex">
      <Monica />
      <Alreem />
      <Maram />
      <Yara />
      <Rana />
      <Amaal />
      <Amani />
      <RawanAlhazmi
        name="Rawan"
        pic="https://image.freepik.com/free-vector/people-profile-icon_24877-40756.jpg"
        education="CS"
        language="Java"
        unique="Graphic Design"
      />
      <Hissah
        name="Hissah"
        pic="https://pbs.twimg.com/profile_images/2358587348/q07gd3xojcu8isd30xot_400x400.jpeg"
        education="CS"
        language="Python"
        unique="Fasion design"
      />
      <Samaher
        name="Samaher"
        pic="http://img.youm7.com/images/NewsPics/gallery/pics/720162313556851%D8%A8%D9%88%D8%B3%D8%AA%D8%B1-%D8%A8%D9%88-(3).jpg"
        education="CIS"
        language="Javascript"
        unique="Makeup Artist"
      />
      <Rahaf
        name="Rahaf"
        pic="https://123emoji.com/wp-content/uploads/2016/04/chibi-10.png"
        education="MIS"
        language="HTML"
        unique="Interior Design"
      />
      <RawanAlsabbah />
      <Abeer />
      <Amal />
      <Layla />
      <Maha />
      <Nouf />
      <Asrar />
    </div>
  );
}

export default App;
