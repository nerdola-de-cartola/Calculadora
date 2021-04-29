var results = document.getElementById('results')
var add_list = []

function addNewNumber() {
    var number_to_add = Number(document.getElementById("input_number").value)
    console.log(`${number_to_add}`);
    add_list.push(number_to_add)
    console.log(add_list);
    add_list.sort(function(a,b){
        if (a > b) {return 1}

        if (a < b) {return -1}

        if (a = b) {return 0}
    })
}