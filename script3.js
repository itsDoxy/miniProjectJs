//atividade 03

function calcNota(){

  var nota1  = document.getElementById('campo1')
  var nota2 = document.getElementById('campo2')
  var nota3 = document.getElementById('campo3')
  var nota4 = document.getElementById('campo4')
  
  var nota1 = Number(nota1.value)
  var nota2 = Number(nota2.value)
  var nota3 = Number(nota3.value)
  var nota4 = Number(nota4.value)
  
  var resultado = document.querySelector('#resultado')

  var resultadoF = (nota1 + nota2 + nota3 + nota4) / 4;
  
    if (resultadoF < 6){
      resultado.innerHTML = (`A sua média final é ${resultadoF}<br>
      Você foi reprovado(a) !`)

    }else if (resultadoF>= 6 && resultadoF<=10){
      
      resultado.innerHTML = (`A sua média final é ${resultadoF}<br>
      Você foi Aprovado(a) !`);
    }else {
      resultado.innerHTML = 'Preencha os campos pendentes'
    }
  
  } 
  