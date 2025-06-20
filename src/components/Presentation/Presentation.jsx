import { tr } from 'framer-motion/client';
import './Presentation.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { useState } from 'react'

function Presentation() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.textoApresentacao', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.textoApresentacao',
                start: 'top 1000px',
                end: 'bottom 1400px',
                scrub: true,
            
                
            }
        })
        return () => {
            gsap.killTweensOf('.textoApresentacao')
        }
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <button className='Hamburger ' onClick={() => setMenuOpen(!menuOpen)}>
                 <div className={`menuItems ${menuOpen ? 'open' : ''}`}>
                    <span></span>
                    </div>
            </button>
                    <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#inicio">Ínicio</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                    
                </ul>
            
            <div className="buttonsAcess">
                <button className='buttonProject'><li><a href="#projetos">Projetos</a></li></button>
                <button className="buttonContact">
                    <li><a href="#contato">Contato</a></li>
                </button>
            </div>
            <section className='containerInicio'>
                <div id='inicio' className='textoPrincipal'>
                    <h1 className='tituloPrincipal'> {"<Ted Cordeiro Junior/>"} </h1>
                    <p className='subTituloPrincipal'>Desenvolvedor Frontend</p>
                    
                </div>
            </section>
            <div id='sobre' className='textoApresentacao'>
                <h1 className='tituloSobre'>Sobre Mim</h1>
                <h2 className='tituloApresentacao'>Sou formado em Análise e desenvolvimento de sistemas pela Wyden, estou cursando Inglês para acrescentar no meu desenvolvimento pessoal e profissional. 🚀
                </h2>
                
            </div>
        </>
    )
}

export default Presentation 