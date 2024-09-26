let rectWidth = 400;
let rectHeight = 600;
let startX = 100;
let startY = 100;
let q1ColorSlider, q2ColorSlider, q3ColorSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  
  q1ColorSlider = createSlider(0, 255, 100);
  q1ColorSlider.position(20, 20); 


  q2ColorSlider = createSlider(0, 255, 100);
  q2ColorSlider.position(200, 20); 
  
  q3ColorSlider = createSlider(0, 255, 100);
  q3ColorSlider.position(400,20);
}

function draw() {
  background(220);

  let q1ColorValue = q1ColorSlider.value();
  let q2ColorValue = q2ColorSlider.value();
  let q3ColorValue = q3ColorSlider.value();
  
  
  fill(q1ColorValue, 100, 200);

  
  quad(startX, startY,                          // Top-left
       startX + rectWidth, startY,              // Top-right
       startX + rectWidth, startY + 100,        // Bottom-right
       startX + rectWidth - 130, startY + rectHeight / 2);  // Bottom-left

  // Set the fill color for the second quadrilateral using the slider value (controls green component)
  fill(200, q2ColorValue, 150);


  quad(startX, startY,
      startX + rectWidth - 130, startY + rectHeight / 2,
      startX + rectWidth - 130, startY + rectHeight / 2 + 130,
      startX, startY + rectHeight / 2 + 130 );  
  
  fill(q3ColorValue, 180, 200);

  quad(startX + rectWidth - 130, startY + rectHeight / 2 + 130,
      startX + rectWidth - 130, startY + rectHeight / 2,
      startX + rectWidth, startY + 100,  
      startX + rectWidth, startY + rectHeight / 2 + 130)
}
