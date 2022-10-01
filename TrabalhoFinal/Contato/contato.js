let formulario = {
    usuario: document.querySelector("#usuario"),
    email: document.querySelector("#email"),
    telefone: document.querySelector("#telefone"),
    assunto: document.querySelector("#assunto"),
    mensagem: document.querySelector("#mensagem"),
    btnEnviar: document.querySelector("#btn-enviar"),
};
//arrow function
formulario.btnEnviar.addEventListener('click', () => {
    alert("Mensagem enviada com sucesso!");

    //Retornar mensagem de agradecimento
    window.open('./agradecimento.html', '_self');    

})