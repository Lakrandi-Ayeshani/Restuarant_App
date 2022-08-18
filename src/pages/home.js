import React from 'react'
import Box from '@mui/material/Box'
import { Grid, ImageList, Link } from '@mui/material'

function Home() {
  return (
    <Grid container spacing={2} >
    <Grid item xs={12}>
        <h1 align={'center'} >The Wills Restaurant</h1>
    </Grid>
    <Grid item xs={6} sm={4} md={4}>
        <Box
             sx={{
                align: 'center',
                width: 300,
                height: 600,
                backgroundColor: 'primary.dark',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
        >
            <br /><br /><br /><br /><br />
            <Link href= '/customer' color="inherit" align='center' underline='none'><h1>Customer</h1></Link>
            <br />
            <Link href= '/chef' color="inherit" align='center' underline='none'><h1>Chef</h1></Link>
            <br />
            <Link href= '/manager' color="inherit" align='center' underline='none'><h1>Manager</h1></Link>
        </Box>
    </Grid>
    <Grid item xs={6} sm={4} md={4}>
        <ImageList variant="masonry" cols={3} gap={8}>

        </ImageList>
    </Grid>    
    </Grid>

  )
}

export default Home
