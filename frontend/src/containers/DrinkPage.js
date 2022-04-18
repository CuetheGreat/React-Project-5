import React from 'react'
import { useParams } from 'react-router-dom'

const DrinkPage = (props)  => {
    let { slug } = useParams()

    const drink = props.drinks.filter(d => d.slug == slug)

    return (
      <div>

      DrinkPage

      </div>
    )

}


export default DrinkPage
