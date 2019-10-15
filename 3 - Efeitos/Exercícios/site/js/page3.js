// no clique do botão programe toogle para cada card, com tempos diferentes para cada um.
// 1. Na página 3, crie um segundo botão que insira mais um fileira de cards.
// 2. Ainda na página 3, no hover no nome do personagem, altere a cor do texto.

// 3. Na página 4, após o click do botão que faz os cards aparecerem, remova a classe "btn-primary" e adicione "btn-secondary", e desabilite o botão.

// 4. Ainda na página 4, ao clica sobre um card de um personagem o mesmo deve desaparecer.
$(function(){
    $('#someGeral').click(function(){
        $('#anime1').toggle(1000);
        $('#anime2').toggle(2000);
        $('#anime3').toggle(3000);

    })
    $('#adicionaFileira').click(function(){
        $('.container_cards').after($('.container_cards'))
    })

})

// Posso usar o nome da classe de todos os cards, colocar ":" seguido eq[0];
// ficando assim : $('card:eq[0]');
// Dessa forma conseguimos fazer ir sumindo através da ordem dos índices ou sequencia que queremos;
