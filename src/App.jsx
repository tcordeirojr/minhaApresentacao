import './App.css'
import './index.css'
import Habilidades from './components/Habilidades/Habilidades'
import Presentation from './components/Presentation/Presentation'
import Social from './components/Social/Social'
import Projetos from './components/Projetos/Projetos'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Presentation/>
    <Social/>
    <Habilidades/>
    <Projetos/>
    <Contato/>
    <Footer/>
    </>
  )
}

export default App
