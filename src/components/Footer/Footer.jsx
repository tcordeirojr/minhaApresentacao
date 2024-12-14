import './Footer.css'


function footer(){
    return(
        <>
        <div className='icon' >
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="../src/components/Footer/ImageFooter/WhatsappIcon.png" alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="../src/components/Footer/ImageFooter/InstagramIcon.png" alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="../src/components/Footer/ImageFooter/LinkedinIcon.png" alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="../src/components/Footer/ImageFooter/GithubIcon.png" alt="" />
            </a>
        </div>
        <div className="footer">
            <p>Todos os direitos reservados - 2024 Desenvolvido por Ted</p>
            <p></p>
            
        </div>
        </>
    )
}
export default footer