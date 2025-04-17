import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const LowLevelOfficer = () => {
    return (
        <div className='p-4 bg-[#F3F7F9] border border-[#E9E9E9] rounded-[4px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                [1,1,1,1,1,1,1,].map((_, i)=>{
                    return(
                        <div key={i}>
                            <Card sx={{ maxWidth: 1 }}>
                              <CardMedia
                                sx={{ height: 200 }}
                                image="https://res.cloudinary.com/dwcilnanz/image/upload/v1741764777/xoqqlfvzhu2tjbctztbb.jpg"
                                title="green iguana"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className='text-center'>
                                  Shirley H. Mohamed
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }} className='text-center'>
                                  Lizards are a widespread group of squamate reptiles, with over 6,000
                                  species, ranging across all continents except Antarctica
                                </Typography>
                              </CardContent>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default LowLevelOfficer;