import React from 'react'
import {Link } from 'react-router-dom'
import {list } from '../data/imageData'
import { Grid, Box } from '@mui/material'
import { red } from '@mui/material/colors'

function customer2() {
  return (
    
    <Grid container sm={12} color={red} spacing={2} margin={3}>
      {list.map((a) => (
      <Grid item sm = {8} md ={6} >
        <img src={a.sc} style = {{width:'300px', height:'200px'}}/>
        <br/>
        <Link to={`/customer/${a.name}`}><h2>{a.name}</h2></Link>
      </Grid>
       ))}
    </Grid>
  )
}

export default customer2
