import { motion } from 'framer-motion'

function Projeto(){
return(
  <div className='Projeto'>
    <div className='Carousel'>
    <a href="https://tcordeirojr.github.io/landing-page-twd/" target="_blank"><img  className='Project' src='../src/components/Projetos/images/project01.png' alt="" /></a>
    <a href="https://tcordeirojr.github.io/previsao-do-tempo/" target="_blank" rel="noopener noreferrer"><img  className='Project' src='../src/components/Projetos/images/project02.png' alt="" /></a>
    <a href="https://tcordeirojr.github.io/Calculadora/" target="_blank"><img  className='Project' src='../src/components/Projetos/images/project03.png' alt="" /></a>
    <a href="https://tcordeirojr.github.io/pokemon-card/" target='_blank'><img  className='Project' src='../src/components/Projetos/images/project04.png' alt="" /></a>
    </div>
  </div>  
);

}
export default Projeto


