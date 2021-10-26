import React, { useState } from "react";
import "../../App.css";
import Card from "../searchbar/Card";
import logo from "../../images/logo.svg";
const Topbar = ({ sorting }) => {
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div>
      <div className="container1">
        <div className="left"></div>
        <div className="right">
          <div className="formConatiner">
            <img src={logo} alt="zingbus" />
            <h2>Zingbus School</h2>
            <button onClick={handleSubmit}>Get Student</button>
            {show ? <Card /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
