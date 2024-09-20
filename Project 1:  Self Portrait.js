function setup() {
  createCanvas(800, 600); 
  noLoop(); 
}

function draw() {
  background(135, 206, 250); 
  
  drawMountain(400, 500, 300); 
  drawGround(0, 500, width, 100); 

  drawShapes();
}

function drawMountain(x, y, size) {
  fill(139, 69, 19); 
  noStroke();
  
  
  triangle(
    x - size / 2, y,        
    x + size / 2, y,        
    x, y - size             
  );
  
  
  fill(255); 
  noStroke();
  
 
  beginShape();
  vertex(x - size / 4, y - size / 2); 
  vertex(x + size / 4, y - size / 2); 
  vertex(x, y - size / 4);            
  endShape(CLOSE);
}

function drawGround(x, y, w, h) {
  fill(34, 139, 34); 
  noStroke();
  rect(x, y, w, h); 
}

function drawShapes() {
  
  push();
  translate(200, 250);
  ellipse(-35.5, -24, 100);
  ellipse(35.5, -24, 100);
  triangle(-80, 0, 80, 0, 0, 96);
  pop();

  push();
  translate(100, 100);
  rotate(PI / 4);
  ellipse(-35.5, -24, 100);
  ellipse(35.5, -24, 100);
  triangle(-80, 0, 80, 0, 0, 96);
  pop();
  
  push();
    translate(100, 420);
    rotate(-PI / 6);
    ellipse(-35.5, -24, 100);
    ellipse(35.5, -24, 100);
    triangle(-80, 0, 80, 0, 0, 96);
    pop();
  
  push();
    translate(650, 400);
    ellipse(-35.5, -24, 100);
    ellipse(35.5, -24, 100);
    triangle(-80, 0, 80, 0, 0, 96);
    pop();

    push();
    translate(650, 100);
    rotate(PI / 9);
    ellipse(-35.5, -24, 100);
    ellipse(35.5, -24, 100);
    triangle(-80, 0, 80, 0, 0, 96);
    pop();

    push();
      translate(400, 120);
      rotate(-PI / 8);
      ellipse(-35.5, -24, 100);
      ellipse(35.5, -24, 100);
      triangle(-80, 0, 80, 0, 0, 96);
      pop();
  
}
