$(document).ready(function () {
  var $formWell = $('#form-well');
  var $formDiv = $('#form-div');
  var $formGroup = $('.form-group');
  var $formEmail = $('#form-email');
  var $helpBlockSpam = $('span.help-block');
  var $inputEmail=$('#input-email');
  var $tabelaContato = $('#tabela-contato');


  function limparMensagensDeErro() {
    $formGroup.removeClass('has-error');
    $helpBlockSpam.text('');
  }

  function mostrarErros(erros) {
    var spanHelpPrefixo = '#span-help-';
    var formGroupPrefixo = '#form-group-';

    $.each(erros, function (propriedade, msg) {
      $(spanHelpPrefixo + propriedade).text(msg);
      $(formGroupPrefixo + propriedade).addClass('has-error');
    });
  }

   function adicionarContato(contato) {
    var linhaTabela = '<tr>';
    linhaTabela += '<td>' + contato.email + '</td>';
    linhaTabela += '<td>' + contato.id + '</td>';
    linhaTabela += '<td>' + contato.creation + '</td>';
    linhaTabela += '<td>';

    linhaTabela += '<button class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash"></i></button>';
    linhaTabela += '</td></tr>';
    var $linha=$(linhaTabela);
    $linha.find('button').click(function(){
      console.log('Apagando contato com id '+ contato.id);
      $linha.remove();
    });


    $tabelaContato.prepend($linha);
    $inputEmail.val('');
  }

  function listarContatos(contatos) {
    $.each(contatos,function(index, cont){
      adicionarContato(cont);
    })
  }

  var contatos = [{
    "email": "marcela@teste.com",
    "id": 5910974510923776,
    "creation": "10/08/2015 16:44:20"
  }];
  listarContatos(contatos);

  $formEmail.submit(function (evento) {
    evento.preventDefault();
    limparMensagensDeErro();
    var email = $inputEmail.val();
    if (email === '') {
      mostrarErros({
        'email': 'Campo Obrigatório',
      });
    } else {
      adicionarContato({
        "email": email,
        "id": 8510974510923776,
        "creation": "10/09/2015 16:44:20"
      })
    }

  });
});
