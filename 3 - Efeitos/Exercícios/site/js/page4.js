// no clique do botão faça com que cada card apareça utilizando efeitos de slide. Um diferente efeito para cada card.

$(function(){
    $('#apareceGeral').click(function(){
        $('#image1').slideDown(3000);
        $('#image2').slideDown(2000);
        $('#image3').slideToggle(1000);
   
    })
})

