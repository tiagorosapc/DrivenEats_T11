
let tPrato, tBebida, tSobremesa;

function liberarBotaoFinalizaPedido(){

    console.log(tPrato);
    console.log(tBebida);
    console.log(tSobremesa);
    // 1 - se prato selecionado
    if ( tPrato !== undefined ){        
        // 2 - se bebida foi selecionada
        if ( tBebida !== undefined){
            // 3 - se sobremesa foi selecionda 
            if ( tSobremesa !== undefined ){
                // pegar o botao finalizar pedido
                const botaoFinalizar = document.querySelector('.fazer-pedido');
                // mudar a cor do fundo como adicionado a classe confirmar
                botaoFinalizar.classList.add('ativo');
                // vou trocar o texto (rotulo) do botao para 'Fechar pedido'
                botaoFinalizar.innerHTML = 'Fechar Pedido';
                // vou remover o atributo disabled
                botaoFinalizar.removeAttribute('disabled');
            }
        }
    }
}

function selecionarPrato(prato){
    
    // 1 - verificar se existe um item selecionado anteriormente
    const itemJaSelecionado = document.querySelector('.pratos .selecionado');
    // 2 - se existir, o item deve ser desmarcado 
    if ( itemJaSelecionado !== null){
        itemJaSelecionado.classList.remove('selecionado');
    }

    // 3 - novo item clicado deve ser marcado como selecionado 
    prato.classList.add('selecionado');
    
    //pegar titulo do prato
    tPrato = prato.querySelector('.titulo').innerHTML;    

    liberarBotaoFinalizaPedido();
}

function selecionarBebida(bebida){
    
    // 1 - verificar se existe um item selecionado anteriormente
    const itemJaSelecionado = document.querySelector('.bebidas .selecionado');
    // 2 - se existir, o item deve ser desmarcado 
    if ( itemJaSelecionado !== null){
        itemJaSelecionado.classList.remove('selecionado');
    }

    // 3 - novo item clicado deve ser marcado como selecionado 
    bebida.classList.add('selecionado');

    tBebida = bebida.querySelector('.titulo').innerHTML;

    liberarBotaoFinalizaPedido();
}

function selecionarSobremesa(sobremesa){
    
    // 1 - verificar se existe um item selecionado anteriormente
    const itemJaSelecionado = document.querySelector('.sobremesas .selecionado');
    // 2 - se existir, o item deve ser desmarcado 
    if ( itemJaSelecionado !== null){
        itemJaSelecionado.classList.remove('selecionado');
    }

    // 3 - novo item clicado deve ser marcado como selecionado 
    sobremesa.classList.add('selecionado');

    tSobremesa = sobremesa.querySelector('.titulo').innerHTML;

    liberarBotaoFinalizaPedido();
}