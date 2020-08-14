//Declaração da função alôMundo()
function soma(núm1, núm2)
{
  return núm1+núm2;
} // fim da função soma()

window.onload = function()
{
  objBotão = document.getElementById("botão");
  objBotão.onclick = function(){
    objTxtNúm1 = document.getElementById("núm1");
	objTxtNúm2 = document.getElementById("núm2");
    objResultado = document.getElementById("resultado");
    objResultado.innerHTML += soma(
	parseInt(objTxtNum1.value), 
	parseInt(objTxtNum2.value) ) + "<br>";
  } // fim do onclick
} // fim do window.onload