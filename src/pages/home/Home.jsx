import React from 'react'
import Featured from '../../components/featured/Featured'
import './Home.scss'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/slide/Slide'
import Pros from '../../components/pros/Pros'
import FiverBusiness from '../../components/fiverBusiness/FiverBusiness'
import Services from '../../components/services/Services'
import Projects from '../../components/projects/Projects'

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide />
      <Pros />
      <Services />
      <FiverBusiness />
      <Projects />
    </div>
  )
}

export default Home
