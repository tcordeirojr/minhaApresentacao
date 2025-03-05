import './Habilidades.css'
import  { useState, useEffect } from 'react';
import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide  } from "swiper/react";
import 'swiper/css/effect-coverflow';


  function Habilidades() {
        const [slidePerView, setSlidePerView] = useState(2);
        const data = [
            {id:'1', image: 'https://placehold.co/100x00'},
            {id:'2', image: 'https://img.icons8.com/ios-filled/100/html-5--v1.png'},
            {id:'3', image: 'https://img.icons8.com/ios-filled/100/html-5--v1.png'},
            {id:'4', image: 'https://img.icons8.com/ios-filled/100/html-5--v1.png'},
            {id:'5', image: 'https://img.icons8.com/ios-filled/100/html-5--v1.png'},
        ]    
      useEffect(() => {
        function handleResize() {
          if (window.innerWidth < 720) {
            setSlidePerView(1);
          }else{
            setSlidePerView(2);
          }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          }    
      },[])

    return(
            <div className="container">
                <h1 className="title">slide com react js</h1>
            
                <Swiper
                    modules={[EffectCoverflow]}
                    effect='coverflow'
                    className="swiper"
                    slidesPerView={slidePerView}
                    pagination={{clickable: true}}
                    navigation
                >


                    {data.map( (item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} className="slide-item"></img>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>  
        )
    }
// import useAcordeon from '../../hooks/useAcordeon'
// function Habilidades() {
  
  
// useAcordeon();  
//   return (
//     <>

//     <useAcordeon/>
    /* <div id='habilidades'></div>
      <h1 className='habilidades'>Habilidades</h1>
      <ul className='iconesHabilidades'>
        <li className='unit '>
          <i className="fa-brands fa-html5"></i>
          <h2>HTML</h2>
          <p>Conhecimento avançado</p>
        </li>
        <li className='unit '>
          <i className="fa-brands fa-css3-alt"></i>
          <h2>CSS</h2>
          <p>Conhecimento avançado</p>
        </li>
        <li className='unit ' >
          <i className="fa-brands fa-js"></i>
          <h2>JavaScript</h2>
          <p>Conhecimento avaçado</p>
        </li>
        <li className='unit '>
          <i className="fa-brands fa-react"></i>
          <h2>React</h2>
          <p>Conhecimento intermediário</p>
        </li>
        <li className='unit '>
          <i class="fa-brands fa-git-alt"></i>
          <h2>GIT</h2>
          <p>Conhecimento avançado</p>
        </li>
//       </ul> */
//     </>
//   )
// }
export default Habilidades