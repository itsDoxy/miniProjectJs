//Atividade 07 

function taixasCarro(){
  var carro = document.getElementById('car01')
  var text11 = document.getElementById('retornoatv7')


  var carrinho = Number(carro.value)
  var distribuidor, fabrica, imposto;
  

distribuidor = (carrinho * 0.28).toFixed(1),
imposto = carrinho * 0.45

fabrica = (carrinho - distribuidor - imposto).toFixed(1)

function formatarValor(distribuidor) {
  return distribuidor.toLocaleString('pt-BR');
} function formatarValor(imposto) {
    return imposto.toLocaleString('pt-BR');
 }function formatarValor(fabrica) {
    return fabrica.toLocaleString('pt-BR');
 }function formatarValor(carrinho) {
  return carrinho.toLocaleString('pt-BR');
  }

text11.innerHTML = (` O valor do imposto é de R$ ${formatarValor(imposto)} Reais <br>
O valor do imposto é de R$ ${formatarValor(imposto)} Reais <br>
O valor do distribuidor é de R$ ${formatarValor(distribuidor)} Reais<br>
O custo de fabrica é R$ ${formatarValor(fabrica)} Reais<br>
O valor do carro é total ${formatarValor(carrinho)} Reais `)
}