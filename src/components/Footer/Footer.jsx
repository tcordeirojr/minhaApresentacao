import './Footer.css'


function footer(){
    return(
        <>
        
        <div className='icon' >
            <a href="https://www.instagram.com/tcordeirojr.dev?igsh=MTNsNHFrbXh1cWoyNQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src="../src/components/Footer/ImageFooter/InstaIcon.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/tedcordeirojr/" target="_blank" rel="noopener noreferrer">
            <img src="../src/components/Footer/ImageFooter/LinkIcon.png" alt="" />
            </a>
            <a href="https://github.com/tcordeirojr" target="_blank" rel="noopener noreferrer">
            <img src="../src/components/Footer/ImageFooter/GitIcon.png" alt="" />
            </a>
            
        </div>
        </>
    )
}
export default footer