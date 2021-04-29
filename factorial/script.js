function factorialButton() {
    var results = document.getElementById('results')
    var num = Number(document.getElementById('data_number1').value)

    function calculateFactorial() {
        for (c = num - 1; c > 1; c--) {
            num = num * c  
        }
      var number = num
    }

    calculateFactorial(num) 

    results.innerHTML = `${num}`
    console.log(`${num}`);
}


