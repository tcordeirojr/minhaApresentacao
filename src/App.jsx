import './App.css'
import './index.css'
import Habilidades from './components/Habilidades/Habilidades'
import Presentation from './components/Presentation/Presentation'
import Social from './components/Social/Social'
import Projetos from './components/Projetos/Projetos'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'
import { register } from 'swiper/element/bundle'
  
  register();
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-coverflow';
  



function App() {
  return (
    <>
    <Presentation/>
    <Social/>
    <Projetos/>
    <Habilidades/>
    <Contato/>
    <Footer/>
    </>
  )
}

export default App
