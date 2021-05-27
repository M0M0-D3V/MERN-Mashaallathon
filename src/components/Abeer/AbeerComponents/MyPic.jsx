
import style from "./MyPic.module.css";

function MyPic() {
  return (
    <div>
      <img 
        src="https://cdn64.picsart.com/189798505001201.gif?to=min&r=640"
        alt="Profile"
        className={style.prof}
      />
      
    </div>
  );
}

export default MyPic;