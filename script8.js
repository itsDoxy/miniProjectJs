//Atividade 08

function calcIdade(){
  var nome = document.getElementById('nome')
  var nome = String(nome.value)
  var age = document.getElementById('calcage')
  var age = Number(age.value)
  var mes = age*12; 
  var totaAge = document.getElementById('txt')
  var totaAge = mes*365;

      function formatarValor(totaAge) {
        return totaAge.toLocaleString('pt-BR');
      }
       txt.innerHTML =(`
       ${nome}, Você tem é ${age} anos <br>
        Você viveu: ${mes} meses <br>
         E a soma de todo seutempo vivido em dias é: ${formatarValor(totaAge)} Dias`)
  
  }