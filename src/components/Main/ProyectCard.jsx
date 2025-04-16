import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Link,
} from "@mui/material";

export default function ProyectCard({ props }) {
  return (
    <Card
      sx={{
        bgcolor: "transparent",
        border: "2px solid rgb(49, 123, 234)",
        color: "#ffffff",
        flexBasis: {
          xs: "100%", // 1 por fila
          sm: "calc(50% - 16px)", // 2 por fila (ajustado por el gap)
          md: "calc(33.33% - 16px)", // 3 por fila
        },
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Distribuye contenido
        height: "100%", // Hace que la card crezca al máximo
        minHeight: "300px",
        margin: "20px 0px",
        transition: "0.2s",
        "&:hover": { transform: "scale(1.01)" },
      }}
    >
      <CardActionArea>
        <CardContent>
          <img src={props.img} alt="imagen" width="100%"/>

          <h3>{props.title}</h3>
          <p>
            {props.desc}
            {props.linkText && props.linkUrl && (
              <Link
                href={props.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="secondary"
              >
                {props.linkText}
              </Link>
            )}
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          href={props.path}
          target="_blank"
          fullWidth
        >
          Ver
        </Button>
      </CardActions>
    </Card>
  );
}
