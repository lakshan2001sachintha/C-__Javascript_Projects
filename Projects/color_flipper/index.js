const colors = ["green","red","rgba(133,122,200)","rgba(255, 215, 0, 0.8)","rgba(135, 206, 250, 0.8)","rgba(255, 99, 71, 0.8)","rgba(186, 145, 235, 0.8)","rgba(255, 182, 193, 0.8)","rgba(120, 200, 150, 0.8)"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener("click",function(){
    
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
