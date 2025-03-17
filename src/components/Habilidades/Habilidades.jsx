import React from 'react';
import './Habilidades.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
function Habilidades() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.habilidades', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.habilidades',
                start: 'top 800px',
                end: 'bottom 950px',
                scrub: true,
                
            }
        })
        return () => {
            gsap.killTweensOf('.habilidades')
        }
    }, []);
  return(
        <>
      <div id='habilidades'  className='habilidades'>
        <h1 className='habilidades1'>Habilidades</h1>
        <ul className='containerHabilidades'>
          <li className='unit'>
            <img  src='https://img.icons8.com/color/48/html-5--v1.png' ></img>
            <h2>HTML</h2>
            <p>Conhecimento avançado</p>
          </li>
          <li className='unit'>
            <img  src='https://img.icons8.com/color/48/css3.png' ></img>
            <h2>CSS</h2>
            <p>Conhecimento avançado</p>
          </li>
          <li className='unit' >
            <img  src='https://img.icons8.com/color/48/javascript--v1.png' ></img>
            <h2>JavaScript</h2>
            <p>Conhecimento avaçado</p>
          </li>
          <li className='unit'>
            <img src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' ></img>
            <h2>React</h2>
            <p>Conhecimento avançado</p>
          </li>
          <li className='unit'>
            <img  src='https://img.icons8.com/color/48/git.png' ></img>
            <h2>Git</h2>
            <p>Conhecimento avançado</p>
          </li>
          <li className='unit'>
            <img  src='https://img.icons8.com/color/48/tailwindcss.png' ></img>
            <h2>Tailwind CSS</h2>
            <p>Conhecimento avançado</p>
          </li>
        </ul>
        </div>

      </>
        ) };
      export default Habilidades