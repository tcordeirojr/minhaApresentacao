import './Habilidades.css'
function Habilidades() {
  return (
    <>
      <h1 className='habilidades'>Minhas Habilidades 🧠</h1>
      <ul className='iconesHabilidades'>
        <li className='unit '>
          <i className="fa-brands fa-html5"></i>
          <h2>HTML</h2>
          <p>Conhecimento avançado</p>
        </li>
        <li className='unit '>
          <i className="fa-brands fa-css3-alt"></i>
          <h2>CSS</h2>
          <p>Conhecimento avançado</p>
        </li>
        <li className='unit ' >
          <i className="fa-brands fa-js"></i>
          <h2>JavaScript</h2>
          <p>Conhecimento avaçado</p>
        </li>
        <li className='unit '>
          <i className="fa-brands fa-react"></i>
          <h2>React</h2>
          <p>Conhecimento intermediário</p>
        </li>
        <li className='unit '>
          <i class="fa-brands fa-git-alt"></i>
          <h2>GIT</h2>
          <p>Conhecimento avançado</p>
        </li>
      </ul>
    </>
  )
}
export default Habilidades