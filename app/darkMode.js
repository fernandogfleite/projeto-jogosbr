function alteraCorTexto(lista, cor){
    for (i=0; i< lista.length;i++){
        var elementos = document.body.querySelectorAll(lista[i]);
        for (u=0; u< elementos.length;u++){
            alteraCorElemento(elementos[u],cor);
        }
    }
}

function alteraCorElemento (elemento, cor){
    elemento.style.color = cor;
}

function alteraCorBackground(tag,cor){
    document.querySelector(tag).style.backgroundColor = cor;
}

function dark(){
alteraCorTexto(["h1", "h2", "span", "p", "label","legend", "nav", "i"], "white")
alteraCorTexto(["p > a"],"#00FFFF")
alteraCorBackground("body","#250725")
alteraCorBackground(".main", "#250725")
}

function light(){
    alteraCorTexto(["h1", "h2", "span", "p", "label","legend", "i"], "black");
    alteraCorTexto(["p > a"],"blue");
    alteraCorBackground("body","white");
    alteraCorBackground(".main", "white");
}

function alteraTextoBt(texto){
    document.body.querySelector("#btEscuro").innerText = texto;

}

function principal(){
var dkon = false
var button = document.querySelector("#btEscuro");
  button.addEventListener("click", function() {
    if (!dkon){
        dark();
        dkon = true;
        alteraTextoBt("Modo Claro")
    }
    else{
        light();
        dkon = false;
        alteraTextoBt("Modo Escuro")
    }
  })}

principal();