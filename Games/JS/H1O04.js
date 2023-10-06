function setup() {
  canvas = createCanvas(450,390);
  background('cornflowerblue');
  //canvas.parent('processing');
  noLoop();
}



function draw() {
  
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  
  strokeWeight(4);
  stroke('darkgrey');
  fill('gray');
  triangle (100,280,200,280,150,200);
  fill('gray');
  
  // teken de deur
  noStroke();
  rect(120,330,30,50);
  // teken de maan
  noStroke();
  fill('khaki');
  ellipse(350,100,150);

  // teken de boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  
  noStroke();
  fill('olive');
  ellipse(320,230,100,150);
  
}