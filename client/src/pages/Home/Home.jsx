import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'

import "./Home.scss"

const Home = () => {
  return (
    <div className="Home">
      <Slider/>
      <FeaturedProducts/>
    </div>
  )
}

export default Home