var _0x2ae5b6=_0x577b;(function(_0x300922,_0x36f658){var _0x2c0df5=_0x577b,_0x2390d4=_0x300922();while(!![]){try{var _0x31d2b5=-parseInt(_0x2c0df5(0x1f3))/0x1+parseInt(_0x2c0df5(0x1e5))/0x2*(parseInt(_0x2c0df5(0x1ec))/0x3)+parseInt(_0x2c0df5(0x1f0))/0x4*(-parseInt(_0x2c0df5(0x1ed))/0x5)+-parseInt(_0x2c0df5(0x1e8))/0x6*(-parseInt(_0x2c0df5(0x1e9))/0x7)+parseInt(_0x2c0df5(0x1ef))/0x8*(parseInt(_0x2c0df5(0x1f4))/0x9)+parseInt(_0x2c0df5(0x1f8))/0xa+-parseInt(_0x2c0df5(0x1f2))/0xb;if(_0x31d2b5===_0x36f658)break;else _0x2390d4['push'](_0x2390d4['shift']());}catch(_0x9ebd00){_0x2390d4['push'](_0x2390d4['shift']());}}}(_0x2bfa,0xe1cc7));class Knikker{constructor(_0x1fffec,_0x17ba16,_0x204e99){var _0x4253ae=_0x577b;this['diameter']=0x28,this['straal']=this[_0x4253ae(0x1e7)]/0x2,this['x']=_0x1fffec,this['y']=_0x17ba16,this[_0x4253ae(0x1f6)]=random(0x1,0xa),this[_0x4253ae(0x1fa)]=random(0x1,0xa),this[_0x4253ae(0x1eb)]=_0x204e99;}[_0x2ae5b6(0x1e6)](){var _0x58c91a=_0x2ae5b6;this['x']+=this['snelheidX'],this['y']+=this[_0x58c91a(0x1fa)],(this['x']<this[_0x58c91a(0x1f9)]||this['x']>canvas[_0x58c91a(0x1f7)]-this[_0x58c91a(0x1f9)])&&(this['snelheidX']*=-0x1),(this['y']<this[_0x58c91a(0x1f9)]||this['y']>canvas['height']-this[_0x58c91a(0x1f9)])&&(this[_0x58c91a(0x1fa)]*=-0x1);}[_0x2ae5b6(0x1f1)](){var _0x2723ac=_0x2ae5b6;fill(this[_0x2723ac(0x1eb)]),ellipse(this['x'],this['y'],this[_0x2723ac(0x1e7)]);}}var knikkerVerzameling=[];function _0x2bfa(){var _0x222eba=['13783304EmqzGx','148908qpfHtU','teken','2060806RxjxHF','1695328uzSVMs','9QHBzSZ','length','snelheidX','width','7314970gbCaZF','straal','snelheidY','3134776EiuXAq','beweeg','diameter','6HkyjHL','4008501sGIjfL','white','kleur','3XASgPq','240hxrqKa','push'];_0x2bfa=function(){return _0x222eba;};return _0x2bfa();}function setup(){var _0x262c66=_0x2ae5b6;canvas=createCanvas(0x3e8,0x12c),frameRate(0x32),colorMode(RGB,0xff,0xff,0xff,0x1),background(0x0,0x0,0x4b,0x1),noStroke();for(var _0x415fe8=0x0;_0x415fe8<0xa;_0x415fe8++){knikkerVerzameling[_0x262c66(0x1ee)](new Knikker(random(0x14,0x3d4),random(0x14,0x118),_0x262c66(0x1ea)));}}function _0x577b(_0x84f88a,_0x3ca750){var _0x2bfa7e=_0x2bfa();return _0x577b=function(_0x577b87,_0x12ef8a){_0x577b87=_0x577b87-0x1e5;var _0x151dca=_0x2bfa7e[_0x577b87];return _0x151dca;},_0x577b(_0x84f88a,_0x3ca750);}function draw(){var _0x32bb5e=_0x2ae5b6;background(0x0,0x0,0x4b,0.2);for(var _0x71fead=0x0;_0x71fead<knikkerVerzameling[_0x32bb5e(0x1f5)];_0x71fead++){knikkerVerzameling[_0x71fead][_0x32bb5e(0x1e6)](),knikkerVerzameling[_0x71fead]['teken']();}mouseIsPressed&&knikkerVerzameling[_0x32bb5e(0x1ee)](new Knikker(mouseX,mouseY,'red'));}