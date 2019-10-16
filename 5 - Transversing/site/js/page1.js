// 1. Faça uma instrução jQuery que selecione todos elementos img da página que possuem alt e os imprima no log do console.


    $(document).ready(function(){

        let selected = $('img').filter('[alt]');
        console.log(selected);
    });
