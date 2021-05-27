import style from "./Component1.module.css";

function Component1() {
  return (
    <div>
        <div>
            <h1></h1>
        <img
          className={style.profilePic}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRqoZG_6ccmI8VKwHyBiJj0ki7zVtzJP1qA&usqp=CAU"
          alt="nouf"
        />
        </div>
     <br></br>
      <p>
        <b>Education</b>: Bachelor's in Computer Science{" "}
      </p>
      <p>
        <b>Favorite language</b>: Java
      </p>
      <p>
        <b>work experience</b>: Computer Trainer
      </p>
      <p>
        <b>certificates</b>: PMP 
      </p>
    
    </div>
  );
}

export default Component1;