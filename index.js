// Code your solutions in this file
//let names = ["Guadalupe ", "Ollie", "Aki"];

function writeCards(arr, event) {
    const message = []
    for (let i = 0; i < arr.length; i++) {
        const note = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`

        message.push(note)
    }
    return message
}



//console.log(writeCards(["Guadalupe ", "Ollie", "Aki"],"surprise"))

function countDown(num) {

    while (num >= 0) {
        console.log(num);
        num--
    }
}

//console.log(countDown(5))
