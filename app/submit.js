function mySubmit(e){
    e.preventDefault();
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var data = document.getElementById('nasc').value;
    var genero = document.getElementById('gen').value;
    var jogabilidade = document.getElementById('jogabilidade').value;
    var sexo = document.getElementsByName('sexo');
    var plataforma = document.getElementsByName('plat');
    var numJogadores = document.getElementsByName('num');
    if (validaEmail() && comparaDatas(dataAtual(), data) && verificaNome(nome) && verificaSenha(senha) && verificaGenero(genero) && verificaJogabilidade(jogabilidade) && verificaSexo(sexo) && verificaPlataforma(plataforma) && verificaNumeroJogadores(numJogadores)){
        alert("Cadastro completo com sucesso")
        document.location.reload(true);
    }   
}

function dataAtual(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return anoF + '-'+ mesF + '-' + diaF;
}

function comparaDatas(dataAtual, dataMarcada){
    if (dataAtual == ""){
        alert("Selecione uma data");
    }
    var dateAtual = new Date(dataAtual);
    var dateMarcada = new Date(dataMarcada);

    if (dateAtual < dateMarcada){
        alert("Data inválida");
        return false;
    }
    return true;
}

function validaEmail(email){
    if (document.forms[0].email.value.length == 0) {
        alert('Por favor, informe o seu EMAIL.'); 
        return false;
    }
    return true;
}

function verificaNome(nome){
    if (nome == ""){
        alert("Digite um nome!")
        return false;
    }
    
    return true;
}

function verificaSenha(senha){
    if (senha == ""){
        alert("Digite uma senha")
        return false;
    }
    else if (senha.length < 6){
        alert("Digite uma senha com no mínimo 6 caracteres")
        return false;
    }
    return true;
}

function verificaGenero(genero){
    if (genero == ""){
        alert("Selecione um gênero")
        return false;
    }
    return true;
}

function verificaJogabilidade(jogabilidade){
    var opcoes = document.getElementsByTagName('option');
    var listaDeOpcoes = [];
    for (var c = 10; c < 28; c++){
        listaDeOpcoes.push(opcoes[c].value);
    }
    if (jogabilidade == "" || !jogabilidade in listaDeOpcoes){
        alert('Selecione uma opção de jogabilidadae')
        return false;
    }
    return true;
}

function verificaSexo(sexo){
    var cont = 0
    for (var c = 0; c < sexo.length; c++){
        if (sexo[c].checked){
            cont++;
        }
    }
    if (cont > 0){
        return true;
    }
    alert("Selecione uma opção de Sexo")
    return false;

}

function verificaPlataforma(plataforma){
    var cont = 0
    for (var c = 0; c < plataforma.length; c++){
        if (plataforma[c].checked){
            cont++;
        }
    }
    if (cont > 0){
        return true;
    }
    alert("Selecione uma opção de Plataforma")
    return false;

}

function verificaNumeroJogadores(numJogadores){
    var cont = 0
    for (var c = 0; c < numJogadores.length; c++){
        if (numJogadores[c].checked){
            cont++;
        }
    }
    if (cont > 0){
        return true;
    }
    alert("Selecione uma opção de Número de jogadores")
    return false;

}