function reveal(x, y) {
  mask.style.maskImage = `
    radial-gradient(
      circle 120px at ${x}px ${y}px,
      transparent 50%,
      black 51%
    )
  `;
  mask.style.webkitMaskImage = mask.style.maskImage;
}

document.addEventListener("mousemove", e => {
  reveal(e.clientX, e.clientY);
});

document.addEventListener("touchmove", e => {
  const t = e.touches[0];
  reveal(t.clientX, t.clientY);
});
