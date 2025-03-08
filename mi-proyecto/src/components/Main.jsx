import "../styles/main.css";

function Main() {
  return (
    <main>
      <div className="container-text">
        <p className="p-max animate__animated animate__flipInX">CONSIGUE</p>
        <p className="p-med-2 ">LAS ENTRADAS</p>
        <br />
        <p className="p-mi">DE TUS</p>
        <br />
        <p className="p-med-1">ARTISTAS O EVENTOS</p>
        <br />
        <p>FAVORITOS</p>
      </div>
      <div className="container-inter">
        <div>
          <p className="p-max animate__animated animate__pulse">
            ¿A QUE ESTAS ESPERANDO?
          </p>
          <p className="p-med-2 animate__animated animate__pulse">
            ECHALE UN VISTAZO A TODOS NUESTROS EVENTOS
          </p>
        </div>
        <div>
          <button className="futuristic-btn container-inter_btn">
            VER TODOS LOS EVENTOS
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
