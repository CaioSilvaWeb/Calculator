 function button (num){
   var numero = document.querySelector('#result').innerHTML
   document.querySelector('#result').innerHTML = numero + num
}
function clean (){ //botao de limpar a tela da calculadora por completo
    document.querySelector('#result').innerHTML = ''
}
function back (){ //botao de limpar item por item no display
   var oneTimeCleaning = document.querySelector('#result').innerHTML 
   document.querySelector('#result').innerHTML = oneTimeCleaning.substring(0, oneTimeCleaning.length -1)
}
function calculate(){
    var oneTimeCleaning = document.querySelector('#result').innerHTML 
    if(oneTimeCleaning){
        document.querySelector('#result').innerHTML = eval(oneTimeCleaning)
    }
}

