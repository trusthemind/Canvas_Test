let canvas = document.getElementById("canvas");
canvas.height = 600;
canvas.width = 800;
const ctx = canvas.getContext('2d')

function drawLine(ctx, line) {
  const {
    start,
    end,
    lineWidth = 10,
    lineCap = 'round', 
    strokeStyle = 'black',
  } = line

  if(!start || !end) {
    throw new Error('Start or end of line not defined.')
  }

  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)
  ctx.lineWidth = lineWidth
  ctx.lineCap = lineCap
  ctx.strokeStyle = strokeStyle
  ctx.stroke()
}

let isPressed = false;
let mouseDownPos = null

document.addEventListener('mousedown', function(e) {
  isPressed = true
  mouseDownPos = {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop
  }

  const line = {
    start: mouseDownPos,
    end: mouseDownPos,
  }

  drawLine(ctx, line)
})

document.addEventListener('mouseup', function() {
  isPressed = false
})

document.addEventListener('mousemove', function(e) {
  if(isPressed) {
    let currentPos = {
      x: e.clientX - canvas.offsetLeft,
      y: e.clientY - canvas.offsetTop
    }

    let line = {
      start: mouseDownPos,
      end: currentPos
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawLine(ctx, line)
  }
})