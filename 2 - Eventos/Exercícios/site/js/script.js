// Correção do Exercicio
$(function () {
    $('#eventType').change(function () {
        let selected = $('#eventType :selected').val();
        $(".sumir").show();
        switch (selected) {
            case 'Teatro':
                $('.teatro').show();
                $('.sumir-t').hide();
                break;
            case 'Cinema':
                $('.sumir-c').hide();
                $('.cinema').show();
                break;
            case 'Debate Literário':
                $('.sumir-d').hide();
                $('.debate').show();
                break;
            case 'Dança':
                $('.sumir-dan').hide();
                $('.danca').show();
                break;
            case 'Artes visuais e exposições':
                $('.sumir-a').hide();
                $('.arte').show();
                break;
            case 'Música':
                $('.sumir-m').hide();
                $('.musica').show();
                break;
            default:
                $(".sumir").hide();
                break;
        }

    });

    $('#eventType').change();

    $('.check').click(function () {
        $('.entrada').toggle();
    })

    // $("#free").change(function(){
    //     if($(this).prop("checked") == true){
    //         $(".entrada").hide();
    //     }else{
    //         $(".entrada").show();
    //     }
    // })

    $('form').submit(function (e) {
        let valid = true;

        if ($('#title').is(':visible') && $('#title').val() == '') {
            $('#title').css('border', '1px solid red');
            $('#title').prop('placeholder', 'Digite um texto válido')
            valid = false;
        }

        if ($('#synopsis').is(':visible') && $('#synopsis').val() == '') {
            $('#synopsis').css('border', '1px solid red');
            $('#synopsis').prop('placeholder', 'Digite um texto válido')
            valid = false;
        }

        if (valid == false) {
            e.preventDefault();
            //return false;
        }
    })


})




//
// $(function(){


//     $('#eventType').change(function(){
//         let selected = $("#eventType :selected").val();
        
//         switch (selected){
           
//             case 'teatro':
//                 $('#boxDebate,#boxShow,#concepcao,#artistasConvi').hide();
//                 // $('#boxShow').hide();
//                 break;
//             case 'cinema':
//                 $('#boxDebate,#boxShow,#concepcao,#artistasConvi,#texto').hide();
//                 break;
//             case 'debate':
//                 $('#boxShow,#concepcao,#artistasConvi,#texto,#direcao,#elenco,#sinopse').hide();
//                 break;
//             case 'danca':
//                 $('#boxDebate,#boxShow,#artistasConvi,#texto,').hide();
//                 break;
//             // case 'artesExposicoes':
//             //     $('#boxShow,#concepcao,#artistasConvi,#texto,#direcao,#elenco,#sinopse',).hide();
//             //     break;
//             // case 'musica':
//             //     $('#boxShow,#concepcao,#artistasConvi,#texto,#direcao,#elenco,#sinopse',).hide();
//             //     break;
//         }
//     });
//     $('#free').click(function(){
//             $('#valorEntrada').toggle();
       
//             //  
    
//     })
    
// });