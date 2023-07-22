import React from 'react'
import './Slide.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import CatCard from '../../components/catCard/CatCard'
import { cards } from '../../data'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const Slide = () => {
  return (
    <div className="slide">
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
              slidesPerView: 4,
            },
            1420: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper swiperCustom"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <CatCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Slide
