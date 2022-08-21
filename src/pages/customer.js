import { red } from '@mui/material/colors'
import { Grid, Box, Button } from '@mui/material'
import React from 'react'
import Customer from './customer2'
import {Link, Outlet} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addChefMenu } from '../slices/restuarantSlice'

function customer() {
  const dispatch = useDispatch();
  const abs = useSelector((state)=> state.customerOrder.customerOrder)
  // const chefAbs = useSelector((state) => state.customerOrder.chefState)

  const handleChef = e => {
    dispatch(addChefMenu(abs));
    
  }

  return (
    <Grid container spacing={2}>
      <Grid item sm={4} padding={'none'} >
        <Box
              sx={{
                  //align: 'center',
                  // width: 300,
                  height: 850,
                  backgroundColor: 'primary.dark',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                  },
              }}
          >
            <h1>Your Cart</h1>
            {abs.map((order) => (
              <h3>{order.orderType}<br/>{order.orderSize}</h3>
            ))}
            <Link to= '/chef'>
              <Button variant='contained' onClick={handleChef}>order</Button>
            </Link>

          </Box>
      </Grid>
      <Grid container sm={8} color={red} >
        <Outlet/>
      </Grid>
    </Grid>
  )
}

export default customer
