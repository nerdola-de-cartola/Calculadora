var results = document.getElementById('results')
var select_list = document.getElementById('numbers_list')
var add_list = []

function addNewNumber() {
    var number_to_add = Number(document.getElementById("input_number").value)
    addNumberToArray(number_to_add)
    addNumberToSelect(number_to_add)
}

function calculateAdd() {
    summation = 0
    for (let index = 0; index < add_list.length; index++) {
        var summation = summation + add_list[index];
    }
    showAddResults(summation)
}

function addNumberToSelect(n){
    select_list.innerHTML = ''
    select_list.setAttribute('size', add_list.length)
    add_list.forEach(function (n) {
        var list_item = document.createElement('option')
        list_item.innerHTML = `Valor ${n} adicionado`
        select_list.appendChild(list_item)
    });
}

function addNumberToArray(n) {
    add_list.push(n)
    add_list.sort(function orderSmallToLarge(a, b){
        if (a > b) {return 1}

        if (a < b) {return -1}

        if (a = b) {return 0}
    })
}

function showAddResults(n) {
    results.innerHTML = `<p>A soma de todos os itens é igual a ${n}</p>`
}