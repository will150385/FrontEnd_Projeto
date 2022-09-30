const URL_BASE = 'https://serratec-music-manager-api.herojuapp.com';


function salvarToken(token){
    localStorage.setItem("token",token)
}
function obterToken(){
   return localStorage.getItem("token")
}
function sair(){
    localStorage.removeItem("token")
    direcionarTelaDeLogin()
}
// function direcionarTelaDeLogin(){
//     window.open("../TelaLogin/login.html","_self");
// }
function direcionarTelaPrincipal(){
    window.open("../TelaPrincipal/TelaPrincipal.html","_self")

}
function usuarioLogado(){
    let token= obterToken();
    return !!token;
}
function validarUsuarioAutenticado(){

    let logado  =usuarioLogado();
    if(window.location.pathname =="../TelaLogin/login.html"){
        if(logado){
            direcionarTelaPrincipal();
        }
    }else if(!logado && window.location.pathname != "../TelaLogin/login.html"){
        direcionarTelaDeLogin();
    }
}
validarUsuarioAutenticado();