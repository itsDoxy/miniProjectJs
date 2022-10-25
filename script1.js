//Atividade 01
function parouimpar(){
  const resultado = document.getElementById('res');
  var numero = document.getElementById('atividade01txt1');
  var num = Number(numero.value);
  var op = num % 2 ;
  
  if(op == 0 ){
    resultadofinal = (`O número ${num} É par`);
  }else {
    resultadofinal = (`O número ${num} é impar`);}

   resultado.innerHTML = resultadofinal;
}
