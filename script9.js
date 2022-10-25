//Atividade 09

function antecessor(){ 
  var leitor = document.querySelector('#ant')
  var antec = document.querySelector('#antecessor')

  leitor = Number(leitor.value)        
  var res = leitor - 1;
  
antec.innerHTML = (`O  antecessor de ${leitor} é ${res}!` );

}