import './App.css'
import {motion} from 'framer-motion'


function App() {
  return (
    <>
    <img className='imagemPerfil' src="..//src/image/perfil.jpeg" alt="minha foto de pefil" />
    <h1 className='tituloPrincipal'> Olá, me chamo Ted! 🖖🏼</h1>
    <h2 className='tituloApresentacao'>Sou de Belém do Pará, apaixonado por açaí e tecnologia! Estou me especializando como desenvolvedor frontend com o objetivo de me tornar fullstack, sou formado em Análise e desenvolvimento de sistemas pela Wyden, estou cursando Inglês para acrescentar no meu desenvolvimento pessoal e profissional. Ah! Eu amo futebol e jogar video game. 🚀 </h2>
    <h1 className='habilidades'>Minhas Habilidades 🧠</h1>
    <ul className='iconesHabilidades'>
      <li><img  src='../src/icons/iconHtml.png'></img><h2>HTML</h2><p>Conhecimentos avançados de estruturação web  </p></li>
      <li><img src='../src/icons/iconCss.png'></img><h2>CSS</h2><p>Conhecimentos avançados em estilização web</p></li>
      <li><img src='../src/icons/iconJs.png'></img><h2>JavaScript</h2><p>Conhecimentos Avaçados em script,funcionalidades e interatividades a sites </p></li>
      <li><img src='../src/icons/iconReact.png'></img><h2>React</h2><p>Conhecimento Básico em criações de UI</p></li>
      <li><img src='../src/icons/iconGit.png'></img><h2>GIT</h2><p>Conhecimentos Avançados em controles de versão </p></li>
    </ul>
      <h1>Projetos 👨🏻‍💻</h1>
      <div>
            
      </div>
    </>
  )
}

export default App
