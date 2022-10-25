//atividade 05
function calpercentualsalario(){

  var salario =  document.getElementById('salario0')
  var reajuste =  document.getElementById('reajuste01')
  var frase = document.getElementById('frase')
  var outro = Number()
  var valor = Number()  
 
 
  var sal = Number(salario.value)  
  var reaj = Number(reajuste.value)


  var reaj = rea / 100;
  valor = reaj * sal;
  outro = reaj * 100; 



 frase.innerText = ` Valor do novo salario é ${sal + valor} 
        O valor aumentado foi R$ ${valor.toFixed(3)}
        O valor em porcentagem é ${outro.toFixed(1)}% `

}