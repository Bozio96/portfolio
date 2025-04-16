import DatosPersonales from "./components/Main/DatosPersonales";
import Proyectos from "./components/Main/Proyectos";
import DescripcionFormal from "./components/Main/DescripcionFormal";
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <>
    {/* CssBaseline elimina todos los margenes y paddings por defecto del navegador */}
    <CssBaseline/>
    <Box sx={{ backgroundColor: "rgb(31, 31, 31)", width: "100vw"}}>
        <DatosPersonales/>
        <DescripcionFormal/>
        <Proyectos/>   
    </Box>
    </>
  );
}

export default App;
