import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function DatosPersonales() {
  return (
    <article className="datosPersonales">
      {/* <div className="logo">
        <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1702329663/IMG-20210509-WA0027-removebg-preview_wbkzyv.png" alt="logo" />
      </div> */}
      <div className="fotoMia">
        <img
          src="https://res.cloudinary.com/dnfil5isx/image/upload/v1702329318/Captura_desde_2023-12-11_18-14-17_xp8xcs.png"
          alt="Foto de perfil"
        />
      </div>
      <ul className="linksContacto">
        <li>
          <a
            href="https://www.linkedin.com/in/rodrigo-bozio-a2838221b/"
            target="_blank"
          >
            <LinkedInIcon className="iconLinkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+5493402486731?text=Hola%20Rodrigo."
            target="_blank"
          >
            <WhatsAppIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/Bozio96" target="_blank">
            <GitHubIcon />
          </a>
        </li>
      </ul>
      <div className="listDatosPersonales">
        <ul>
          <div className="itemPersonal">
            <h5>Telefono</h5>
            <li>3402-486731</li>
          </div>
          <div className="itemPersonal">
            <h5>Email</h5>
            <li>rodrigobozio96@gmail.com</li>
          </div>
          <div className="itemPersonal">
            <h5>Zona de Residencia</h5>
            <li>Rosario / Santa Fe</li>
            <li>Santa Teresa / Santa Fe</li>
          </div>
        </ul>
      </div>
    </article>
  );
}
