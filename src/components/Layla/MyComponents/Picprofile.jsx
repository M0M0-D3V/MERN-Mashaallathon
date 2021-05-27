import style from "./Component1.module.css";

function Picprofile() {
  return (
    <div>
      <h1 className={style.namecenter}> Layla ..</h1>
      <img
        className={style.profilePic}
        src="https://i.pinimg.com/236x/06/58/d1/0658d182826cec8b1a91bffbbe047810--manga-anime-childhood-memories.jpg"
        alt="layla"
      />
    </div>
    
  );
}

export default Picprofile;
