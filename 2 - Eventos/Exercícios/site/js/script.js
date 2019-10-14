$(function(){


    $('#eventType').change(function(){
        let selected = $("#eventType :selected").val();
        
        // if(selected === "teatro"){
        //     $('#boxDebate').hide();

        // }
        // if(selected === "selecione"){
        //     $('#titulo,#boxDebate,#boxShow').css('display','none');
        // }
        switch (selected){
           
            case 'teatro':
                $('#boxDebate,#boxShow,#concepcao,#artistasConvi').hide();
                // $('#boxShow').hide();
                break;
            case 'cinema':
                $('#boxDebate,#boxShow,#concepcao,#artistasConvi,#texto').hide();
                break;
            case 'debate':
                $('#boxShow,#concepcao,#artistasConvi,#texto,#direcao,#elenco,#sinopse').hide();
                break;
            case 'danca':
                $('#boxDebate,#boxShow,#artistasConvi,#texto,').hide();
                break;
            // case 'artesExposicoes':
            //     $('#boxShow,#concepcao,#artistasConvi,#texto,#direcao,#elenco,#sinopse',).hide();
            //     break;
            // case 'musica':
            //     $('#boxShow,#concepcao,#artistasConvi,#texto,#direcao,#elenco,#sinopse',).hide();
            //     break;
        }
    });
    $('#free').click(function(){
            $('#valorEntrada').toggle();
       
            //  
    
    })
    
});