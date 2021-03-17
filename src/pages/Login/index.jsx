import "./styles.css";

const Login = () => {
  return (
    <div className="container-login">
      <h2>Iniciar sesión</h2>
      <form className="wrapper">
        <div className="input-data">
          <input name="name"type="text" required autoComplete="off" />
          <div className="underline"></div>
          <label htmlFor="name">E-mail</label>
        </div>
        <div className="input-data">
          <input name="contraseña"type="text" required autoComplete="off" />
          <div className="underline"></div>
          <label htmlFor="contraseña">Contraseña</label>
        </div>

      </form>





      {/* <div className="form-log-in">
        <h3>¡Hola! Ingresa tu email y contraseña!</h3>

        <form>
          <div className="form-group">
            <label className="label-name" htmlFor="email">
              Ingrese su email
            </label>
            <input type="email" name="email" autoComplete="off" required />
          </div>

          <div className="form-group">
            <label className="label-name" htmlFor="contraseña">
              Ingrese su contraseña
            </label>
            <input
              type="password"
              name="contraseña"
              autoComplete="off"
              required
            />
          </div>
          <button>Ingresar</button>
        </form>
      </div> */}
    </div>
  );
};
export default Login;
