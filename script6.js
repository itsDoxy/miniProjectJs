//atividade 06

function calculoCarro(){
  let nCarros =  document.getElementById('inp1') //prompt("Digite quantos carros você vendeu esse Mês");
  let sFixo =  document.getElementById('salfixo')  //prompt("Digite o Valor do seu salário Fixo Mensal em Reais: ");
  let vCarro = document.getElementById('valortotal') //prompt("Digite o Valor Total dos carros que você vendeu esse mês");
  sFixo = Number(sFixo.value)
  vCarro = Number(vCarro.value)
  cFixa = 5;
  let cFinal = (parseInt(vCarro) * parseInt(cFixa))/100;
  let sFinal = sFixo + cFinal;
  
  function formatarValor(sFinal) {
    return sFinal.toLocaleString('pt-BR');
  }

  retorno.innerHTML = ("O seu salário final total é: R$" + formatarValor(sFinal));
  //alert("O seu salário final total é: R$" + formatarValor(sFinal));

}