import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../assests/landingimage2.png'
import { useNavigate } from "react-router-dom";

export default function CardComponent({details}) {


  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {details?.imageLink}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details?.description.length > 200? details?.description.substring(0, 200) + "..." : details?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" ><a href ={details?.learnMoreLink} target="_blank" style={{textDecoration :"none"}}>Learn More </a></Button>
      </CardActions>
    </Card>
  );
}
