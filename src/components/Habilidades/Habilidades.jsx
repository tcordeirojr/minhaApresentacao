import './Habilidades.css'
function Habilidades(){
return (
    <>
<h1 className='habilidades'>Minhas Habilidades 🧠</h1>
    <ul className='iconesHabilidades'>
      <li>
        <i className="fa-brands fa-html5"></i>
        <h2>HTML</h2><p>Conhecimentos avançados de estruturação web  </p></li>
      <li>
      <i className="fa-brands fa-css3-alt"></i>
        <h2>CSS</h2><p>Conhecimentos avançados em estilização web</p></li>
        <li>
        <i className="fa-brands fa-js"></i>
        <h2>JavaScript</h2><p>Conhecimentos Avaçados em script,funcionalidades e interatividades a sites </p></li>
      <li>
      <i className="fa-brands fa-react"></i>
        <h2>React</h2><p>Conhecimento Básico em criações de UI</p></li>
      <li>
      <i class="fa-brands fa-git-alt"></i>
        <h2>GIT</h2><p>Conhecimentos Avançados em controles de versionamentos </p></li>
    </ul>
    </>
      )
}
export default Habilidades