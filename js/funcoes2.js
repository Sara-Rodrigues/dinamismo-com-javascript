
function soma(num1, num2)
{
  objResultado = document.getElementById("resultado");
  objResultado.innerHTML += (num1+num2) + "<br>";
}

window.onload = function()
{
  objBotao = document.getElementById("botao");
  objBotao.onclick = function(){
    //Chamada da função soma()
    soma(3, 5);
  }
}