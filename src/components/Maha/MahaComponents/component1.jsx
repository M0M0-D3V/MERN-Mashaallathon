import style from "./Component1.module.css";

function Component1() {
  return (
    <div>
      <img
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTo7UfGsw-wJx-J9OxM6iu-FQ1nwwIauJNA&usqp=CAU"
        alt="Profile"
        className={style.profile}
        />
        <p><b> Education </b></p> <p> Bachelor's in Computer Science</p>
        <p> <b>Favorite language</b></p><p> Python and html </p>
        <p> <b>Love to do </b></p><p> Reading ,Watching Anime and Codening </p>
        </div>
    );
    }

export default Component1;