
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
        <li><a className='projeto1 ' href="https://tcordeirojr.github.io/pokemon-card/" target="_blank"><img src="src/assets/image/Captura de Tela 2025-06-04 às 00.31.08.png" alt="Pokemon Card" /> <span className='descricaoProjeto' >Projeto feito com HTML, CSS E JS. contém tema dark através do icone, Para acessar Click na Imagem!</span></a></li>
        <li><a className='projeto2' href="https://tcordeirojr.github.io/previsao-do-tempo/" target="_blank"> <img src="src/assets/image/Captura de Tela 2025-06-04 às 01.05.08.png" alt="Another Project" /> <span className='descricaoProjeto2'>Projeto feito com HTML, CSS E JS Consumindo API de clima. Contém informações sobre a previsão do tempo em diversas cidades do mundo, Para acessar Click na Imagem!</span></a></li>
      </ul>

    </div>
    <div className="vermais">
    <a href="https://github.com/tcordeirojr?tab=repositories" target="_blank">Ver todos os projetos</a>
    </div>
    
    </>
   )};

