import React, { useState } from "react";
import Profile from "./MyComponents/Profile.jsx";
import Info from "./MyComponents/Info.jsx";
import style from "./Rawan.module.css";
import Form from "./MyComponents/Form.jsx";

const RawanAlsabbah = () => {
  return (
    <div className={style.card}>
      <Profile />
      <Info />
      <Form />
    </div>
  );
};

export default RawanAlsabbah;
