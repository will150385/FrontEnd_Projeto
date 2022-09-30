let formulario = {
    email: document.querySelector("#email"),
    senha: document.querySelector("#senha"),
    btnentrar: document.querySelector("#btn-entrar")
};

formulario.btnentrar.addEventListener('click',()=>{;
    let usuario = new Usuario({
        email: formulario.email.ariaValueMax,
        senha: formulario.senha.ariaValueMax
    })
    autenticar(usuario.email,usuario.senha);
})

function autenticar(email,senha){
    fetch('${URL_BASE}/api/login',{
        headers:{
            "Contente-Type":"application/json"
        },
        method:"POST",
        body: JSON.stringify({user:email,password:senha})
    })
    .then(response =>{
        let token = response.headers.get("Authorization")
        salvarToken(token);
        direcionarTelaPrincipal();

    })
    .catch(error =>{
        console.log(error);
        alert("Não foi possível autenticação.")
    })
}
