const data = [
  {estado: 'SP', faturamento: 67836.43},
  {estado: 'RJ', faturamento: 36678.66},
  {estado: 'MG', faturamento: 29229.88},
  {estado: 'ES', faturamento: 27165.48},
  {estado: 'Outros', faturamento: 19849.53}
]

var total = 0

for(let i = 0; i < data.length; i++){
  total += data[i].faturamento
}

var percentage = []

for(let i = 0; i < data.length; i++){
  percentage.push({estado: data[i].estado, valor: ((data[i].faturamento / total) * 100).toFixed(2)})
}

document.getElementById('list').innerHTML =
  percentage.map(p => {
    return `<li>${p.estado}: ${p.valor}%</li> <br>`
  }
).join('')