const hex = ["0","1","2","3","4","5","6","7","8","9",
"A","B","C","D","E","F"]

let btn = document.getElementById("btn")
let currentColor = document.querySelector(".color")

btn.addEventListener('click', function(){
    // initil first character #
    let hexColor = "#";
    //let color = randomNumber();
    console.log(randomNumber)
    for (let i = 0; i < 6; i++) {
        // add to # next 6 value
        hexColor += hex[randomNumber()];
    }

    currentColor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomNumber() {
     return Math.floor(Math.random() * hex.length);
}