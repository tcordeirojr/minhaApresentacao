
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../Projetos/Projetos.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function projetosApi() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">

                <SwiperSlide><a href="https://tcordeirojr.github.io/previsao-do-tempo/" target='_blank'><img src="projetos/previsao-do-tempo.png" alt='' /></a></SwiperSlide>
                <SwiperSlide><a href="https://tcordeirojr.github.io/Calculadora/" target="_blank"><img src="projetos/calculadora.png" alt="" /> </a></SwiperSlide>
                <SwiperSlide><a href="https://tcordeirojr.github.io/formulario-Dev-quest/" target="_blank" rel=""><img src="projetos/formulario.png" alt="" /></a></SwiperSlide>
                <SwiperSlide><a href="https://tcordeirojr.github.io/pokemon-card/" target="_blank" rel=""><img src="projetos/pokemon.png" alt="" /></a></SwiperSlide>
                
        </Swiper>
    </>
   )}