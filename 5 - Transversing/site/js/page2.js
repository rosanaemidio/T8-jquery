// 2. No arquivo page2.html, faça uma instrução jQuery que selecione o input text pelo atributo, depois navegue até seu elemento pai e adicione a classe "alert alert-info" nele.
// 3. No arquivo page2.html, faça uma instrução jQuery que selecione o item de lista e:
// Adicione a classe "list-group-item-info" no item.
// Adicione a classe "list-group-item-dark" nos demais itens.

$(function(){
    $('input').filter('[type="text"]').parent().addClass('alert alert-info');

    $('.list-group-item').click(function(){
        $(this).removeClass('list-group-item-dark').addClass('list-group-item-info');
        $(this).siblings().removeClass('list-group-item-info').addClass('list-group-item-dark');

    })
})
//Para a funcionalidade do clique dê certo preciso remover a segunda classe adicionada antes de adicionar a primeira e preciso remover a primeira antes de adicionar a segunda. Assim, a funcionalidade do click irá .


