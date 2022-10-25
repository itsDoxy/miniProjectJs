function reverseArray(){
  var numero1 = document.getElementById("primeiro").value
  var numero2 = document.getElementById("segundo").value
  var numero3 = document.getElementById("terceiro").value
  var numero4 = document.getElementById("quarto").value
  let texto = document.getElementById("text")
  const n = [ numero1,numero2,numero3,numero4]
  n.reverse()
  texto.innerHTML = ` Os numeros em ordem revertida são: ${n}.`

}

