(function(_0x131a01,_0x1134e7){var _0x4a1d03=_0x41f6,_0x514382=_0x131a01();while(!![]){try{var _0x49afba=-parseInt(_0x4a1d03(0x10a))/0x1+-parseInt(_0x4a1d03(0x106))/0x2*(parseInt(_0x4a1d03(0x107))/0x3)+parseInt(_0x4a1d03(0x108))/0x4+-parseInt(_0x4a1d03(0x105))/0x5+parseInt(_0x4a1d03(0x109))/0x6+-parseInt(_0x4a1d03(0x10e))/0x7+parseInt(_0x4a1d03(0x10d))/0x8*(parseInt(_0x4a1d03(0x10c))/0x9);if(_0x49afba===_0x1134e7)break;else _0x514382['push'](_0x514382['shift']());}catch(_0x2ffd22){_0x514382['push'](_0x514382['shift']());}}}(_0x4c1f,0x4d08d));var straal=0x14,xPositie,yPositie,xSnelheid=0x8,ySnelheid=0x5,onderlingeAfstand;function setup(){var _0x31bb45=_0x41f6;canvas=createCanvas(0x3e8,0x12c),frameRate(0x32),colorMode(RGB,0xff,0xff,0xff,0x1),background(0x0,0x0,0x4b,0x1),noStroke(),textFont(_0x31bb45(0x104)),textSize(0x8c),xPositie=straal,yPositie=height/0x2;}function _0x4c1f(){var _0x3bcb94=['112isIFAC','32676lNxuSF','1288072RswjRP','570702vcdMzY','222032AbxmSY','white','17973TdkMpx','5928UvhRqH','1007860uzGgBf','GEVANGEN!','Verdana','3027075iHtETO'];_0x4c1f=function(){return _0x3bcb94;};return _0x4c1f();}function draw(){background(0x0,0x0,0x4b,0.05),fill(0x0,0x0,0xff,0x1),ellipse(0x226,height-straal,0x2*straal),xPositie+=xSnelheid,yPositie+=ySnelheid,fill(0xff,0xff,0xff,0x1),ellipse(xPositie,yPositie,0x2*straal),onderlingeAfstand=dist(0x226,height-straal,xPositie,yPositie),onderlingeAfstand<=0x2*straal&&(eindScherm(),noLoop()),gebruikBesturing(),(yPositie<straal||yPositie>height-straal)&&(ySnelheid*=-0x1),(xPositie<straal||xPositie>width-straal)&&(xSnelheid*=-0x1);}function _0x41f6(_0x288e32,_0x2eb224){var _0x4c1f58=_0x4c1f();return _0x41f6=function(_0x41f623,_0x2900e3){_0x41f623=_0x41f623-0x103;var _0x49befd=_0x4c1f58[_0x41f623];return _0x49befd;},_0x41f6(_0x288e32,_0x2eb224);}function gebruikBesturing(){keyIsDown(LEFT_ARROW)&&(xSnelheid+=0x1,ySnelheid+=0x1),keyIsDown(RIGHT_ARROW)&&(xSnelheid-=0x1,ySnelheid-=0x1);}function eindScherm(){var _0x45452b=_0x41f6;background(_0x45452b(0x10b)),fill('black'),text(_0x45452b(0x103),0x4b,0xc8),noLoop();}