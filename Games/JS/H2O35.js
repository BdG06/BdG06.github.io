var _0xf253d1=_0x1752;(function(_0x54c03a,_0x160e4a){var _0xd5aa27=_0x1752,_0x10b68f=_0x54c03a();while(!![]){try{var _0x52aaf9=-parseInt(_0xd5aa27(0x104))/0x1+-parseInt(_0xd5aa27(0xf2))/0x2*(parseInt(_0xd5aa27(0xf7))/0x3)+parseInt(_0xd5aa27(0x102))/0x4+parseInt(_0xd5aa27(0x10a))/0x5*(-parseInt(_0xd5aa27(0x10d))/0x6)+-parseInt(_0xd5aa27(0x10e))/0x7+-parseInt(_0xd5aa27(0x107))/0x8*(parseInt(_0xd5aa27(0xf9))/0x9)+parseInt(_0xd5aa27(0xff))/0xa;if(_0x52aaf9===_0x160e4a)break;else _0x10b68f['push'](_0x10b68f['shift']());}catch(_0x46a193){_0x10b68f['push'](_0x10b68f['shift']());}}}(_0x1b6f,0x38851));class Raster{constructor(_0x223417,_0x552f93){var _0x36b984=_0x1752;this[_0x36b984(0xf5)]=_0x223417,this[_0x36b984(0x112)]=_0x552f93,this[_0x36b984(0x111)]=null;}[_0xf253d1(0xfb)](){var _0x1b4795=_0xf253d1;this[_0x1b4795(0x111)]=canvas['width']/this[_0x1b4795(0x112)];}[_0xf253d1(0x110)](){var _0x173dca=_0xf253d1;push(),noFill(),stroke(_0x173dca(0xfc));for(var _0x1f7f29=0x0;_0x1f7f29<this[_0x173dca(0xf5)];_0x1f7f29++){for(var _0x217435=0x0;_0x217435<this[_0x173dca(0x112)];_0x217435++){rect(_0x217435*this[_0x173dca(0x111)],_0x1f7f29*this[_0x173dca(0x111)],this[_0x173dca(0x111)],this[_0x173dca(0x111)]);}}pop();}}class Jos{constructor(){var _0x599a58=_0xf253d1;this['x']=0x0,this['y']=0xc8,this[_0x599a58(0x109)]=[],this[_0x599a58(0x10f)]=0x3,this[_0x599a58(0x10c)]=null,this['gehaald']=![],this[_0x599a58(0xfd)]=!![];}['beweeg'](){var _0x4d5bc6=_0xf253d1;keyIsDown(RIGHT_ARROW)&&(this['x']+=this[_0x4d5bc6(0x10c)],this[_0x4d5bc6(0x10f)]=0x1,this['aanDeBeurt']=![]),keyIsDown(UP_ARROW)&&(this['y']-=this[_0x4d5bc6(0x10c)],this['frameNummer']=0x4,this[_0x4d5bc6(0xfd)]=![]),keyIsDown(DOWN_ARROW)&&(this['y']+=this[_0x4d5bc6(0x10c)],this[_0x4d5bc6(0x10f)]=0x5,this[_0x4d5bc6(0xfd)]=![]),this['x']=constrain(this['x'],0x0,canvas[_0x4d5bc6(0xfa)]),this['y']=constrain(this['y'],0x0,canvas[_0x4d5bc6(0x100)]-raster[_0x4d5bc6(0x111)]),this['x']==canvas['width']&&(this['gehaald']=!![]);}[_0xf253d1(0x101)](_0x24ffc2){return this['x']==_0x24ffc2['x']&&this['y']==_0x24ffc2['y']?!![]:![];}[_0xf253d1(0x108)](){var _0x2e1a76=_0xf253d1;image(this['animatie'][this['frameNummer']],this['x'],this['y'],raster[_0x2e1a76(0x111)],raster[_0x2e1a76(0x111)]);}}function _0x1b6f(){var _0x3ae603=['33921qrsXSr','width','berekenCelGrootte','grey','aanDeBeurt','images/backgrounds/dame_op_brug_1800.jpg','18346620ZDSWSS','height','wordtGeraakt','303668SfNtMD','gehaald','376111JcVscN','push','Je\x20hebt\x20gewonnen!','688iadgbV','toon','animatie','341610FNBQmX','.png','stapGrootte','12EQpzRm','3069927payvVQ','frameNummer','teken','celGrootte','aantalKolommen','403624VloIYc','beweeg','images/sprites/Eve100px/Eve_','aantalRijen','sprite','6qIDHnW','green'];_0x1b6f=function(){return _0x3ae603;};return _0x1b6f();}class Vijand{constructor(_0x300d09,_0x5f5c3b){var _0x572fa3=_0xf253d1;this['x']=_0x300d09,this['y']=_0x5f5c3b,this[_0x572fa3(0xf6)]=null,this[_0x572fa3(0x10c)]=null;}['beweeg'](){var _0x3ae01e=_0xf253d1;this['x']+=floor(random(-0x1,0x2))*this[_0x3ae01e(0x10c)],this['y']+=floor(random(-0x1,0x2))*this[_0x3ae01e(0x10c)],this['x']=constrain(this['x'],0x0,canvas[_0x3ae01e(0xfa)]-raster['celGrootte']),this['y']=constrain(this['y'],0x0,canvas['height']-raster['celGrootte']);}[_0xf253d1(0x108)](){var _0xbeb3c2=_0xf253d1;image(this[_0xbeb3c2(0xf6)],this['x'],this['y'],raster[_0xbeb3c2(0x111)],raster[_0xbeb3c2(0x111)]);}}function preload(){var _0x5203ac=_0xf253d1;brug=loadImage(_0x5203ac(0xfe));}function setup(){var _0x3e1e48=_0xf253d1;canvas=createCanvas(0x384,0x258),frameRate(0xa),textFont('Verdana'),textSize(0x5a),raster=new Raster(0x6,0x9),raster['berekenCelGrootte'](),eve=new Jos(),eve[_0x3e1e48(0x10c)]=0x1*raster[_0x3e1e48(0x111)];for(var _0x2ae410=0x0;_0x2ae410<0x6;_0x2ae410++){frameEve=loadImage(_0x3e1e48(0xf4)+_0x2ae410+_0x3e1e48(0x10b)),eve['animatie'][_0x3e1e48(0x105)](frameEve);}alice=new Vijand(0x2bc,0xc8),alice['stapGrootte']=0x1*eve[_0x3e1e48(0x10c)],alice[_0x3e1e48(0xf6)]=loadImage('images/sprites/Alice100px/Alice.png'),bob=new Vijand(0x258,0x190),bob[_0x3e1e48(0x10c)]=0x1*eve[_0x3e1e48(0x10c)],bob['sprite']=loadImage('images/sprites/Bob100px/Bob.png');}function _0x1752(_0x5b0ed4,_0x1e4f89){var _0x1b6f4f=_0x1b6f();return _0x1752=function(_0x1752ae,_0x380743){_0x1752ae=_0x1752ae-0xf2;var _0x3f4826=_0x1b6f4f[_0x1752ae];return _0x3f4826;},_0x1752(_0x5b0ed4,_0x1e4f89);}function draw(){var _0x32c366=_0xf253d1;background(brug),raster[_0x32c366(0x110)](),eve[_0x32c366(0xfd)]?eve[_0x32c366(0xf3)]():(alice[_0x32c366(0xf3)](),bob[_0x32c366(0xf3)](),alice['x']==bob['x']&&alice['y']==bob['y']&&bob[_0x32c366(0xf3)](),eve[_0x32c366(0xfd)]=!![]),eve['toon'](),alice['toon'](),bob[_0x32c366(0x108)](),(eve[_0x32c366(0x101)](alice)||eve[_0x32c366(0x101)](bob))&&noLoop(),eve[_0x32c366(0x103)]&&(background(_0x32c366(0xf8)),fill('white'),text(_0x32c366(0x106),0x1e,0x12c),noLoop());}