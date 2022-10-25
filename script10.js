//Atividade 10

function retangulo(){
  var base = document.querySelector('#base');
  var altura = document.querySelector('#alt');
  var output = document.getElementById('resultRetangulo');
  
  var base = parseInt(base.value);
  var altura = parseInt(altura.value);
      
      let resultado = base*altura;
  
     output.innerHTML = (`A área total do retângulo é: ${resultado} cm² `);
  
  }