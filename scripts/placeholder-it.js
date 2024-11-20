function getPlaceholderText() {
  const width = inputWidth.value;
  const height = inputHeight.value;

  return inputText.value || (width + " X " + height)
}

function savePlaceholder() {
  const imageType = inputExportType.value;
  const imageDataType = "image/" + imageType;
  const imageQuality = (inputQuality.value || 90) / 100;
  const imageName = inputFileName.value || ("placeholder-" + getPlaceholderText());

  const imageData = canvas.toDataURL(imageDataType, imageQuality);

  console.log(imageType);

  let link = document.createElement('a');
  link.setAttribute('download', imageName + "." + imageType);
  link.setAttribute('href', imageData.replace(imageDataType, "image/octet-stream"));
  link.click();

  link = null;
}

function drawCanvas(width, height) {
  const message = getPlaceholderText();
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
const inputExportType = document.getElementById("input-export-type");
const inputQuality = document.getElementById("input-export-quality");
const inputFileName = document.getElementById("input-export-name");

document.querySelector(".config-panel").addEventListener("input", generatePlaceholder)