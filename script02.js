

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
  
    if (resultadoF > 6){
      resultado.innerHTML = (`A sua média final é ${resultadoF}<br>
      Você foi reprovado(a) !`);
    }else if (resultadoF < 10){
      resultado.innerHTML = (`A sua média final é ${resultadoF}<br>
      Você foi Aprovado(a) !`);
    }else {
      resultado.innerHTML = 'Preencha os campos pendentes'
    }
  
  } 
  
  

//atividade 04

function eleitores(){

  var eleitores = document.querySelector('#indique')
  var brancos = document.querySelector('#indique2')
  var nulos= document.querySelector('#indique3')
  var validos = document.querySelector('#indique4')
    
  var eleitores = Number(eleitores.value)
  var brancos = Number(brancos.value)
  var nulos = Number(nulos.value)
  var validos = Number(validos.value) 
  
  var text = document.querySelector('#text') 
 // var tex = document.querySelector('#tex1')
 // var tex2 = document.querySelector('#tex2')
 // var tex3 = document.querySelector('#tex3')
    
  var a = (brancos/eleitores)*100   
  var b =  (nulos/eleitores)*100 
  var d = (validos/eleitores)*100
    
    if(eleitores <  0) {
        text.innerHTML = ("ERRO NA  LEITURA DE ELEITORES")
        } if (a>1 ||  a > 0 ){
                text.innerHTML = ( ` a procentagem  de  votos branco é ${a.toFixed(2)}% `) 
        } if(b>1 ||  b > 0 ){
                    text.innerHTML = ( `  a procentagem  de  votos nulos é ${b.toFixed(2)}% `) 
            }  
              if(d >1 ||  d > 0 ){
                text.innerHTML = ( `  a procentagem  de  votos validos é ${d.toFixed(2)}% `) 
                  }else {
                    text.innerHTML = ('erro')
                    }
}

//atividade 05
function calpercentualsalario(){

  var salario =  document.getElementById('salario0')
  var reajuste =  document.getElementById('reajuste01')
  var frase = document.getElementById('frase')
  var outro = Number()
  var valor = Number()  
 
 
  var sal = Number(salario.value)  
  var rea = Number(reajuste.value)


  var rea = rea / 100;
  valor = rea * sal;
  outro = rea * 100; 



 frase.innerText = ` Valor do novo salario é ${sal + valor} 
        O valor aumentado foi R$ ${valor.toFixed(3)}
        O valor em porcentagem é ${outro.toFixed(1)}% `

}

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
O valor do distriuidor é de R$ ${formatarValor(distribuidor)} Reais<br>
O custo de fabrica é R$ ${formatarValor(fabrica)} Reais<br>
O valor do carro é total ${formatarValor(carrinho)} Reais `)
}

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

//Atividade 09

function antecessor(){ 
  var leitor = document.querySelector('#ant')
  var  antec = document.querySelector('#antecessor')

  leitor = Number(leitor.value)        
  var res = leitor - 1;
  
antec.innerHTML = (`O  antecessor de ${leitor} é ${res}!` );

}

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

  //Atividade 11