import './Habilidades.css'
function Habilidades(){
return (
    <>
<h1 className='habilidades'>Minhas Habilidades 🧠</h1>
    <ul className='iconesHabilidades'>
      <li>
        <img src="src/assets/IconHability/iconHtml.png" alt="" />
        <h2>HTML</h2><p>Conhecimentos avançados de estruturação web  </p></li>
      <li>
        <img src='src/assets/IconHability/iconCss.png'></img>
        <h2>CSS</h2><p>Conhecimentos avançados em estilização web</p></li>
        <li>
        <img src='src/assets/IconHability/iconJs.png'></img>
        <h2>JavaScript</h2><p>Conhecimentos Avaçados em script,funcionalidades e interatividades a sites </p></li>
      <li>
        <img src='src/assets/IconHability/iconReact.png'></img>
        <h2>React</h2><p>Conhecimento Básico em criações de UI</p></li> <br/>
      <li>
        <img src='src/assets/IconHability/iconGit.png'></img>
        <h2>GIT</h2><p>Conhecimentos Avançados em controles de versionamentos </p></li>
    </ul>
    </>
      )
}
export default Habilidades