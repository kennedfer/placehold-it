function getPlaceholderText() {
  const width = inputWidth.value || "1280";
  const height = inputHeight.value || "720";
  return inputText.value || `${width} x ${height}`;
}

function savePlaceholder() {
  const imageType = inputExportType.value;
  const imageDataType = `image/${imageType}`;
  const imageQuality = (inputQuality.value || 90) / 100;
  const imageName =
    inputFileName.value || `placeholder-${getPlaceholderText()}`;

  const imageData = canvas.toDataURL(imageDataType, imageQuality);

  const link = document.createElement("a");
  link.download = `${imageName}.${imageType}`;
  link.href = imageData.replace(imageDataType, "image/octet-stream");
  link.click();
}

function drawCanvas() {
  const message = getPlaceholderText();
  const fontSize = inputFontSize.value || Math.floor(canvas.width / 25);

  ctx.fillStyle = inputBackground.value || "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = inputForeground.value || "#000000";
  ctx.font = `${fontSize}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}

function generatePlaceholder() {
  const width = parseInt(inputWidth.value) || 1280;
  const height = parseInt(inputHeight.value) || 720;

  canvas.width = width;
  canvas.height = height;

  const containerAspect = container.offsetWidth / container.offsetHeight;
  const canvasAspect = width / height;

  if (canvasAspect > containerAspect) {
    canvas.style.width = "100%";
    canvas.style.height = "auto";
  } else {
    canvas.style.width = "auto";
    canvas.style.height = "100%";
  }

  drawCanvas();
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
const inputExportType = document.getElementById("input-export-type");
const inputQuality = document.getElementById("input-export-quality");
const inputFileName = document.getElementById("input-export-name");

document.querySelector(".config-panel").addEventListener("input", generatePlaceholder);
document.getElementById("save-placeholder-button").addEventListener("click", savePlaceholder);

generatePlaceholder();
