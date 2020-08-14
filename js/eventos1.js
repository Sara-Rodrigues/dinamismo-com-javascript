
window.onload = function()
{
  var oRetângulo = document.getElementById("retângulo");
  
  //Pinta o fundo de verde quando o ponteiro do mouse passar por cima
  oRetângulo.onmouseover = function(){
    oRetângulo.style.backgroundColor = "#008000";
  }
  
  //Restaurar a cor original quando o ponteiro sair
  oRetângulo.onmouseout = function(){
    oRetângulo.style.backgroundColor = "";	  
  }
}