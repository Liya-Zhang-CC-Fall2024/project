function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); 
}

function mousePressed() {
  background(255); 
}

function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);

  fill(r, g, b, 100); 
  ellipse(mouseX, mouseY, 50, 50); 

  
  fill(233, 154, 194);
  quad(100, 400, 700, 400, 600, 500, 0, 500);
  
  
  let bookR = map(mouseX, 0, windowWidth, 0, 255);  
  let bookG = map(mouseX, 0, windowWidth, 255, 0);  
  let bookB = map(mouseX, 0, windowWidth, 128, 255); 

  
  fill(bookR, bookG, bookB);
  quad(220, 220, 370, 220, 370, 430, 220, 430);
  
  fill(225); // Book pages
  quad(370, 220, 380, 210, 380, 420, 370, 430);
  quad(220, 220, 220, 220, 380, 210, 370, 220);
  
  fill(255, 128, 0); // Oranges
  ellipse(280, 430, 60, 60);
  ellipse(340, 430, 60, 60);
  
  fill(174, 174, 174); // Vase
  quad(400, 360, 475, 360, 465, 430, 410, 430);
  
  fill(123, 148, 98); // Greens
  quad(415, 100, 430, 100, 430, 360, 415, 360);
  quad(430, 100, 445, 100, 445, 360, 430, 360);
  quad(445, 100, 460, 100, 460, 360, 445, 360);
  
  fill(123, 148, 96);
}
