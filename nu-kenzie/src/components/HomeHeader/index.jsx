import "./styles.css";

function HomeHeader({ setIslogin }) {
  return (
    <div className="home-card-container">
      <header>
        <div className="header-contents">
          <div className="title">
            <h1>
              <span>Nu</span>Kenzie
            </h1>
          </div>
          <div className="btn-start">
            <button onClick={() => setIslogin(false)}>Início</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomeHeader;
