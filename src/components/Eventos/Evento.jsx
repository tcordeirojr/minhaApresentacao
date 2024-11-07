function Button (){
    function meuEvento(){
        alert("O evento foi ativado")  // Este é um simples console.log para demonstrar o evento de click.
    }
    return(
        <button onClick={meuEvento}> click aqui </button>
    )
}

export default Button