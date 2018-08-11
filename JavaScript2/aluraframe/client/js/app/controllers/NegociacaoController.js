class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._valor = $('#valor');
    }
    
    adiciona(event){
        event.preventDefault();

    }
}