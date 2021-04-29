function divideButton() {
    var results = document.getElementById('results')
    var num1 = Number(document.querySelector('input#data_number1').value)
    var num2 = Number(document.querySelector('input#data_number2').value)
    var num3 = num1 / num2
    results.innerHTML= `${num1} &div; ${num2} = ${num3}`
}