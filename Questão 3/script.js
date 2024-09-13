import data from './dados.json' with { type: "json" }

var value = data.map(element => element.valor)
var highest = Math.max.apply(Math, (value))
var lowest = Math.min.apply(Math, (value))
var sum = 0

for (let i = 0; i < value.length; i++){
  sum += value[i]
}

var average = sum / value.filter(item => item > 0).length 
var higherThanAverage = 0

for (let i = 0; i < value.length; i++){
  if (value[i] > average) {
    higherThanAverage = higherThanAverage + 1
  }
}

document.getElementById('lowest').innerHTML = `O menor valor no mês foi ${lowest}`
document.getElementById('highest').innerHTML = `O maior valor no mês foi ${highest}`
document.getElementById('higherThanAverage').innerHTML = `${higherThanAverage} dias cujo valor de faturamento diário foi superior à média mensal`