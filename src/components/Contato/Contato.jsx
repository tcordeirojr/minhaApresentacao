import './Contato.css' 

function Contato() {
  return(
    <>
        <div id="contato" className="contato">
          <h1>Contato</h1>
        </div>
        <div className='cardForm'>  
          <form className='form'>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>

            <input type="submit" value="Enviar"/>
          </form>
        </div>
      </>      
    )
  };
  export default Contato
