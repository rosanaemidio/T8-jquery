// no clique do botão "Fade In" faça com que o alert de sucesso apareça em 5 segundos, no clique do botão "Fade Out" faça com que o alert de erro desapareça em 3 segundos;

//Criar um vento; onde apareça o alert.

$(function(){
    $('#btnSuccessFadeIn').click(function(){
        $('.alert-success , .alert-danger').fadeIn(5000)
        
    })

    $('#btnDangerFadeOut').click(function(){
        $('.alert-success , .alert-danger').fadeOut(3000)
    })
    

});