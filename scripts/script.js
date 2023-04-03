function selecionarPrato(prato){
    
    // 1 - verificar se existe um item selecionado anteriormente
    const itemJaSelecionado = document.querySelector('.selecionado');
    // 2 - se existir, o item deve ser desmarcado 
    if ( itemJaSelecionado !== null){
        itemJaSelecionado.classList.remove('selecionado');
    }

    // 3 - novo item clicado deve ser marcado como selecionado 
    prato.classList.add('selecionado');
}