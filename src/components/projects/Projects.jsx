import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import './Projects.scss'
import ProjectCard from '../projectCard/ProjectCard'
import { projects } from '../../data'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

function Projects() {
  return (
    <div className="slide">
      <div className="heading">
        <h2>Inspiring work made on Fiverr</h2>
      </div>
      <div className="container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1420: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper swiperCustom"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard card={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
