var diameter=0x12c,hoogte1=0x0,hoogte2=0x1c2;function setup(){canvas=createCanvas(0x1c2,0x1c2),colorMode(RGB,0xff,0xff,0xff,0x1),noStroke();}function draw(){background(0xff,0xff,0xff,0x1),fill(0xff,0x0,0x0,0.5),ellipse(width/0x2,height/0x2,diameter),fill(0x0,0xff,0x0,0.5),ellipse(width/0x2,hoogte1,diameter),fill(0x0,0x0,0xff,0.5),ellipse(width/0x2,hoogte2,diameter),hoogte1=hoogte1+=0x1,hoogte2=hoogte2-=0x1;}