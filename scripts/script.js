
let tPrato, tBebida, tSobremesa;
let pPrato, pBebida, pSobremesa;

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

function selecionarItem(item, seletor){
    
    console.log(`${seletor} .selecionado`);

    // 1 - verificar se existe um item selecionado anteriormente
    const itemJaSelecionado = document.querySelector(`${seletor} .selecionado`);
    // 2 - se existir, o item deve ser desmarcado 
    if ( itemJaSelecionado !== null){
        itemJaSelecionado.classList.remove('selecionado');
    }

    // 3 - novo item clicado deve ser marcado como selecionado 
    item.classList.add('selecionado');
    
    //pegar titulo e preco do item
    if ( seletor === '.pratos'){
        tPrato = item.querySelector('.titulo').innerHTML;    
        pPrato = item.querySelector('.preco').innerHTML;
    }else if ( seletor === '.bebidas'){
        tBebida = item.querySelector('.titulo').innerHTML;    
        pBebida = item.querySelector('.preco').innerHTML;
    }else{
        tSobremesa = item.querySelector('.titulo').innerHTML;    
        pSobremesa = item.querySelector('.preco').innerHTML;
    }

    liberarBotaoFinalizaPedido();
}

/*function selecionarPrato(prato){
    
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
    pPrato = prato.querySelector('.preco').innerHTML;

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
    pBebida = bebida.querySelector('.preco').innerHTML;

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
    pSobremesa = sobremesa.querySelector('.preco').innerHTML;    

    liberarBotaoFinalizaPedido();
}*/

function fazerPedido(){

    
    let precoPrato = pPrato.replace('R$', '');
    precoPrato = precoPrato.replace(',', '.');
    precoPrato = Number(precoPrato);
    
    let precoBedida = pBebida.replace('R$', '');
    precoBedida = precoBedida.replace(',', '.');
    precoBedida = Number(precoBedida);

    let precoSobremesa = pSobremesa.replace('R$', '');
    precoSobremesa = precoSobremesa.replace(',', '.');
    precoSobremesa = Number(precoSobremesa);

    const total = precoPrato + precoBedida + precoSobremesa;

    const  mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${tPrato}
    - Bebida: ${tBebida}
    - Sobremesa: ${tSobremesa}
    Total: R$ ${total.toFixed(2)}`;    

    // codificando a mesangem para o whatsapp
    const mensWP = encodeURIComponent(mensagem);

    // abrindo o WhatsApp e enviando a mesangem
    window.open(`https://wa.me/5599999999999?text=${mensWP}`);

}