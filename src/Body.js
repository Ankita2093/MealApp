import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Body.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
export default function Body() {
  const [items, setitems] = useState([])
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((response) => {
        console.log(response.data)
        setitems(response.data.meals)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const itemslist = items.map((obj) => {
    return (
      <div className='col-md-4'>
        <p> {obj.strMeal}</p>
        <img src={obj.strMealThumb}></img>
        <p>{obj.idMeal} </p>
      </div>
    )
  })
  return <div className='row'>{itemslist}</div>
}
