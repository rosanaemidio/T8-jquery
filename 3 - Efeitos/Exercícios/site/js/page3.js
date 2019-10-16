// no clique do botão programe toogle para cada card, com tempos diferentes para cada um.
// 1. Na página 3, crie um segundo botão que insira mais um fileira de cards.
// 2. Ainda na página 3, no hover no nome do personagem, altere a cor do texto.


$(function(){
    
    function configurateHover(){
        $('.card-title').off('mouseenter').on('mouseenter',
       
            function () {
                $(this).css('color', 'blue');

            }
        )
        
        $('.card-title').off('mouseleave').on ('mouseleave',
            function(){
                $(this).css('color', 'black');

            }
        )

    }

    configurateHover();

    $('#someGeral').click(function(){
        $('#anime1').toggle(1000);
        $('#anime2').toggle(2000);
        $('#anime3').toggle(3000);

    
    })
    
    $('#adicionaFileira').click(function(){
        let content= $('.container_cards').html();
        $('.container_cards').after($('<div class="row">'+ content + '</div>'))
       
        configurateHover();
    })

})

// Posso usar o nome da classe de todos os cards, colocar ":" seguido eq[0];
// ficando assim : $('card:eq[0]');
// Dessa forma conseguimos fazer ir sumindo através da ordem dos índices ou sequencia que queremos;

// para adicionar eventos é de bom tom criar variaveis para incluir TimeRanges,textos,imagens e afins