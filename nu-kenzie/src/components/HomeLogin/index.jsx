import "./styles.css";
import Svg from "../imgs/image.svg";

function HomeLogin({ setIslogin }) {
  return (
    <div className="home-login-container">
      <div className="img-contents">
        <img src={Svg} alt="" />
      </div>
      <div className="contents-start">
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        <p>Centralize o controle das suas finanças</p>
        <span className="speed-safe">de forma rápida e segura</span>
        <button onClick={() => setIslogin(true)}>Iniciar</button>
      </div>
    </div>
  );
}

export default HomeLogin;
