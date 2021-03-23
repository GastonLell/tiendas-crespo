import "./styles.css";

import { useState } from "react";

import { createUser } from "../../firebase/client";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChangueInput = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    createUser(user);
  };
  return (
    <div className="container-login">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmitForm} className="wrapper">
        <div className="input-data">
          <input
            name="email"
            type="text"
            required
            autoComplete="off"
            onChange={handleChangueInput}
          />
          <div className="underline"></div>
          <label htmlFor="email">E-mail</label>
        </div>
        <div className="input-data">
          <input
            name="password"
            type="password"
            required
            autoComplete="off"
            onChange={handleChangueInput}
          />
          <div className="underline"></div>
          <label htmlFor="password">Contraseña</label>
        </div>
        <button>Registrarme</button>
      </form>
    </div>
  );
};
export default Login;
