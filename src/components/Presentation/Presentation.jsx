import './Presentation.css'
function Presentation() {
    return (
        <>
            <div className='menu'>
                <ul className='menuItems'>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
            <section>
                <div className='textoPrincipal'>
                    <h1 className='tituloPrincipal'> {"<Ted Cordeiro Junior/>"} </h1>
                    <p className='subTituloPrincipal'>Desenvolvedor Frontend</p>
                </div>
            </section>
            <div id='sobre' className='textoApresentacao'>
                <h1 className='TituloSobre'>Sobre</h1>
                <h2 className='tituloApresentacao'>Sou de Belém do Pará! Sou formado em Análise e desenvolvimento de sistemas pela Wyden, estou cursando Inglês para acrescentar no meu desenvolvimento pessoal e profissional. Ah! Eu amo futebol e jogar video games. 🚀
                </h2>
            </div>
        </>
    )
}

export default Presentation 