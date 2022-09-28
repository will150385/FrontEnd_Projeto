async function buscardados(){
    var respostaAPI= await fetch('https://mocki.io/v1/14990665-ba44-49c0-a3f9-5a52336177f6')

    var dadosapimoc = await respostaAPI.json()

    console.log(dadosapimoc)

    dadosapimoc.map( item => {
        var card= `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${item.imagem} alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${item.nome}</h5>
            <p class="card-text">${item.modelo}</p>
            <p class="card-text">${item.categoria}</p>
            <a href="#foo"${item.descricao} class="btn btn-primary">Descrição</a>
            </div>        
        </div>  
        
        `
        document.getElementById("container").insertAdjacentHTML('beforeend',card)

    } )



}
// https://mocki.io/v1/52723e6a-e2eb-43b8-96db-bc6d47996fdb