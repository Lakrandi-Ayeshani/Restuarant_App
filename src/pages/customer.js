import { red } from '@mui/material/colors'
import { Grid, Box } from '@mui/material'
import React from 'react'
import cake from '../data/homeImage/cake.jpg'

function customer() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={4} >
        <Box
              sx={{
                  align: 'center',
                  // width: 300,
                  height: 600,
                  backgroundColor: 'primary.dark',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },
              }}
          >
            <h1>Your Cart</h1>
            {}
          </Box>
      </Grid>
      <Grid container sm={8} color={red} >
        <Grid item sm={6}  >
        <img src={cake} alt="cake" />
          <h1>cake</h1>
        </Grid>
        <Grid item sm={6} >
        <img src={cake} alt="cake"/>
          <h1>cake</h1>
        </Grid>
        <Grid>
        <img src={cake} sm={4} alt="cake"/>
          <h1>cake</h1>
        </Grid>
        {/* <Box xs={{align: 'center',}} sx={6} >
        </Box> */}
      </Grid>
    </Grid>
  )
}

export default customer
