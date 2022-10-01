function logar(){
    var login = document.getElementById(`email`).value;
    var senha = document.getElementById('senha').value;

    if(login == "admin@admin.com" && senha == "123456"){
        location.href = "../TelaPrincipal/TelaPrincipal.html"
    }else{
        alert('Usuário e/ou senha incorretos')
    }


}