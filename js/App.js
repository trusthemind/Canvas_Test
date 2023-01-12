let canvas = document.getElementById("canvas");
let context =canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

canvas.addEventListener("click" ,function(event){
    let x = event.offsetX;
    let y = event.offsetY; 

    context.fillStyle = "black"
    context.beginPath()
    context.arc(x,y,3,0,Math.PI*2)
    context.fill();
    context.stroke();
})

context.lineWidth = 1;
context.moveTo(10, 50); //передвигаем перо
context.lineTo(20, 100); //рисуем линию
context.stroke();