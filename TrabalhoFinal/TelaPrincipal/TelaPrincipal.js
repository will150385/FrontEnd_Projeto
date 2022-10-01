async function buscardados(){
    var respostaAPI= await fetch('https://mocki.io/v1/3fa1317a-ebcc-4250-818b-482b5bcf16da')

    var dadosapimoc = await respostaAPI.json()

    console.log(dadosapimoc)

    dadosapimoc.map( item => {
        var card= `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${item.imagem} alt="Card image cap">
            <div class="card-body">
                 
                <h5 class="card-title">${item.nome}</h5>

                <p class="card-text">${item.preco}</p>
                <p class="card-text">${item.categoria}</p>
                
                    <a button type="button" id="bt" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${item.id}">Descrição</a>


                                <!-- Modal -->
                    
                    <div class="modal fade"  id="exampleModal${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Descrição do Produto</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                        </div>
                                        
                                            <div class="modal-body" id="exampleModal">${item.descricao}</div>
                                                                        
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        
                                    
                                </div>
                            </div>
                    </div>
                
            </div> 
             
                 
        </div>  
        
        `
        document.getElementById("container").insertAdjacentHTML('beforeend',card)
        

    } )



}
// https://mocki.io/v1/52723e6a-e2eb-43b8-96db-bc6d47996fdb
function sair(){
    location.href = "../TelaLogin/login.html"
}