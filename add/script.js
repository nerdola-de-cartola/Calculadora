var results = document.getElementById('results')
var add_list = []

function addNewNumber() {
    var number_to_add = Number(document.getElementById("input_number").value)
    console.log(`${number_to_add}`);
    add_list.push(number_to_add)
    console.log(add_list);
    add_list.sort(function orderSmallToLarge(a, b){
        if (a > b) {return 1}

        if (a < b) {return -1}

        if (a = b) {return 0}
    })
}

function calculateAdd() {
    summation = 0
    for (let index = 0; index < add_list.length; index++) {
        var summation = summation + add_list[index];
    }
    console.log(summation);
}