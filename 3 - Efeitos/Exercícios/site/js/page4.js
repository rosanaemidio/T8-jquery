// no clique do botão faça com que cada card apareça utilizando efeitos de slide. Um diferente efeito para cada card.
// 3. Na página 4, após o click do botão que faz os cards aparecerem, remova a classe "btn-primary" e adicione "btn-secondary", e desabilite o botão.
// 4. Ainda na página 4, ao clica sobre um card de um personagem o mesmo deve desaparecer.
$(function(){

    function configurateButon(){
        $('#apareceGeral').click(function(){
            $('#image1').slideDown(1000);
            $('#image2').slideDown(2000);
            $('#image3').slideToggle(3000);
            
            $('#apareceGeral').removeClass('btn-primary').addClass('btn-secundary');
            $('#apareceGeral').prop('disabled',true);
        })

    }
    
    configurateButon();

    $('.card').click(function(){
        $(this).remove(); //ou posso usar o hide;
        $('#apareceGeral').prop('disabled',false);
        $('#apareceGeral').removeClass('btn-secundary').addClass('btn-primary');
        
    })
})

