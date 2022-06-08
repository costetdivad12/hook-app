import React, { useEffect, useState } from "react";
import "./simpleForm.css";
import Message from "./Message";
const SimpleForm = () => {
  const [forms, setforms] = useState({
    name: "",
    email: "",
  });

  const { name, email } = forms;

  useEffect(() => {
    console.log("hey");
  }, []);

  useEffect(() => {
    console.log("FORM");
  }, [forms]);

  useEffect(() => {
    console.log("FORM");
  }, [email]);

  const handleChangeName = ({ target }) => {
    console.log(target);

    setforms({
      ...forms,
      [target.name]: target.value,
      [target.email]: target.value,
    });
  };

  return (
    <>
      <h1>useEfect</h1>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleChangeName}
        />

        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="abs@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleChangeName}
        />
      </div>
      {name==='123' && <Message/>}
    </>
  );
};

export default SimpleForm;
