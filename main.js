const colors = ["Green","Red","Blue","rgba(111,140,150)","#f14736"];
let btn = document.getElementById("btn");
let CurrentColor = document.querySelector(".color")

btn.addEventListener("click", function (){
    // get random number between 0 - 3
    let RandomNumber = getRandomNumber();
    console.log(RandomNumber)
    document.body.style.backgroundColor = colors[RandomNumber]
    CurrentColor.textContent = colors[RandomNumber]
})

// Function to generet a random number
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}