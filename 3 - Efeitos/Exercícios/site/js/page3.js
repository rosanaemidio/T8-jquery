// no clique do botão programe toogle para cada card, com tempos diferentes para cada um.

$(function(){
    $('#someGeral').click(function(){
        $('#anime1').toggle(1000);
        $('#anime2').toggle(2000);
        $('#anime3').toggle(3000);

    })


})

// Posso usar o nome da classe de todos os cards, colocar ":" seguido eq[0];
// ficando assim : $('card:eq[0]');
// Dessa forma conseguimos fazer ir sumindo através da ordem dos índices ou sequencia que queremos;
