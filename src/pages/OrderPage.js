import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {Order} from '../data/order'
import { FormControl, InputLabel, Select, MenuItem , Grid, FormGroup, Button} from '@mui/material'
import {addNewCart} from '../slices/restuarantSlice'


function OrderPage() {
    const [type, setType] = useState('');
    const [size, setSize] = useState('');
    const {name} = useParams();
    const display = Order.find(ele => ele.namee === name)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        if(e.target.name === 'type'){
            setType(e.target.value);  
        }
        else if(e.target.name === 'size'){
            setSize(e.target.value);  
        }
    }

    const handleOrder = e => {
        dispatch(addNewCart({
            orderType: type,
            orderSize: size
        }))
        navigate('/customer')
    }

  return (
    <div>
        <br/><br/><br/>
        <Grid sx={8}>
        <FormGroup>
        <FormControl fullWidth sx={{ m: 1, minWidth: 200 }}>
            <InputLabel  id="demo-simple-select-label">Select your {name} type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                name="type"
                onChange={handleChange}
            >
                {display.Type.map((state) => (
                    <MenuItem value={state}>{state}</MenuItem>
                ))} 
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select your {name} size</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={size}
                label="Size"
                name="size"
                onChange={handleChange}
            >
                {display.Size.map((state) => (
                    <MenuItem value={state}>{state}</MenuItem>
                ))} 
            </Select>
        </FormControl>
        <Button variant="contained" onClick={handleOrder}>Add to Cart</Button>
        </FormGroup>
        </Grid>
    </div>
  )
}

export default OrderPage
