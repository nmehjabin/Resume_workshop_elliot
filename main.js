var canvas;

function windowResized(){
    resizeCanvas(windowWidth, document.body.scrollHeight);
  }

  function setup() {
    canvas = createCanvas(windowWidth, document.body.scrollHeight);
    canvas.position(0,0);
    canvas.style("z-index", "-1");
  }


let x = 200; // Initial x position of the ball
let y = 200; // Initial y position of the ball
let speedX = 2; // Horizontal speed of the ball
let speedY = 2; // Vertical speed of the ball


function draw() {
    background(200);

    // very simple ball bouncing script to give you an idea
    // Draw the ball
    ellipse(x, y, 50, 50); // Draw a circle (the ball) at position (x, y)
    
    x = x + speedX; // Move the ball horizontally
    y = y + speedY; // Move the ball vertically
    
    // Check if the ball hits the left or right edge of the canvas
    if (x > width || x < 0) {
        speedX = -speedX; // Reverse the horizontal direction when hitting the canvas edges
    }
    
    // Check if the ball hits the top or bottom of the canvas
    if (y > height || y < 0) {
        speedY = -speedY; // Reverse the vertical direction when hitting the canvas edges
    }
}

