import './Presentation.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

function Presentation() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.textoApresentacao', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.textoApresentacao',
                start: 'top 700px',
                end: 'bottom 1440px',
                scrub: true,
                markers:true,
                
            }
        })
        return () => {
            gsap.killTweensOf('.textoApresentacao')
        }
    }, []);

    return (
        <>
            <div className='menu'>
                <ul className='menuItems'>
                    <li><a href="#inicio">Ínicio</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
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