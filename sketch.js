let on = false;
let x, y, w, l;
let CircleX, CircleY, SpeedX, SpeedY;
let s;



let rectWidth = 400;
let rectHeight = 600;
let startX = 100;
let startY = 100;
let q1ColorSlider, q2ColorSlider, q3ColorSlider;


function setup() {
  createCanvas(windowWidth, windowHeight);

  x = 550;
  y = 40;
  w = 100;
  l = 40;
  s=50;
  CircleX = width / 2;
  CircleY = height / 2;
  SpeedX = 3;
  SpeedY = 4;

  
  
  q1ColorSlider = createSlider(0, 255, 100);
  q1ColorSlider.position(20, 20); 

  q2ColorSlider = createSlider(0, 255, 100);
  q2ColorSlider.position(200, 20); 

  q3ColorSlider = createSlider(0, 255, 100);
  q3ColorSlider.position(400, 20); 
}

function draw() {
  background(240);

 
  let q1ColorValue = q1ColorSlider.value();
  let q2ColorValue = q2ColorSlider.value();
  let q3ColorValue = q3ColorSlider.value();


  fill(q1ColorValue, 100, 200);
  quad(startX, startY,                          
    startX + rectWidth, startY,              
    startX + rectWidth, startY + 100,        
    startX + rectWidth - 130, startY + rectHeight / 2);  

  
  fill(200, q2ColorValue, 150);
  quad(startX, startY,
    startX + rectWidth - 130, startY + rectHeight / 2,
    startX + rectWidth - 130, startY + rectHeight / 2 + 130,
    startX, startY + rectHeight / 2 + 130);

  
  fill(q3ColorValue, 180, 200);
  quad(startX + rectWidth - 130, startY + rectHeight / 2 + 130,
    startX + rectWidth - 130, startY + rectHeight / 2,
    startX + rectWidth, startY + 100,
    startX + rectWidth, startY + rectHeight / 2 + 130);

 //button
  if (on) {
    fill(136, 81, 242);
    rect(x, y, w, l, 30);
    noStroke();
    fill(255);
    text("STOP", x + 50, y + 26);
  } else {
    push();
    strokeWeight(5);
    stroke(136, 81, 242);
    noFill();
    rect(x, y, w, l, 30);
    pop();
    fill(136, 81, 242);
    text("START", x + 50, y + 26);

    textAlign(CENTER);
    textSize(16);
  }
  //ellipse bouncing 
  if (on) {
    noStroke();
    fill(255, 0, 0);
    ellipse(CircleX, CircleY, s, s);
    CircleX += SpeedX;
    CircleY += SpeedY;
    if (CircleX > width || CircleX < 0) {
      SpeedX *= -1;
      s = random(50, 100);
    }
    if (CircleY > height || CircleY < 0) {
      SpeedY *= -1;
      s = random(50, 100);
    }
  } else {
    noStroke();
    fill(255);
    CircleX = width / 2;
    CircleY = height / 2;
    ellipse(CircleX, CircleY, s, s);
    s=50;
  }
  
  
}

function mousePressed() {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + l) {
    on = !on;
  }
}


