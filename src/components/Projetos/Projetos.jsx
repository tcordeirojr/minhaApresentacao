
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import '../Projetos/Projetos.css';


export default function Projetos() {
      useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.containerProjetos', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.containerProjetos',
                start: 'top 800px',
                end: 'bottom 1240px',
                scrub: true,
                
                
            }
        })
        return () => {
            gsap.killTweensOf('.containerProjetos')
        }
    }, []);

  return (
    <>
    <div id="projetos" className='containerProjetos'>
      <h1>Projetos</h1>
      <ul className='projetos-list'>
        <li><img src="https://placehold.co/600x400" alt="Pokemon Card" /><a href="https://tcordeirojr.github.io/pokemon-card/" target="_blank">Pokemon Card</a></li>
        <li><img src="https://placehold.co/600x400" alt="Pokemon Card" /><a href="https://tcordeirojr.github.io/pokemon-card/" target="_blank">Pokemon Card</a></li>
      </ul>

    </div>
    </>
   )};

