

const container = document.getElementById("container-canvas");
const canvas = document.getElementById("placeholder-canvas");
const ctx = canvas.getContext("2d");

const width = 1280;
const height = 720;

canvas.width = width;
canvas.height = height;

const containerAspect = container.offsetWidth / container.offsetHeight;
const canvasAspect = width / height;

if (canvasAspect > containerAspect) {
  canvas.style.width = "100%"
  canvas.style.height = "auto"
} else {
  canvas.style.width = "auto"
  canvas.style.height = "100%"
}

ctx.fillStyle = "#4caf50";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#fff";
ctx.font = "40px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("1000x1000", canvas.width / 2, canvas.height / 2);

console.log(containerAspect, canvasAspect);
