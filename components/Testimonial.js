import { Box, Paper } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function Testimonial({imagesSrc}) {
  return (
    <div className="services_container">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxWidth: {
                            xs: 400,
                            sm: 600,
                            md: 1000,
                            lg: 1300,
                            xl: 1300
                        },
                        alignItems: 'center',
                        marginBottom:'50px',
                        marginTop: '20px',
                        '& > :not(style)': {
                            m: 1,
                            width: 400,
                            height: 350,
                        },
                    }}
                >
                    {
                        imagesSrc?.map((url,index)=>(
                            <Paper key={index} elevation={3}  className="image_container">
                            <Image src={url} alt='wasingmachine_services'
                                width={400}
                                height={350}
                            />
                    </Paper> 
                        ))
                    }
                    
                </Box>
            </div>
  )
}

export default Testimonial