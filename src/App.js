import "./App.css";
import Monica from "./components/Monica/Monica";
import Alreem from "./components/Alreem/Alreem";
import Rawan from "./components/Rawan/Rawan";
import Hissah from "./components/Hissah/Hissah";
import Samaher from "./components/Samaher/Samaher";
import Rahaf from "./components/Rahaf/Rahaf";

function App() {
  return (
    <div className="flex">
      <Monica />
      <Alreem />
      <Rawan 
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
    </div>
  );
}

export default App;
