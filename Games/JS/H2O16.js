function _0x191b(_0x46b329,_0x210f73){var _0x44196b=_0x4419();return _0x191b=function(_0x191bfa,_0x337e1b){_0x191bfa=_0x191bfa-0x1a5;var _0x5672dd=_0x44196b[_0x191bfa];return _0x5672dd;},_0x191b(_0x46b329,_0x210f73);}function _0x4419(){var _0x1871e0=['882592ZtSNvq','height','lavender','1886465VJyTWI','383646GlDkJn','images/sprites/Pony.png','Georgia','130445sNPKBi','10478224mPZOYu','12AZyCnP','1004744YPuuwZ','4615415TEQlvi','width'];_0x4419=function(){return _0x1871e0;};return _0x4419();}(function(_0x4e38ce,_0x5692c0){var _0x5cacf2=_0x191b,_0x46839a=_0x4e38ce();while(!![]){try{var _0xd1a831=parseInt(_0x5cacf2(0x1ac))/0x1+parseInt(_0x5cacf2(0x1a5))/0x2+parseInt(_0x5cacf2(0x1a9))/0x3+-parseInt(_0x5cacf2(0x1af))/0x4+parseInt(_0x5cacf2(0x1b0))/0x5+parseInt(_0x5cacf2(0x1ae))/0x6*(parseInt(_0x5cacf2(0x1a8))/0x7)+-parseInt(_0x5cacf2(0x1ad))/0x8;if(_0xd1a831===_0x5692c0)break;else _0x46839a['push'](_0x46839a['shift']());}catch(_0x4855d8){_0x46839a['push'](_0x46839a['shift']());}}}(_0x4419,0x92a9c));var spriteSheet,rij=0x0,aantalSpriteRijen=0x4,aantalSpriteKolommen=0xc,schaal=0x2,breedte,hoogte,sBr,sHo,br,ho,x=0xbe,y=0x64,kolom;function preload(){var _0x59aeef=_0x191b;spriteSheet=loadImage(_0x59aeef(0x1aa));}function setup(){var _0x3e4d81=_0x191b;canvas=createCanvas(0x1cc,0x118),textFont(_0x3e4d81(0x1ab)),textSize(0x12),noStroke(),frameRate(0xa),breedte=spriteSheet[_0x3e4d81(0x1b1)],hoogte=spriteSheet[_0x3e4d81(0x1a6)],sBr=breedte/aantalSpriteKolommen,sHo=hoogte/aantalSpriteRijen,br=sBr*schaal,ho=sBr*schaal,kolom=0x0;}function draw(){var _0x3de535=_0x191b;background(_0x3de535(0x1a7)),image(spriteSheet,x,y,br,ho,kolom*sBr,rij*sHo,sBr,sHo);if(keyIsDown(LEFT_ARROW))x-=0xa,rij=0x1,kolom=frameCount%aantalSpriteKolommen;else{if(keyIsDown(RIGHT_ARROW))x+=0xa,rij=0x2,kolom=frameCount%aantalSpriteKolommen;else{if(keyIsDown(UP_ARROW))y-=0xa,rij=0x3,kolom=frameCount%aantalSpriteKolommen;else keyIsDown(DOWN_ARROW)?(y+=0xa,rij=0x0,kolom=frameCount%aantalSpriteKolommen):frameCount=kolom;}}y=constrain(y,0x0,height-ho),x=constrain(x,0x0,width-br);}