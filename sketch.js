let angle = 0;
let colorOffset = 0;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  colorMode(HSB, 360, 100, 100);  // Switching to HSB color mode
  background((colorOffset + frameCount) % 360, 50, 100);  // Shifting background color
  
  translate(width / 2, height / 2);
  rotate(angle);
  rect(-50, -50, 100, 100);
  
  angle += 0.02;
  colorOffset += 0.1;
}
