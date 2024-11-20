function scrollToCanvasSection() {
  const canvasSection = document.querySelector(".canvas-section");
  canvasSection.scrollIntoView({
    behavior: "smooth"
  })
}

document.querySelector("#cat-button").addEventListener("click", scrollToCanvasSection);
