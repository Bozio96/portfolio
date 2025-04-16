import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

export default function DatosPersonales() {
  return (
    <Container sx={{ p: 2 }}>
      {/* <div className="logo">
        <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1702329663/IMG-20210509-WA0027-removebg-preview_wbkzyv.png" alt="logo" />
        </div> */}
      {/* Foto de perfil */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", my:5 }}
      >
        <Avatar
          src="https://res.cloudinary.com/dnfil5isx/image/upload/v1733841170/FOTO_cv2-removebg-preview_qzbtrr.png"
          alt="Foto de perfil"
          sx={{
            width: 150,
            height: 150,
            border: "1px solid white",
          }}
        />
        <Typography variant="h2" component="h1" color="rgb(255, 255, 255)" textAlign='center'>
          Rodrigo Bozio
        </Typography>
      </Box>

      {/* Contacto*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: {xs:"center", md:"flex-start"},
        }}
      >
        {/* Redes sociales */}
        <Box
          sx={{
            display: "column",
            gap: 1,
          }}
        >
          <Typography variant="h5" color="rgb(255,255,255)" textAlign='center'>
            Redes Sociales
          </Typography>
          <Box sx={{ display: "flex", justifyContent: {xs:'center', md:"flex-start"} }}>
            {/* LINKEDIN */}

            <Tooltip title="LinkedIn" arrow>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/rodrigo-bozio-a2838221b/"
                target="_blank"
                aria-label="LinkedIn"
                sx={{ color: "#0e76a8" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>

            {/* WHATSAPP */}

            <Tooltip title="WhatsApp" arrow>
              <IconButton
                component="a"
                href="https://wa.me/+5493402486731?text=Hola%20Rodrigo."
                target="_blank"
                aria-label="WhatsApp"
                sx={{ color: "#0e76a8" }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>

            {/* GITHUB */}

            <Tooltip title="GitHub" arrow>
              <IconButton
                component="a"
                href="https://github.com/Bozio96"
                target="_blank"
                aria-label="GitHub"
                sx={{ color: "#0e76a8" }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        {/* Telefono */}
        <Box
          sx={{
            display: "column",
            gap: 1,
          }}
        >
          <Typography variant="h5" color="rgb(255,255,255)" textAlign='center'>
            Teléfono
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title="Llamar" arrow>
              <IconButton
                component="a"
                href="tel:+543402486731"
                aria-label="Call"
                sx={{ color: "#0e76a8" }}
              >
                <CallIcon />
              </IconButton>
            </Tooltip>
            <Typography variant="body2" color="rgb(255,255,255)">
              3402486731
            </Typography>
          </Box>
        </Box>
        {/* Email */}
        <Box
          sx={{
            display: "column",
            gap: 1,
          }}
        >
          <Typography variant="h5" color="rgb(255,255,255)" textAlign='center'>
            Email
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Tooltip title='Enviar Correo' arrow>
              <IconButton
                component="a"
                href="mailto:rodrigobozio96@gmail.com?subject=Consulta desde portfolio"
                aria-label="Email"
                sx={{ color: "#0e76a8" }}
              >
                <EmailIcon />
              </IconButton>
            </Tooltip>
            <Typography variant="body2" color="rgb(255,255,255)">
              rodrigobozio96@gmail.com
            </Typography>
          </Box>
        </Box>
        {/* Ubicación */}
        <Box
          sx={{
            display: "column",
            gap: 1,
          }}
        >
          <Typography variant="h5" color="rgb(255,255,255)">
            Zona de residencia
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              component="a"
              href="https://www.google.com/maps/place/Rosario,+Santa+Fe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Maps"
              sx={{ color: "#0e76a8" }}
            >
              <LocationOnIcon />
            </IconButton>
            <Typography variant="body2" color="rgb(255,255,255)">
              Rosario / Santa Fe
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              component="a"
              href="https://www.google.com/maps/place/Santa+Teresa,+Santa+Fe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Maps"
              sx={{ color: "#0e76a8" }}
            >
              <LocationOnIcon />
            </IconButton>
            <Typography variant="body2" color="rgb(255,255,255)">
              Santa Teresa / Santa Fe
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
