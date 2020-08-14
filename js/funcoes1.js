//Declaração da função alôMundo()
function alôMundo()
{
  objResultado = document.getElementById("resultado");
  objResultado.innerHTML += "Alô, Mundo!<br>";
}

window.onload = function()
{
  objBotao = document.getElementById("botao");
  objBotao.onclick = function(){
	//Chamada da função alôMundo()
    alôMundo();
  }
}