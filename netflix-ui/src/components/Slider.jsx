import React from 'react'
import CardSlider from './CardSlider'

const Slider = ({movies}) => {
    const getMoviesFromRange=(from,to) =>{
        return movies.slice(from,to)
    }

  return (
    <div>
      <CardSlider title="Tendencia"  data={getMoviesFromRange(0,10)}/>
      <CardSlider title="Nuevos lanzamientos"  data={getMoviesFromRange(10,20)}/>
      <CardSlider title="De Hollywood a tu pantalla"  data={getMoviesFromRange(20,30)}/>
      <CardSlider title="Series de EE.UU"  data={getMoviesFromRange(30,40)}/>
      <CardSlider title="Populares en Netflix"  data={getMoviesFromRange(40,50)}/>
      <CardSlider title="Peliculas y Series para Jovenes"  data={getMoviesFromRange(50,60)}/>
    </div>
  )
}

export default Slider
