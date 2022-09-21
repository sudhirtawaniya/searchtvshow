import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './mcard.css'

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 300 ,margin:2}}>
      <CardMedia
        component="img"
        height="500"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.name}
        </Typography>
        <Typography variant="p2" color="gray">
         {props.channel}
        </Typography>
        <Typography variant="body2" color="text.secondary" overflow="hidden">
         {props.summary}
        </Typography>
       
      </CardContent>
     
    </Card>
  );
}
