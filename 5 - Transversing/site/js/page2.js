// 2. No arquivo page2.html, faça uma instrução jQuery que selecione o input text pelo atributo, depois navegue até seu elemento pai e adicione a classe "alert alert-info" nele.
// 3. No arquivo page2.html, faça uma instrução jQuery que selecione o item de lista e:
// Adicione a classe "list-group-item-info" no item.
// Adicione a classe "list-group-item-dark" nos demais itens.

$(function(){
    $('input').filter('[type=text]').parent().addClass('alert alert-info');

    $('.list-group-item').click(function(){
        $(this).addClass('list-group-item-info');
        $('.list-group-item').siblings().addClass('list-group-item-dark')

    })
})



