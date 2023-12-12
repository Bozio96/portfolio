import DatosPersonales from "./components/Main/DatosPersonales";
import Proyectos from "./components/Main/Proyectos";
import DescripcionFormal from "./components/Main/DescripcionFormal";
import Nav from "./components/Header/Nav";

function App() {
  return (
    <>
      {/* <Nav /> */}
      <main>
        <div className="container">
          <DatosPersonales />
          <DescripcionFormal />
          <Proyectos />
        </div>
      </main>
    </>
  );
}

export default App;
