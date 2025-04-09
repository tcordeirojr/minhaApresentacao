import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Projetos.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'


function Projetos() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.projetos', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#projetos',
                start: 'top 500px',
                end: 'bottom 850px',
                scrub: true,


            }
        })
        return () => {
            gsap.killTweensOf('.projetos')
        }
    }, []);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div id='projetos'>
                <h1 className="projetos" >Projetos</h1>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><a href="https://tcordeirojr.github.io/previsao-do-tempo/" target='_blank'><img src="projetos/previsao-do-tempo.png" alt='' /></a></SwiperSlide>
                <SwiperSlide><a href="https://tcordeirojr.github.io/Calculadora/" target="_blank"><img src="projetos/calculadora.png" alt="" /> </a></SwiperSlide>
                <SwiperSlide><a href="https://tcordeirojr.github.io/formulario-Dev-quest/" target="_blank" rel=""><img src="projetos/formulario.png" alt="" /></a></SwiperSlide>
                <SwiperSlide><a href="https://tcordeirojr.github.io/pokemon-card/" target="_blank" rel=""><img src="projetos/pokemon.png" alt="" /></a></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}

export default Projetos