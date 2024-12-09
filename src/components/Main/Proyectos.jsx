import ProyectCard from "./ProyectCard";

export default function Proyectos() {
  const repos = [
    {
      title: "967Cerveteca",
      path: "https://bozio96.github.io/967-Cerveteca-Bozio-Rodrigo/index.html",
      desc: "Proyecto realizado sin React, css con Bootstrap y SASS",
    },
    {
      title: "967Cerveteca E-Commerce",
      path: "https://bozio96.github.io/Bozio96-967-Cerveteca-EComerce/",
      desc: "E-Commerce creado en JS Vanilla sin React",
    },
    {
      title: "Sistema de ventas ABM genérico (...en proceso)",
      path: "https://github.com/Bozio96/sistemaDeVentas",
      desc: "Un sistema para manipular productos, clientes y ventas, típico de cualquier negocio, en formato web"
    }
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
    <article className="proyectos">
      <h1>Proyectos</h1>
      {/* Aca podria usar las cards y buttons de MUI */}

      <div className="cardsContainer">
        {repos.map((item) => (
          <ProyectCard props={item} />
        ))}
      </div>
    </article>
  );
}
