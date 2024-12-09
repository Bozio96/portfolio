import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { Button } from "@mui/material";

export default function DescripcionFormal() {
  return (
    <article className="descripcionFormal">
      <div className="txtDescripcionPersonal">
        <h3>Hola!</h3>
        <p>
          Me llamo Rodrigo Bozio, tengo 28 años. Actualmente estudio Ingeniería en Sistemas
          hasta el tercer (3) año inclusive.
        </p>
        <p>
          Como extra a los estudios universitarios realicé un curso de
          desarrollo web Full Stack terminando dentro del “TOP 10” de mis
          comisiones, siendo este el 10% de los estudiantes con mayores
          calificaciones.
        </p>
        <p>
          Me incliné por el
          área de desarrollo, no solo limitado a web, sino que mis intereses
          abarcan mucho más. Soy demasiado
          perseverante. Me considero una persona innovadora y obstinada. 
        </p>
      </div>

      <div className="cursos">
        <h3>Cursos</h3>
        <ul>
          <Button startIcon={<HistoryEduIcon />} href="https://res.cloudinary.com/dnfil5isx/image/upload/v1702412904/desarrolloWebDifuminado_wtlhmx.png" target="_blank" variant="text" color="secondary">
            Desarrollo Web
          </Button>
          <Button startIcon={<HistoryEduIcon />} href="https://res.cloudinary.com/dnfil5isx/image/upload/v1702412904/jsDifuminado_jbwwmy.png" target="_blank" variant="text" color="secondary">
            JavaScript
          </Button>
          <Button startIcon={<HistoryEduIcon />} href="https://res.cloudinary.com/dnfil5isx/image/upload/v1702412904/reactDifuminado_ffz1j8.png" target="_blank" variant="text" color="secondary">
            React
          </Button>
          <Button startIcon={<HistoryEduIcon />} href="https://res.cloudinary.com/dnfil5isx/image/upload/v1702412904/backendDifuminado_mzi2lj.png" target="_blank" variant="text" color="secondary">
            Programacion Backend
          </Button>
        </ul>
      </div>

      <div className="aptitudes">
        <h3>Aptitudes</h3>
        <ul>
          <li>Node Js</li>
          <li>React Js</li>
          <li>Next Js</li>
          <li>Material UI</li>
          <li>Tailwind</li>
          <li>Express Js</li>
          <li>MongoDb</li>
          <li>Git</li>
          <li>Inglés A2</li>
        </ul>
      </div>
    </article>
  );
}
