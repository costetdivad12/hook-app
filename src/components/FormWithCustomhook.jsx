import React from "react";
import useForm from "../hooks/useForm";
import "./simpleForm.css";

const FormWithCustomhook = () => {
  const [formsValues, handleChangeInput] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formsValues;

  const handleSummit = (e)=>{
    e.preventDefault()
     console.log(formsValues);
  }

  return (
    <form onSubmit={handleSummit}>
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
            onChange={handleChangeInput}
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
            onChange={handleChangeInput}
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
            onChange={handleChangeInput}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-warning">Guardar</button>
    </form>
  );
};

export default FormWithCustomhook;
