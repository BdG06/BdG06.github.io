var _0x208837=_0x57cc;function _0x1aa9(){var _0x7c6a01=['celGrootte','241728TheIsA','gehaald','wordtGeraakt','aantalRijen','images/sprites/Alice100px/Alice.png','1284736Avuwzx','.png','389726UjTwbf','white','push','Verdana','96giThdA','stapGrootte','images/sprites/Bob100px/Bob.png','images/sprites/Eve100px/Eve_','berekenCelGrootte','kolom','aantalKolommen','1116081AuVgXs','sprite','grey','teken','beweeg','1283114Lrgxmq','animatie','5316yPmGHX','6iiiZzR','794795eSreGm','rij','images/backgrounds/dame_op_brug_1800.jpg','green','frameNummer','toon','width','height'];_0x1aa9=function(){return _0x7c6a01;};return _0x1aa9();}(function(_0xb44cb6,_0x3f1d54){var _0xf694f6=_0x57cc,_0x5b0a93=_0xb44cb6();while(!![]){try{var _0x19c70e=parseInt(_0xf694f6(0x1f6))/0x1+-parseInt(_0xf694f6(0x1fd))/0x2+-parseInt(_0xf694f6(0x1eb))/0x3*(-parseInt(_0xf694f6(0x1dd))/0x4)+-parseInt(_0xf694f6(0x1ed))/0x5+-parseInt(_0xf694f6(0x1ec))/0x6*(-parseInt(_0xf694f6(0x1e9))/0x7)+parseInt(_0xf694f6(0x1fb))/0x8+-parseInt(_0xf694f6(0x1e4))/0x9;if(_0x19c70e===_0x3f1d54)break;else _0x5b0a93['push'](_0x5b0a93['shift']());}catch(_0x1ef813){_0x5b0a93['push'](_0x5b0a93['shift']());}}}(_0x1aa9,0x24b2f));class Raster{constructor(_0x2a4660,_0x3af3ce){var _0x35213b=_0x57cc;this[_0x35213b(0x1f9)]=_0x2a4660,this[_0x35213b(0x1e3)]=_0x3af3ce,this[_0x35213b(0x1f5)]=null;}[_0x208837(0x1e1)](){var _0x41cce6=_0x208837;this[_0x41cce6(0x1f5)]=canvas['width']/this[_0x41cce6(0x1e3)];}[_0x208837(0x1e7)](){var _0x3a58a2=_0x208837;push(),noFill(),stroke(_0x3a58a2(0x1e6));for(this['rij']=0x0;this[_0x3a58a2(0x1ee)]<this[_0x3a58a2(0x1f9)];this['rij']++){for(this[_0x3a58a2(0x1e2)]=0x0;this[_0x3a58a2(0x1e2)]<this[_0x3a58a2(0x1e3)];this[_0x3a58a2(0x1e2)]++){rect(this[_0x3a58a2(0x1e2)]*this[_0x3a58a2(0x1f5)],this['rij']*this[_0x3a58a2(0x1f5)],this['celGrootte'],this['celGrootte']);}}pop();}}class Jos{constructor(){var _0x4d2f40=_0x208837;this['x']=0x190,this['y']=0x12c,this[_0x4d2f40(0x1ea)]=[],this['frameNummer']=0x3,this['stapGrootte']=null,this[_0x4d2f40(0x1f7)]=![];}[_0x208837(0x1e8)](){var _0x1c0ad1=_0x208837;keyIsDown(LEFT_ARROW)&&(this['x']-=this[_0x1c0ad1(0x1de)],this[_0x1c0ad1(0x1f1)]=0x2),keyIsDown(RIGHT_ARROW)&&(this['x']+=this[_0x1c0ad1(0x1de)],this[_0x1c0ad1(0x1f1)]=0x1),keyIsDown(UP_ARROW)&&(this['y']-=this[_0x1c0ad1(0x1de)],this[_0x1c0ad1(0x1f1)]=0x4),keyIsDown(DOWN_ARROW)&&(this['y']+=this[_0x1c0ad1(0x1de)],this[_0x1c0ad1(0x1f1)]=0x5),this['x']=constrain(this['x'],0x0,canvas['width']),this['y']=constrain(this['y'],0x0,canvas[_0x1c0ad1(0x1f4)]-raster1['celGrootte']),this['x']==canvas[_0x1c0ad1(0x1f3)]&&(this[_0x1c0ad1(0x1f7)]=!![]);}[_0x208837(0x1f8)](_0xff701d){return this['x']==_0xff701d['x']&&this['y']==_0xff701d['y']?!![]:![];}[_0x208837(0x1f2)](){var _0xe5da0e=_0x208837;image(this[_0xe5da0e(0x1ea)][this[_0xe5da0e(0x1f1)]],this['x'],this['y'],raster1['celGrootte'],raster1[_0xe5da0e(0x1f5)]);}}function _0x57cc(_0x9dac45,_0x1ebbbe){var _0x1aa93b=_0x1aa9();return _0x57cc=function(_0x57cc5e,_0x2fc1ae){_0x57cc5e=_0x57cc5e-0x1dc;var _0x58d0a4=_0x1aa93b[_0x57cc5e];return _0x58d0a4;},_0x57cc(_0x9dac45,_0x1ebbbe);}class Vijand{constructor(_0x5ee3d9,_0x41519a){var _0x30a48a=_0x208837;this['x']=_0x5ee3d9,this['y']=_0x41519a,this[_0x30a48a(0x1e5)]=null,this[_0x30a48a(0x1de)]=null;}[_0x208837(0x1e8)](){var _0xc775de=_0x208837;this['x']+=floor(random(-0x1,0x2))*this[_0xc775de(0x1de)],this['y']+=floor(random(-0x1,0x2))*this[_0xc775de(0x1de)],this['x']=constrain(this['x'],0x0,canvas[_0xc775de(0x1f3)]-raster1['celGrootte']),this['y']=constrain(this['y'],0x0,canvas['height']-raster1[_0xc775de(0x1f5)]);}[_0x208837(0x1f2)](){var _0x3c1679=_0x208837;image(this[_0x3c1679(0x1e5)],this['x'],this['y'],raster1['celGrootte'],raster1[_0x3c1679(0x1f5)]);}}function preload(){var _0x4b8b27=_0x208837;brug=loadImage(_0x4b8b27(0x1ef));}function setup(){var _0x16215a=_0x208837;canvas=createCanvas(0x384,0x258),frameRate(0xa),textFont(_0x16215a(0x1dc)),textSize(0x5a),raster1=new Raster(0x6,0x9),raster1['berekenCelGrootte'](),eve=new Jos(),eve[_0x16215a(0x1de)]=0x1*raster1[_0x16215a(0x1f5)];for(var _0x2bc6cf=0x0;_0x2bc6cf<0x6;_0x2bc6cf++){frameEve=loadImage(_0x16215a(0x1e0)+_0x2bc6cf+_0x16215a(0x1fc)),eve[_0x16215a(0x1ea)][_0x16215a(0x1ff)](frameEve);}alice=new Vijand(0x2bc,0x64),alice[_0x16215a(0x1de)]=0x1*eve[_0x16215a(0x1de)],alice[_0x16215a(0x1e5)]=loadImage(_0x16215a(0x1fa)),bob=new Vijand(0x2bc,0x190),bob[_0x16215a(0x1de)]=0x1*eve[_0x16215a(0x1de)],bob[_0x16215a(0x1e5)]=loadImage(_0x16215a(0x1df));}function draw(){var _0x5d3c51=_0x208837;background(brug),raster1[_0x5d3c51(0x1e7)](),eve[_0x5d3c51(0x1e8)](),bob['beweeg'](),alice[_0x5d3c51(0x1e8)](),eve[_0x5d3c51(0x1f2)](),bob[_0x5d3c51(0x1f2)](),alice[_0x5d3c51(0x1f2)](),(eve[_0x5d3c51(0x1f8)](alice)||eve[_0x5d3c51(0x1f8)](bob))&&noLoop(),eve[_0x5d3c51(0x1f7)]&&(background(_0x5d3c51(0x1f0)),fill(_0x5d3c51(0x1fe)),text('Je\x20hebt\x20gewonnen!',0x1e,0x12c),noLoop());}