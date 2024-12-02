import { motion } from 'framer-motion'

function Projeto(){
return(
  <div className='Projeto'>
    <motion.h1 animate={{x:20}}> </motion.h1>
    <div className='Carousel'>
    <img src='https://placehold.co/250x300' alt="" />
    <img src='https://placehold.co/250x300' alt="" />
    <img src='https://placehold.co/250x300' alt="" />
    <img src='https://placehold.co/250x300' alt="" />
    </div>
  </div>  
);

}
export default Projeto


