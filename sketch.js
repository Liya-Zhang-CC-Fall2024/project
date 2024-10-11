function setup() {
  createCanvas(600, 600); 
  noStroke();
  textAlign(CENTER, CENTER); 
  textSize(32); 
}

function draw() {
  background(255); 

  // Get the current time
  let h = hour();
  let m = minute();
  let s = second();

  
  let sanFranciscoHour = h - 7;
  if (sanFranciscoHour < 0) {
    sanFranciscoHour += 24; // Wrap around to handle negative values
  }

  
  let beijingHour = h + 12;
  if (beijingHour >= 24) {
    beijingHour -= 24; // Wrap around to handle hours greater than 23
  }

  // Define base colors for SF time
  let baseSFHourColor = color(44, 58, 71);      
          // #2C3A47 (dark gray for hours)
  let baseSFMinuteColor = color(65, 114, 159);  
          // #41729F (blue for minutes)
  let baseSFSecondColor = color(131, 182, 146); 
          // #83B692 (light green for seconds)

  // Define base colors for BJ time
  let baseBeijingHourColor = color(237, 74, 106);  
          // #ED4A6A (red for hours)
  let baseBeijingMinuteColor = color(243, 141, 104);  
          // #F38D68 (orange for minutes)
  let baseBeijingSecondColor = color(247, 181, 56);   
          // #F7B538 (yellow for seconds)

  // Map time values to dynamically adjust the brightness of SF time colors based on the base colors
  let sfColorHour = baseSFHourColor; 
  // Fixed color for hour
  let sfColorMinute = baseSFMinuteColor; 
  // Fixed color for minute
  let sfColorSecond = color(map(s, 0, 59, 60, 255), 0, 0); 
  // Color changes for seconds (red)

  // Map time values to change the brightness of BJ time colors based on the base colors
  let beijingColorHour = baseBeijingHourColor; 
  // Fixed color for hour
  let beijingColorMinute = baseBeijingMinuteColor; 
  // Fixed color for minute
  let beijingColorSecond = color(0, map(s, 0, 59, 60, 255), 0); 
  // Color changes for seconds (green)

  // Map local time to RGB color ranges (100-200) to avoid black and dark colors
  let colorHour = map(h, 0, 23, 60, 200);    
  // Map hours to red (brighter, max 200)
  let colorMinute = map(m, 0, 59, 60, 200);  
  // Map minutes to green (brighter, max 200)
  let colorSecond = map(s, 0, 59, 60, 200);  
  // Map seconds to blue (brighter, max 200)

  // Define dynamic colors 
  let colors = [
    [color(colorHour, 0, 0), color(0, colorMinute, 0), color(0, 0, colorSecond)],  
    
    [sfColorHour, sfColorMinute, sfColorSecond],  
    
    [beijingColorHour, beijingColorMinute, beijingColorSecond] 

  ];

  let squareSize = 200; 

  
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      
      let x = col * squareSize;  
      let y = row * squareSize;  
      
      
      for (let i = 0; i < 3; i++) {  
        fill(colors[row][i]);  
        let offset = i * 20;   
        rect(x + offset, y + offset, squareSize - 2 * offset, squareSize - 2 * offset);
      }
    }
  }

  
  fill(255); // White text 

  // Display local hours 
  text(h, squareSize / 2, squareSize / 2);

  // Display local minutes 
  text(m, squareSize + squareSize / 2, squareSize / 2);

  // Display local seconds 
  text(s, 2 * squareSize + squareSize / 2, squareSize / 2);

  // Display San Francisco time in the second row

  // SF hour 
  text(sanFranciscoHour, squareSize / 2, squareSize + squareSize / 2); 

  // SF minutes 
  text(m, squareSize + squareSize / 2, squareSize + squareSize / 2); 

  // SF seconds
  text(s, 2 * squareSize + squareSize / 2, squareSize + squareSize / 2);

  // Display Beijing time in the third row

  // BJ hour in the third row
  text(beijingHour, squareSize / 2, 2 * squareSize + squareSize / 2); 

  // BJ minutes in the third row
  text(m, squareSize + squareSize / 2, 2 * squareSize + squareSize / 2); 

  // BJ seconds in the third row
  text(s, 2 * squareSize + squareSize / 2, 2 * squareSize + squareSize / 2); 
}
