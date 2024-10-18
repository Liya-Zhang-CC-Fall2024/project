let catcher;    // One catcher object
let timer;      // One timer object
let drops = [];    // Create an empty array for raindrops
let totalDrops = 0;    
let wineColor;  
let whiteColor; 
let score = 0;  
let gameOver = false;  

function setup() {
  createCanvas(600, 600);
  catcher = new Catcher(32); // Create the catcher with a base size of 32
  timer = new Timer(300);    // Create a timer that goes off every 300 milliseconds
  timer.start();             // Start the timer

  drops = new Array(1000);  // Array for 1000 drops

  
  
  wineColor = color('#991d4f');  
  whiteColor = color(255);  
}

function draw() {
  background(65, 105, 225);

  // score at the fixed location (30, 40)
  textAlign(LEFT);  // text align to left 
  fill('#991d4f'); 
  textSize(32);  
  text("Score: " + score, 30, 40);  
  

  
  if (gameOver) {
    fill(255);  
    textSize(180);
    textAlign(CENTER, CENTER);
    text("🍷🍷", width / 2, height / 2);  // Display the emoji at the center
    
    // restart the game
    setTimeout(restartGame, 2500);  
    // Wait for 2 seconds before restart
    return true;  // Exit the draw function to stop rendering the game
  }

  // Update and display the catcher
  catcher.setLocation(mouseX, mouseY);
  catcher.display();

  // Check the timer and add new drops
  if (timer.isFinished()) {
    if (totalDrops < drops.length) {
      drops[totalDrops] = new Drop();
      totalDrops++;
    } else {
      totalDrops = 0;  // Restart after all 1000 drops
    }
    timer.start();
  }

  // Move and display all drops
  for (let i = 0; i < totalDrops; i++) {
    drops[i].move();
    drops[i].display();

    // Check for intersection with the catcher
    if (catcher.intersect(drops[i])) {
      drops[i].caught();

      // Check if the caught drop is the wine color (#991d4f)
      if (drops[i].c.toString() === wineColor.toString()) {
        score++;  // wine color score +1
      }

      // Check if the caught drop is white (color(255))
      else if (drops[i].c.toString() === whiteColor.toString()) {
        score--;  // white color score -1
      }

      // Ensure the score doesn't go below 0
      if (score < 0) {
        score = 0;
      }

      // If the score reaches 10, display "Cheers" and end the game
      if (score >= 10) {
        gameOver = true;
      }
    }
  }
}

// Restart the game by resetting the score, drops, and gameOver flag
function restartGame() {
  score = 0;
  totalDrops = 0;
  gameOver = false;
  drops = new Array(1000);  // Reset the raindrops array
  timer.start();  // Restart the timer
}

// Catcher class (Wine Glass Shape)
class Catcher {
  constructor(tempR) {
    this.r = tempR; // Base size for scaling
    this.x = 0;
    this.y = 0;
  }

  setLocation(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
  }

  display() {
    noStroke();
    
    // Draw the stem of the glass
    fill(167,199,203);  // Light blue color for the glass stem
    rectMode(CORNER);
    rect(this.x - 6, this.y, 12, 60);  // Stem of the glass
    
    // Draw the base of the glass
    fill(167,199,203);  // Same color as the stem
    ellipse(this.x, this.y + 60, 40, 10);  // Base of the wine glass

    // Draw the bowl of the glass (wine part)
    stroke(167,199,203);  // Stroke color matching glass color
    strokeWeight(3);
    fill(wineColor);  // Wine color inside the glass
    ellipse(this.x, this.y, 60);  // Top part of the wine glass
    
    // Overlapping rectangle to cut the top of the ellipse to create a glass shape
    noStroke();
    fill(65,105,225);  // Background color to hide the upper part of the ellipse
    rectMode(CENTER);
    rect(this.x, this.y - 15, 80, 30);  // Cut out the top of the ellipse to create the glass shape
  }

  // Check if the catcher intersects a raindrop
  intersect(d) {
    let distance = dist(this.x, this.y, d.x, d.y);
    return distance < this.r + d.r;
  }
}

// Timer class
class Timer {
  constructor(tempTotalTime) {
    this.savedTime = 0;         // When Timer starts
    this.totalTime = tempTotalTime; // How long Timer should last
  }

  start() {
    this.savedTime = millis(); // Store the current time in milliseconds
  }

  setTime(t) {
    this.totalTime = t;
  }

  isFinished() {
    let passedTime = millis() - this.savedTime;
    return passedTime > this.totalTime;
  }
}

// Drop class
class Drop {
  constructor() {
    this.r = 8;  // All raindrops have the same size (radius = 8 pixels)
    this.x = random(width);  // Start with a random x position
    this.y = -this.r * 4;    // Start slightly above the canvas
    this.speed = random(1, 5);  // Pick a random falling speed
    this.c = random([color('#991d4f'), color(255)]);  // Randomly select between wine color and white
  }

  // Move the raindrop down
  move() {
    this.y += this.speed;  // Increment y position by the drop's speed
  }

  // Check if the drop reaches the bottom
  reachedBottom() {
    return this.y > height + this.r * 4;
  }

  // If the drop is caught
  caught() {
    this.speed = 0;  // Stop it from moving by setting speed equal to zero
    this.y = -1000;  // Set the location to somewhere way off-screen
  }

  // Display the raindrop
  display() {
    noStroke();
    fill(this.c);  // Use the randomly selected color (wine color or white)
    for (let i = 2; i < this.r; i++) {
      ellipse(this.x, this.y + i * 4, i * 2, i * 2);
    }
  }
}
