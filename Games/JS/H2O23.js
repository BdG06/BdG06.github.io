(function(_0x451d0a,_0x450c31){var _0x36ba70=_0x5ed0,_0x46f83a=_0x451d0a();while(!![]){try{var _0x1f341d=-parseInt(_0x36ba70(0x172))/0x1*(parseInt(_0x36ba70(0x178))/0x2)+parseInt(_0x36ba70(0x16d))/0x3*(parseInt(_0x36ba70(0x174))/0x4)+-parseInt(_0x36ba70(0x16c))/0x5+-parseInt(_0x36ba70(0x171))/0x6+parseInt(_0x36ba70(0x179))/0x7+-parseInt(_0x36ba70(0x170))/0x8*(-parseInt(_0x36ba70(0x16b))/0x9)+parseInt(_0x36ba70(0x176))/0xa;if(_0x1f341d===_0x450c31)break;else _0x46f83a['push'](_0x46f83a['shift']());}catch(_0x3f6a77){_0x46f83a['push'](_0x46f83a['shift']());}}}(_0x1e22,0xb4657));var speler={'getrokkenKaarten':[],'trekKaart'(_0x340bbc){var _0x2cb19c=_0x5ed0;volgNummer=floor(random(0x0,_0x340bbc[_0x2cb19c(0x17a)])),this[_0x2cb19c(0x16e)][_0x2cb19c(0x16f)](_0x340bbc[volgNummer]),this[_0x2cb19c(0x175)]();},'toonKaarten'(){var _0x3e671c=_0x5ed0;for(var _0x19125d=0x0;_0x19125d<this[_0x3e671c(0x16e)][_0x3e671c(0x17a)];_0x19125d++){image(this[_0x3e671c(0x16e)][_0x19125d],this['getrokkenKaarten'][_0x19125d][_0x3e671c(0x168)]*_0x19125d,0x0);}}},kaartSpel=[],kaartSoorten=new Array('S','K','H','R');function _0x5ed0(_0x3bd57a,_0x1ef88d){var _0x1e22cd=_0x1e22();return _0x5ed0=function(_0x5ed064,_0x564f3e){_0x5ed064=_0x5ed064-0x166;var _0x370c18=_0x1e22cd[_0x5ed064];return _0x370c18;},_0x5ed0(_0x3bd57a,_0x1ef88d);}function _0x1e22(){var _0x531625=['push','5054072ndLRLV','8455044BXcIMA','67FQQHnw','trekKaart','164LPHhUx','toonKaarten','21129260AYKMpr','4\x20kaarten,\x20niet\x20meer','41614GyEnfA','4241713hFuCey','length','height','white','width','.png','Georgia','9LqXJUM','2357955PjKnsF','48519kixsaj','getrokkenKaarten'];_0x1e22=function(){return _0x531625;};return _0x1e22();}function preload(){var _0x19fab4=_0x5ed0;for(var _0x55901c=0x0;_0x55901c<kaartSoorten[_0x19fab4(0x17a)];_0x55901c++){for(var _0x479b3a=0x1;_0x479b3a<=0xd;_0x479b3a++){kaart=loadImage('images/speelkaarten/'+kaartSoorten[_0x55901c]+_0x479b3a+_0x19fab4(0x169)),kaartSpel[_0x19fab4(0x16f)](kaart);}}}function setup(){var _0x74a4ea=_0x5ed0;canvas=createCanvas(0xe2*0x4,0x13b),textFont(_0x74a4ea(0x16a)),textSize(0x3c),textAlign(CENTER,CENTER),noStroke(),frameRate(0x5);}function draw(){var _0x4ededd=_0x5ed0;background('white'),speler[_0x4ededd(0x175)](),mouseIsPressed&&(speler[_0x4ededd(0x16e)][_0x4ededd(0x17a)]<0x4?speler[_0x4ededd(0x173)](kaartSpel):(fill('red'),rect(0x0,0x0,canvas[_0x4ededd(0x168)],canvas[_0x4ededd(0x166)]),fill(_0x4ededd(0x167)),text(_0x4ededd(0x177),0x0,0x0,canvas['width'],canvas[_0x4ededd(0x166)])));}