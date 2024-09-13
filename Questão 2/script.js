var firstNumber = 0
var secondNumber = 1
var attNumber = 1
var fibonacci = [0, 1]

for(var a = 0; a < 50; a++){
  firstNumber = secondNumber
  secondNumber = attNumber
  attNumber = firstNumber + secondNumber
  fibonacci.push(attNumber)
}

function verify(){
  var input = Number(document.getElementById('input').value)

  if(fibonacci.includes(input)){
    alert(`O número ${input} está na lista Fibonacci :)`)
  } else {
    alert(`ERRO! O número ${input} não foi encontrado na lista Fibonacci :'(`)
  }

}