function drawCanvas(width, height) {
  const message = inputText.value || (width + " X " + height)
  const fontSize = inputFontSize.value || width / 25;

  ctx.fillStyle = inputBackground.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = inputForeground.value;
  ctx.font = `${fontSize}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}

function generatePlaceholder() {
  const width = inputWidth.value;
  const height = inputHeight.value;

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

  drawCanvas(width, height);
}

const container = document.getElementById("container-canvas");
const canvas = document.getElementById("placeholder-canvas");
const ctx = canvas.getContext("2d");

const inputWidth = document.getElementById("input-width");
const inputHeight = document.getElementById("input-height");
const inputText = document.getElementById("input-text");
const inputBackground = document.getElementById("input-background-color");
const inputForeground = document.getElementById("input-foreground-color");
const inputFontSize = document.getElementById("input-font-size");