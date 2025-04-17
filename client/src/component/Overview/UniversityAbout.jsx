import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function UniversityAbout({img, tittle, details}) {
  return (
    <Card sx={{ Width: 1 }}>
      <CardMedia
        sx={
          { 
            height: 350, 
            bgcolor:"#F3F7F9"
          }
        }
        image={img}
        title="green iguana"
      />
      <CardContent className='mt-3'>
        <Typography gutterBottom variant="h5" component="div">
        {tittle}
        </Typography>
        <Typography className='mt-2' variant="body2" sx={{ color: 'text.secondary' }}>
        {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
