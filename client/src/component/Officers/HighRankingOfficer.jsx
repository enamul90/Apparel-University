import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const HighRankingOfficer = () => {
    return (
        <div className='p-4 bg-[#F3F7F9] border border-[#E9E9E9] rounded-[4px]'>
            <Card sx={{ Width:1 }}>
              <CardMedia
                sx={{ height: 340 }}
                image="https://res.cloudinary.com/dwcilnanz/image/upload/v1733841749/samples/smile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='text-center'>
                Prof Dr. Mohammad Abu Yousuf
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary',  mb:0}}  className='text-center'>
                   Vice Chancellor
                </Typography>
              </CardContent>
            </Card>

            <CardContent sx={{ p: 0, mt: 4 }}>
              <Typography gutterBottom variant="h5" component="div">
              What I think about our university
              </Typography>
              <Typography className='mt-2' variant="body2" sx={{ color: 'text.secondary' }}>
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  1500s,   when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  centuries, but   also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the  release of Letraset  sheets simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy   text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived  not only five centuries,   but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s   with the release of Letraset  sheets simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It   has survived not only five centuries,   but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised  in the 1960s with the release of Letraset  sheets simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the   industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type   specimen book. It has survived not only five centuries,   but also the leap into electronic typesetting, remaining essentially unchanged.   It was popularised in the 1960s with the release of Letraset  sheets simply dummy text of the printing and typesetting industry. Lorem  Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to   make a type specimen book. It has survived not only five centuries,   but also the leap into electronic typesetting, remaining essentially  unchanged. It was popularised in the 1960s with the release of Letraset  sheets simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and   scrambled it to make a type specimen book. It has survived not only five centuries,   but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset  sheets simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown printer took a  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,   but also the leap into electronic   typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset  sheets simply dummy text of   the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when an unknown   printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,   but also the leap   into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset  sheets simply   dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  1500s, when  an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,   but   also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset    sheets simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the   1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five  centuries,   but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the  release of Letraset  sheets simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy   text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived  not only five centuries,   but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s   with the release of Letraset  sheets 
              </Typography>
          </CardContent>
            
        </div>
    );
};

export default HighRankingOfficer;