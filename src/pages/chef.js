import React from 'react'
import { useSelector } from 'react-redux'

function chef() {
  const chefOrder = useSelector((state) => state.customerOrder.chefState)
  console.log(chefOrder);
  return (
    <div>
      {chefOrder.map((order) => (
        order.map((chef) => (
          <h1>{chef.orderType}    {chef.orderSize}</h1>
        ))   
      ))}
    </div>
  )
}

export default chef
