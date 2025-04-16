import { Box, Container, Typography } from "@mui/material";
import ProyectCard from "./ProyectCard";

export default function Proyectos() {
  const repos = [
    {
      title: "2025-2050.com",
      path: "https://2025-2050.com",
      desc: "Desarrollo de frontend realizado para ",
      linkText: "MemoArx",
      linkUrl: "https://www.memoarx.com",
      img: "https://res.cloudinary.com/dnfil5isx/image/upload/v1744817569/WhatsApp_Image_2025-04-05_at_22.12.54_kzpnoj.jpg",
    },
    {
      title: "967Cerveteca",
      path: "https://bozio96.github.io/967-Cerveteca-Bozio-Rodrigo/index.html",
      desc: "Proyecto realizado sin React, css con Bootstrap y SASS",
      img: "https://res.cloudinary.com/dnfil5isx/image/upload/v1662515798/imagenes/logo_k84eyr.png"
    },
    {
      title: "967Cerveteca E-Commerce",
      path: "https://bozio96.github.io/Bozio96-967-Cerveteca-EComerce/",
      desc: "E-Commerce creado en JS Vanilla sin React",
      img: "https://res.cloudinary.com/dnfil5isx/image/upload/v1662515798/imagenes/logo_k84eyr.png"
    },
    {
      title: "Sistema de ventas ABM genérico (...en proceso)",
      path: "https://github.com/Bozio96/sistemaDeVentas",
      desc: "Un sistema para manipular productos, clientes y ventas, típico de cualquier negocio, en formato web",
      img: "https://res.cloudinary.com/dnfil5isx/image/upload/v1744817961/grunge-red-work-process-square-rubber-seal-stamp-white-background-grunge-red-work-process-square-rubber-seal-stamp-139592089_jgwibb.png",

    },


    /*    {
      title: "967Cerveteca React",
      path: "https://967-cerveteca-react.vercel.app/",
      desc: "Proyecto realizado con React, DB en Firebase NO DISPONIBLE por el momento",
    }, */
    // {
    //   title: "Access Idiomas",
    //   path: "#",
    //   desc: "Proyecto SPA, LandingPage de Access Idiomas",
    // },
  ];

  return (
    <Container sx={{ backgroundColor: "rgb(17, 17, 17)", py: 5, mt: 5 , borderRadius: '20px'}}>
      <Typography
        variant="h3"
        color="rgb(255,255,255)"
        sx={{ textAlign: "center" }}
      >
        Proyectos
      </Typography>
      {/* Contenedor de cards */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        sx={{ my: 3 }}
      >
        {repos.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: "100%",
                sm: "calc(50% - 16px)",
                md: "calc(33.33% - 16px)",
              },
              display: "flex",
            }}
          >
            <ProyectCard props={item} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
