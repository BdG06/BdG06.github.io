(function(_0x2017db,_0x1590b2){var _0x9fe479=_0x3e24,_0x5a27c7=_0x2017db();while(!![]){try{var _0x12b5b9=parseInt(_0x9fe479(0x7d))/0x1*(parseInt(_0x9fe479(0x7f))/0x2)+parseInt(_0x9fe479(0x85))/0x3+-parseInt(_0x9fe479(0x81))/0x4+-parseInt(_0x9fe479(0x7e))/0x5+-parseInt(_0x9fe479(0x80))/0x6+-parseInt(_0x9fe479(0x7c))/0x7*(-parseInt(_0x9fe479(0x7b))/0x8)+parseInt(_0x9fe479(0x83))/0x9;if(_0x12b5b9===_0x1590b2)break;else _0x5a27c7['push'](_0x5a27c7['shift']());}catch(_0x3204a2){_0x5a27c7['push'](_0x5a27c7['shift']());}}}(_0x59d4,0x9a782));var aantalRijenRaster=0x6,aantalKolommenRaster=0x9,celGrootte,spriteJos,xJos=0x190,yJos=0x12c;function preload(){var _0x2f8d7b=_0x3e24;brug=loadImage('images/backgrounds/dame_op_brug_1800.jpg'),spriteJos=loadImage(_0x2f8d7b(0x84));}function _0x3e24(_0x22a072,_0x1f9f42){var _0x59d477=_0x59d4();return _0x3e24=function(_0x3e2496,_0x378a2d){_0x3e2496=_0x3e2496-0x7b;var _0x516e5b=_0x59d477[_0x3e2496];return _0x516e5b;},_0x3e24(_0x22a072,_0x1f9f42);}function setup(){canvas=createCanvas(0x384,0x258),frameRate(0xa),celGrootte=width/aantalKolommenRaster;}function draw(){var _0x56ea6d=_0x3e24;background(brug),tekenRaster(),keyIsDown(RIGHT_ARROW)&&(xJos+=celGrootte),keyIsDown(LEFT_ARROW)&&(xJos-=celGrootte),keyIsDown(UP_ARROW)&&(yJos-=celGrootte),keyIsDown(DOWN_ARROW)&&(yJos+=celGrootte),xJos=constrain(xJos,0x0,width-celGrootte),yJos=constrain(yJos,0x0,height-celGrootte),image(spriteJos,xJos,yJos),xJos==0x6*celGrootte&&yJos==0x4*celGrootte&&spriteJos[_0x56ea6d(0x82)](ERODE);}function tekenRaster(){push(),noFill(),stroke('grey');for(var _0x2ed28c=0x0;_0x2ed28c<aantalRijenRaster;_0x2ed28c++){for(var _0x31959a=0x0;_0x31959a<aantalKolommenRaster;_0x31959a++){rect(_0x31959a*celGrootte,_0x2ed28c*celGrootte,celGrootte,celGrootte);}}pop();}function _0x59d4(){var _0xa0e20b=['filter','17882289ZEbpZV','images/sprites/Jos100px/Jos_0.png','1321947kpiPaE','13544GRJmTw','623pHaZVF','509ayBslk','4770080iyYcOa','762qjGRls','4324008YOyEbz','1859144UpmDXs'];_0x59d4=function(){return _0xa0e20b;};return _0x59d4();}