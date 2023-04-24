const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {
  
  if (altura.value  !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value ** 2)).toFixed(2)
    let resultadoimc = ''

    if (imc < 18.5 ) {
      resultadoimc = 'Você está Abaixo do peso';
    }else if (imc < 24.9) {
      resultadoimc = 'Você está no peso Ideal';
    }else if (imc < 29.9) {
      resultadoimc = 'Você está acima do peso';
    }else if (imc < 34.9) {
      resultadoimc = 'Você é Obeso de 1º grau';
    }else if (imc < 39.9) {
      resultadoimc = 'Você possui obesidade de 2º Grau, vai no medico gordão!';
    }else {
      resultadoimc = 'Você possui obesidade de 3º Grau, vai se tratar!';
    }

    resultado.innerHTML = `IMC: ${imc} (${resultadoimc})`;
  } else {
    resultado.innerHTML = 'Preencha os campos pendentes';
  }
  
}