import './Habilidades.css'
import  { useState, useEffect } from 'react';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide  } from "swiper/react";
import 'swiper/css/effect-cards';
import { div } from 'framer-motion/client';


  function Habilidades(){

    return(
      <>
<section id='habilidades' className='habilidades'>
  <h1 className='habilidades'>Habilidades</h1>
  <ul className='iconesHabilidades'>
    <li className='unit '>
      <i className=""></i>
      <h2>HTML</h2>
      <p>Conhecimento avançado</p>
    </li>
    <li className='unit '>
      <i className=""></i>
      <h2>CSS</h2>
      <p>Conhecimento avançado</p>
    </li>
    <li className='unit ' >
      <i className=""></i>
      <h2>JavaScript</h2>
      <p>Conhecimento avaçado</p>
    </li>
    <li className='unit '>
      <i className=""></i>
      <h2>React</h2>
      <p>Conhecimento avançado</p>
      <section/>
    </li>
      <section/>
    </>

    )};
            export default Habilidades
          
{/* /*   
        // const [slidePerView, setSlidePerView] = useState(2);
      //   // const data = [
      //   //     {id:'1', image: 'https://img.icons8.com/color/48/html-5--v1.png'},
      //   //     {id:'2', image: 'https://img.icons8.com/color/48/css3.png'},
      //   //     {id:'3', image: 'https://img.icons8.com/color/48/javascript--v1.png'},
      //   //     {id:'4', image: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png'},
      //   //     {id:'5', image: 'https://img.icons8.com/color/48/git.png'},
      //   //     {id:'6', image: 'https://img.icons8.com/color/48/tailwindcss.png'},
      //   //   ]    
    //   */  */}