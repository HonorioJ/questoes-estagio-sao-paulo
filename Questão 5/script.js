
function reverse(){
  var string = document.getElementById('string').value
  var reverseString = ''

  for(i = string.length - 1; i >= 0; i-- ){
    reverseString += string[i]
  }

  document.getElementById('reverseString').innerHTML = reverseString
}
