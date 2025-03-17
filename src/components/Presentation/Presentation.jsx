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
                start: 'top 500px',
                end: 'bottom 850px',
                scrub: true,
                
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
            <section >
                <div id='inicio' className='textoPrincipal'>
                    <h1 className='tituloPrincipal'> {"<Ted Cordeiro Junior/>"} </h1>
                    <p className='subTituloPrincipal'>Desenvolvedor Frontend</p>
                </div>
            </section>
            <div id='sobre' className='textoApresentacao'>
                <h1 className='tituloSobre'>Sobre</h1>
                <h2 className='tituloApresentacao'>Sou de Belém do Pará! Sou formado em Análise e desenvolvimento de sistemas pela Wyden, estou cursando Inglês para acrescentar no meu desenvolvimento pessoal e profissional. Ah! Eu amo futebol e jogar video games. 🚀
                </h2>
            </div>
        </>
    )
}

export default Presentation 