import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const PhotoGallery = () => {
    return (
        <>
             <Card sx={{ maxWidth: 1 , height:1 }}>
               <CardMedia
                 sx={{ minHeight: 350, height:1}}
                 image="https://res.cloudinary.com/dwcilnanz/image/upload/v1733841751/samples/cup-on-a-table.jpg"
                 title="green iguana"
               />
             </Card>
        </>
    );
};

export default PhotoGallery;