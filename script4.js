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