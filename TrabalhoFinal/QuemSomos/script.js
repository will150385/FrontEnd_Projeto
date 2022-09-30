async function pegarDados() {
    var usuarios=["vTekashi","biancadearaujo","MaryReisAz","elessa3","will150385","felipefbordignon"]
    // var usuario ="vTekashi";
        usuarios.map(async item =>{

            var respostaAPI = await fetch(`https://api.github.com/users/${item}`)
        
            var data = await respostaAPI.json();
            
            var card =`
            <div  class="card">
                <div class="box">
                    <img id="foto" src="${data.avatar_url}" width="250" height="250">
                    <div class="info">
                        <div id="nome" class="name">${data.name}</div>
                        <div class="details">CEO / Fundador</div>
                        <div class="sociais">
                            <a href="${data.html_url}" target="_blank"><i class="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>    
            `
            document.getElementById("card").insertAdjacentHTML("beforeend",card)
        })
}


// window.onload = pegarDados
// async function pegarDados() {

//     var respostaAPI = await fetch(`https://mocki.io/v1/fe53ed0e-097d-4ea6-a1a2-a1f9a39bf9e1`)

//     var data = await respostaAPI.json();
       
//         for(i = 0; i<6; i++){

//             console.log(data);

//             var resposta2 = await fetch(`${data[i].url}`)
            
//             var data2 = await resposta2.json();

//             console.log(data2);
    
        
            
//             //  document.getElementById("nome").innerHTML = data.name;
        
//             // const img = document.getElementById("foto");
//             // img.src = `${data.avatar_url}`
//         }
// }