import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
} from "@mui/material";

export default function ProyectCard({props}) {
  return (
    <Card
      sx={{bgcolor: 'transparent', border: '2px solid #36014e',color: '#ffffff', width:'100%', display: 'flex' , margin:'20px 0px', transition: "0.2s", "&:hover": { transform: "scale(1.05)" } }}
    >
      <CardActionArea>
        <CardContent>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="outlined" color="secondary" href={props.path} target="_blank">Ver</Button>
      </CardActions>
    </Card>
  );
}
