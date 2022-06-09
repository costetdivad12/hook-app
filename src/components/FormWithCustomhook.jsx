import React, {  useState } from "react";
import "./simpleForm.css";

const FormWithCustomhook = () => {
  const [forms, setforms] = useState({
    name: "",
    email: "",
    password:""
  });

  const { name, email ,password} = forms;

 

  const handleChangeName = ({ target }) => {
      setforms({
      ...forms,
      [target.name]: target.value,
      
    });
  };

  return (
    <>
    <div className="container">
      <h1>FormWithCustomhook</h1>
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
    </div>
    <div className="form-group">
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

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="****"
          autoComplete="off"
          value={password}
          onChange={handleChangeName}
        />
      </div>
    </div>
      
    </>
  );
};

export default FormWithCustomhook;
