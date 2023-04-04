
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


function confirmarPedido(){
    // 1 - pegar a div com a classe overlay
    const overlay = document.querySelector('.overlay');    
    // 2 - remover a classe escondido
    overlay.classList.remove('escondido');
    // 3 - pegar a div com a classe nome (prato)
    const divNomePrato = overlay.querySelector('.prato .nome');    
    // 4 - colocar na div o nome do prato que esta na variavel tPrato
    divNomePrato.innerHTML = tPrato;
    // 5 - pegar a div com a classe preco ( prato )
    const divPrecoPrato = overlay.querySelector('.prato .preco');
    // 6 - colocar na div o preco do prato que esta na variavel pPrato
    divPrecoPrato.innerHTML = pPrato;
    // 7 - pegar a div com a classe nome (bebida)
    const divNomeBebida = overlay.querySelector('.bebida .nome');
    // 8 - colocar na div o nome da bebida que esta na variavel tBebida
    divNomeBebida.innerHTML = tBebida;
    // 9 - pegar a div com a classe preco ( bebida )
    const divPrecoBebida = overlay.querySelector('.bebida .preco');
    // 10 - colocar na div o preco da bebida que esta na variavel pBebida
    divPrecoBebida.innerHTML = pBebida;
    // 11 - pegar a div com a classe nome (sobremesa)
    const divNomeSobremesa = overlay.querySelector('.sobremesa .nome');
    // 12 - colocar na div o nome da sobremesa que esta na variavel tsobremesa
    divNomeSobremesa.innerHTML = tSobremesa;
    // 13 - pegar a div com a classe preco ( sobremesa )
    const divPrecoSobremesa = overlay.querySelector('.sobremesa .preco');
    // 14 - colocar na div o preco da sobremesa que esta na variavel psobremesa
    divPrecoSobremesa.innerHTML = pSobremesa;
    // 15 - pegar a div com a classe preco-total e colocar o valor da varial total 
    const valTotal = calculaValorTotal();

    const divTotal = overlay.querySelector('.preco-total');
    divTotal.innerHTML = valTotal;
}

function fazerPedido(){

    const nome = prompt('Qual o seu nome?');
    const endereco = prompt('Endereço para entrega?');

    const total = calculaValorTotal();

    const  mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${tPrato}
    - Bebida: ${tBebida}
    - Sobremesa: ${tSobremesa}
    Total: R$ ${total}
    
    Nome: ${nome}
    Endereço: ${endereco}`;    

    // codificando a mesangem para o whatsapp
    const mensWP = encodeURIComponent(mensagem);

    // abrindo o WhatsApp e enviando a mesangem
    window.open(`https://wa.me/5599999999999?text=${mensWP}`);

}

function calculaValorTotal(){
    
    let precoPrato = pPrato.replace('R$', '');
    precoPrato = precoPrato.replace(',', '.');
    precoPrato = Number(precoPrato);
    
    let precoBedida = pBebida.replace('R$', '');
    precoBedida = precoBedida.replace(',', '.');
    precoBedida = Number(precoBedida);

    let precoSobremesa = pSobremesa.replace('R$', '');
    precoSobremesa = precoSobremesa.replace(',', '.');
    precoSobremesa = Number(precoSobremesa);

    const valorTotal = precoPrato + precoBedida + precoSobremesa;

    return valorTotal.toFixed(2);

}

function cancelar(){
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('escondido');
}