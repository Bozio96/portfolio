import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faReact,
  faSquareJs,
  faGitAlt,
  faAngular,
  faAws,
} from "@fortawesome/free-brands-svg-icons"; // íconos de marcas
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const calcularEdad = (fechaNacimiento) => {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  return mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())
    ? edad - 1
    : edad;
};
export default function DescripcionFormal() {
  const edad = calcularEdad("1996-08-21");
  return (
    <Container
      sx={{ backgroundColor: "rgb(17, 17, 17)", py: 5, borderRadius: "20px" }}
    >
      <Typography
        variant="h2"
        color="rgb(255,255,255)"
        sx={{ textAlign: "center" }}
      >
        Bienvenido
      </Typography>
      <Typography
        variant="body1"
        color="rgb(255,255,255)"
        sx={{ textAlign: "center" }}
      >
        Me llamo Rodrigo Bozio, tengo {edad} años. Actualmente estudio
        Ingeniería en Sistemas hasta el tercer (3) año inclusive.
      </Typography>
      <Typography
        variant="body1"
        color="rgb(255,255,255)"
        sx={{ textAlign: "center" }}
      >
        Como extra a los estudios universitarios realicé un curso de desarrollo
        web Full Stack terminando dentro del “TOP 10” de mis comisiones, siendo
        este el 10% de los estudiantes con mayores calificaciones.
      </Typography>
      <Typography
        variant="body1"
        color="rgb(255,255,255)"
        sx={{ textAlign: "center" }}
      >
        Me incliné por el área de desarrollo, no solo limitado a web, sino que
        mis intereses abarcan mucho más. Soy demasiado perseverante. Me
        considero una persona innovadora y obstinada.
      </Typography>

      {/* Cursos */}
      <Box sx={{ my: 5 }}>
        <Typography
          variant="h3"
          color="rgb(255,255,255)"
          sx={{ textAlign: "center" }}
        >
          Cursos
        </Typography>

        {/* Contenedor de botones */}
        <Box
          sx={{
            my: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button
            startIcon={<HistoryEduIcon />}
            href="https://res.cloudinary.com/dnfil5isx/image/upload/v1702412904/desarrolloWebDifuminado_wtlhmx.png"
            target="_blank"
            variant="text"
            color="primary"
          >
            Desarrollo Web
          </Button>

          <Button
            startIcon={<HistoryEduIcon />}
            href="https://res.cloudinary.com/dnfil5isx/image/upload/v1702412904/jsDifuminado_jbwwmy.png"
            target="_blank"
            variant="text"
            color="primary"
          >
            JavaScript
          </Button>

          <Button
            startIcon={<HistoryEduIcon />}
            href="https://res.cloudinary.com/dnfil5isx/image/upload/v1702412904/reactDifuminado_ffz1j8.png"
            target="_blank"
            variant="text"
            color="primary"
          >
            React
          </Button>

          <Button
            startIcon={<HistoryEduIcon />}
            href="https://res.cloudinary.com/dnfil5isx/image/upload/v1702412904/backendDifuminado_mzi2lj.png"
            target="_blank"
            variant="text"
            color="primary"
          >
            Programacion Backend
          </Button>
        </Box>
      </Box>

      {/* Aptitudes */}
      <Box>
        <Typography
          variant="h3"
          color="rgb(255,255,255)"
          sx={{ textAlign: "center" }}
        >
          Aptitudes
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={2}
          sx={{ my: 3 }}
        >
          {/* NodeJs */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faNode}
              style={{ color: "#3c873a", fontSize: "35px" }}
            />
            <Typography color="white">NodeJs</Typography>
          </Box>
          {/* ReactJs */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "rgb(75, 69, 228)", fontSize: "35px" }}
            />
            <Typography color="white">ReactJs</Typography>
          </Box>
          {/* ExpressJs */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
           {/*  <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1748463550/Express_lc0vr2.svg" alt="expressLogo" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="35px"
              color="rgb(209, 255, 5)"
            >
              <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z" />
            </svg>
            <Typography color="white">ExpressJs</Typography>
          </Box>
          {/* MaterialUI */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
           {/*  <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1748463550/Material_UI_1_k7ax3m.svg" alt="muiLogo" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="35px"
            >
              <path
                fill="#1FA6CA"
                d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"
              />
              <path
                fill="#1C7FB6"
                d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
              />
              <path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2L48 77.8z" />
              <path
                fill="#1C7FB6"
                d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
              />
            </svg>
            <Typography color="white">MaterialUI</Typography>
          </Box>
          {/* MongoDb */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
          {/* <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1748463550/MongoDB_d8xgde.svg" alt="mongoLogo" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="35px"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#439934"
                d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#45A538"
                d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#46A037"
                d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#409433"
                d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#4FAA41"
                d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#4AA73C"
                d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#57AE47"
                d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#60B24F"
                d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#A9AA88"
                d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#B6B598"
                d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#C2C1A7"
                d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#CECDB7"
                d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#DBDAC7"
                d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#EBE9DC"
                d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#CECDB7"
                d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#4FAA41"
                d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
              />
            </svg>
            <Typography color="white">MongoDb</Typography>
          </Box>
          {/* Git */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faGitAlt}
              style={{ color: "rgb(240, 88, 6)", fontSize: "35px" }}
            />
            <Typography color="white">Git</Typography>
          </Box>
          {/* Ingles  */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ color: "rgb(255, 255, 255)", fontSize: "35px" }}
            />
            <Typography color="white">Inglés B1</Typography>
          </Box>
        </Box>
      </Box>
      {/* Aptitudes en estudio */}
      <Box>
        <Typography
          variant="h4"
          color="rgb(255,255,255)"
          sx={{ textAlign: "center" }}
        >
          Aptitudes en estudio
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={2}
          sx={{ my: 3 }}
        >
          {/* Angular */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faAngular}
              style={{ color: "rgb(245, 23, 23)", fontSize: "35px" }}
            />
            <Typography color="white">Angular</Typography>
          </Box>
          {/* Nest JS */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
           {/*  <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1748463595/Nest.js_yijof6.svg" alt="nestLogo" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="35px"
            >
              <path
                fill="#DF234F"
                d="M75.4.3c-.9 0-1.8.2-2.6.5 1.7 1.1 2.6 2.6 3.1 4.3 0 .2.1.4.1.6 0 .2.1.4.1.6.1 2.9-.8 3.3-1.4 5-1 2.2-.7 4.6.5 6.5.1.2.2.5.4.7-1.3-8.4 5.7-9.6 7-12.2.1-2.3-1.8-3.8-3.3-4.9C77.8.5 76.6.3 75.4.3zm10.5 1.8c-.1.8 0 .6-.1 1 0 .3 0 .6-.1.9-.1.3-.1.5-.2.8-.1.3-.2.5-.3.8-.1.2-.2.4-.3.7-.1.1-.2.3-.3.4-.1.1-.1.2-.2.3-.2.2-.3.5-.5.7l-.6.6c-.2.2-.4.4-.6.5-.7.5-1.5.9-2.2 1.4-.2.2-.5.3-.7.5-.2.2-.4.3-.6.5l-.6.6c-.2.2-.4.4-.5.7-.2.2-.3.5-.5.7-.1.3-.2.5-.4.8-.1.3-.2.5-.3.8-.1.3-.2.6-.2.8 0 .1 0 .3-.1.4 0 .1 0 .3-.1.4v1.4c0 .3 0 .5.1.8 0 .3.1.5.2.8.1.3.2.5.3.8.1.2.2.3.2.5l-7.6-2.9c-1.3-.4-2.5-.7-3.8-1-.7-.2-1.4-.3-2.1-.5-2-.4-4-.7-6-.9h-.2c-2-.2-3.9-.3-5.9-.3-1.5 0-2.9.1-4.3.2-2 .1-4 .4-6 .7l-1.5.3c-1 .2-2 .4-3 .7-.5.1-1 .3-1.5.4-.5.2-1 .4-1.4.6-.4.2-.7.3-1.1.5-.1 0-.1 0-.2.1-.3.2-.6.3-.9.5-.1 0-.2.1-.2.1-.4.2-.7.4-1 .5-.2.1-.5.2-.7.3-.1.1-.2.1-.3.2-.3.2-.6.3-.9.5-.3.2-.6.3-.8.5-.2.2-.5.3-.7.5 0 0-.1 0-.1.1-.2.1-.4.3-.6.5l-.1.1c-.2.1-.3.3-.5.4-.1 0-.1.1-.2.1-.2.1-.3.3-.5.4 0 .1-.1.1-.1.1l-.6.6-.1.1-.6.6s0 .1-.1.1l-.5.5c-.1.1-.2.1-.2.2l-.6.6c0 .1-.1.1-.1.2l-.8.8-.1.1c-.5.6-1.1 1.1-1.7 1.6-.6.5-1.2 1-1.9 1.5s-1.3.9-2 1.3-1.4.7-2.1 1c-.7.3-1.4.6-2.1.8-1.4.3-2.8.9-4 1 0-.5-.3-.4-.6-.4-.3.1-.6.1-.8.2-.3.1-.5.2-.8.3-.3.1-.5.2-.8.4-.2.2-.5.3-.7.5-.2.2-.5.4-.7.6-.2.2-.5.4-.7.6-.2.2-.4.4-.6.7-.2.3-.4.5-.5.8-.2.2-.3.5-.5.8-.1.3-.3.6-.4.9l-.3.9c-.1.3-.1.5-.2.8v.1c-.1.3-.1.7-.1.9.1-.1.1.1.1.3v.4c0 .2.1.4.1.6.1.2.1.4.2.6.1.2.2.4.4.6.1.2.3.4.4.6.2.2.4.4.6.5.2.2.4.4.6.5.8.7 1 .9 2 1.5.2.1.3.2.5.3h.1v.2c0 .3.1.5.2.8.1.3.2.6.3.8l.3.6c0 .1.1.1.1.2.1.3.3.5.4.7.2.2.3.5.5.7l.6.6.6.6H8c.2.2.4.3.6.5.2.2.5.3.7.4.2.1.5.3.8.4.2.1.4.2.7.2 0 0 .1 0 .1.1.1 0 .3.1.4.1-.1 1.8-.1 3.5.1 4.1.3.7 1.8-1.4 3.2-3.7-.2 2.3-.3 5 0 5.8.4.8 2.3-1.8 4.1-4.6 23.4-5.4 44.8 10.8 47.1 33.7-.4-3.6-4.8-5.6-6.9-5.1-1 2.4-2.7 5.6-5.4 7.5.2-2.2.1-4.4-.3-6.6-.7 3-2.1 5.9-4.1 8.3-3.1.2-6.3-1.3-7.9-3.6-.1-.1-.2-.3-.3-.4-.1-.2-.2-.5-.3-.7-.1-.2-.2-.5-.2-.7v-.7-.5c0-.2.1-.5.2-.7.1-.2.1-.5.2-.7.1-.2.2-.5.4-.7.6-1.6.6-2.9-.5-3.6l-.6-.3c-.1 0-.3-.1-.4-.1-.1 0-.2-.1-.3-.1-.2-.1-.5-.1-.7-.2-.2-.1-.5-.1-.7-.1-.2 0-.5-.1-.7-.1h-.5c-.3 0-.5 0-.7.1-.2 0-.5.1-.7.1-.2.1-.5.1-.7.2-.2.1-.4.2-.7.3l-.6.3c-7.7 5-3.1 16.8 2.1 20.2-2 .4-4 .8-4.6 1.2l-.1.1c1.4.9 2.9 1.6 4.5 2.2 2.1.7 4.4 1.3 5.4 1.6 2.7.6 5.5.8 8.3.6 14.6-1 26.6-12.2 28.8-26.8.1.3.1.6.2.9.1.6.2 1.2.3 1.9.1.3.1.6.1.9v.1c0 .3.1.6.1.9 0 .4.1.7.1 1.1V91.6c0 .3-.1.5-.1.8v.3c0 .3-.1.6-.1 1-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1c-.1.3-.1.6-.2.9v.1l-.3.9v.1c-.1.3-.2.7-.3 1-.1.3-.2.6-.4 1-.1.3-.2.7-.4 1-.1.3-.3.6-.4 1-.1.3-.3.6-.4.9 0 .1-.1.2-.1.2s0 .1-.1.1c-2.1 4.3-5.3 8.1-9.3 11.1-.3.2-.5.4-.8.6-.1.1-.2.1-.2.2-.2.2-.5.3-.7.5l.1.2c.5-.1.9-.1 1.4-.2.9-.1 1.7-.3 2.6-.5.2 0 .5-.1.7-.2.2 0 .3-.1.5-.1s.5-.1.7-.1c.2-.1.4-.1.6-.2 3.3-.8 6.5-1.9 9.6-3.2-5.3 7.2-12.3 13-20.5 16.8 3.8-.3 7.6-.9 11.3-2 13.3-3.9 24.5-12.9 31.2-25-1.4 7.6-4.4 14.9-8.9 21.3 3.2-2.1 6.1-4.6 8.8-7.3 7.4-7.7 12.3-17.6 13.9-28.1 1.1 5.2 1.5 10.6 1 15.9 23.9-33.3 2-67.8-7.2-76.9 0-.1-.1-.1-.1-.2v0c0 .4 0 .8-.1 1.2-.1.8-.2 1.5-.3 2.2-.2.7-.4 1.5-.6 2.2-.2.7-.5 1.4-.8 2.1-.3.7-.6 1.4-1 2-.4.6-.8 1.3-1.2 1.9-.4.6-.9 1.2-1.4 1.8-.5.6-1 1.1-1.6 1.7-.3.3-.6.6-1 .8-.3.2-.5.4-.8.7-.6.5-1.2.9-1.9 1.3-.6.4-1.3.8-2 1.1l-2.1.9c-.7.3-1.4.5-2.1.7-.7.2-1.5.4-2.2.5-.8.1-1.5.2-2.2.3-.5 0-1.1.1-1.6.1-.8 0-1.5-.1-2.2-.1-.8-.1-1.5-.2-2.2-.3-.8-.1-1.5-.3-2.2-.6.7-.1 1.5-.1 2.2-.3.8-.1 1.5-.3 2.2-.5.7-.2 1.5-.4 2.1-.7l2.1-.9c.7-.3 1.3-.7 2-1.1.6-.4 1.3-.9 1.9-1.3.6-.5 1.2-1 1.7-1.5.6-.5 1.1-1.1 1.6-1.6.5-.6 1-1.2 1.4-1.8.1-.1.1-.2.2-.3.3-.5.7-1.1 1-1.6.4-.7.7-1.3 1-2 .3-.7.6-1.4.8-2.1l.6-2.1c.1-.8.3-1.5.3-2.2.1-.8.1-1.5.1-2.2 0-.5 0-1.1-.1-1.6-.1-.8-.2-1.5-.3-2.2-.1-.8-.3-1.5-.5-2.2-.2-.7-.5-1.4-.7-2.1-.3-.7-.6-1.4-.9-2-.4-.7-.7-1.3-1.1-2-.4-.6-.9-1.2-1.3-1.8-.5-.6-1-1.1-1.5-1.7-.3-.3-.6-.6-.9-.8-1.5-1.2-3-2.2-4.6-3.2-.2-.1-.4-.2-.7-.3-1.3-1.1-2.3-1.4-3.3-1.8z"
              />
            </svg>
            <Typography color="white">Nest Js</Typography>
          </Box>
          {/* AWS */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faAws}
              style={{ color: "rgb(255, 242, 1)", fontSize: "35px" }}
            />
            <Typography color="white">AWS</Typography>
          </Box>
          {/* TypeScript */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
           {/*  <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1748463571/TypeScript_fdhoht.svg" alt="tsLogo" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="35px"
            >
              <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
              <path
                dataName="original"
                fill="#007acc"
                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
              />
            </svg>
            <Typography color="white">TypeScript</Typography>
          </Box>
          {/* C# */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
           {/*  <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1748463551/C_CSharp_ojv4ni.svg" alt="csharpLogo" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="35px">
              <path
                fill="#9B4F96"
                d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
              />
              <path
                fill="#68217A"
                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
              />
              <path
                fill="#fff"
                d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
              />
            </svg>
            <Typography color="white">C#/.NET</Typography>
          </Box>
          {/* Python */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
          {/* <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1748463551/Python_ju1uir.svg" alt="pyLogo " /> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="35px">
              <linearGradient
                id="python-original-a"
                gradientUnits="userSpaceOnUse"
                x1="70.252"
                y1="1237.476"
                x2="170.659"
                y2="1151.089"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
              >
                <stop offset="0" stopColor="#5A9FD4" />
                <stop offset="1" stopColor="#306998" />
              </linearGradient>
              <linearGradient
                id="python-original-b"
                gradientUnits="userSpaceOnUse"
                x1="209.474"
                y1="1098.811"
                x2="173.62"
                y2="1149.537"
                gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
              >
                <stop offset="0" stopColor="#FFD43B" />
                <stop offset="1" stopColor="#FFE873" />
              </linearGradient>
              <path
                fill="url(#python-original-a)"
                d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                transform="translate(0 10.26)"
              />
              <path
                fill="url(#python-original-b)"
                d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                transform="translate(0 10.26)"
              />
              <radialGradient
                id="python-original-c"
                cx="1825.678"
                cy="444.45"
                r="26.743"
                gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" />
                <stop offset="1" stopColor="#7F7F7F" stopOpacity="0" />
              </radialGradient>
              <path
                opacity=".444"
                fill="url(#python-original-c)"
                d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
              />
            </svg>

            <Typography color="white">Python</Typography>
          </Box>
    
          {/* Ingles B2 */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{
              flex: "1 1 200px",
              maxWidth: "250px",
              padding: 2,
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                transform: "scale(1.01)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              },
            }}
          >
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ color: "rgb(255, 255, 255)", fontSize: "35px" }}
            />
            <Typography color="white">Inglés B2</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
