(function(_0x39736d,_0x6d0e72){var _0x463574=_0x3ed1,_0x4c42d2=_0x39736d();while(!![]){try{var _0x538cbd=parseInt(_0x463574(0x11a))/0x1*(-parseInt(_0x463574(0x11e))/0x2)+-parseInt(_0x463574(0x117))/0x3+-parseInt(_0x463574(0x11f))/0x4+parseInt(_0x463574(0x11d))/0x5*(parseInt(_0x463574(0x11c))/0x6)+-parseInt(_0x463574(0x124))/0x7*(parseInt(_0x463574(0x125))/0x8)+parseInt(_0x463574(0x122))/0x9*(-parseInt(_0x463574(0x119))/0xa)+parseInt(_0x463574(0x120))/0xb;if(_0x538cbd===_0x6d0e72)break;else _0x4c42d2['push'](_0x4c42d2['shift']());}catch(_0x186a9c){_0x4c42d2['push'](_0x4c42d2['shift']());}}}(_0x22cf,0x81029));function _0x22cf(){var _0x4723d1=['get','190HUBJxj','9279TkCYjU','loadPixels','1518sgEdGe','5270UldSMk','62RyminC','2386460jvkTBF','24321869WUSBRS','images/brieck_klein.jpg','149913ZxfMwE','Georgia','8659YSTWlP','2136WHXTwU','1254870WQNjNO'];_0x22cf=function(){return _0x4723d1;};return _0x22cf();}function _0x3ed1(_0x2766ec,_0x2ad24b){var _0x22cf50=_0x22cf();return _0x3ed1=function(_0x3ed1f0,_0x44c3e4){_0x3ed1f0=_0x3ed1f0-0x117;var _0x248217=_0x22cf50[_0x3ed1f0];return _0x248217;},_0x3ed1(_0x2766ec,_0x2ad24b);}var foto,pixelKleur,rood,groen,blauw,AantalPixels=0x12,n,x;function preload(){var _0x1488a5=_0x3ed1;foto=loadImage(_0x1488a5(0x121));}function setup(){var _0x43ad2a=_0x3ed1;canvas=createCanvas(0x1c2,0x1c2),textFont(_0x43ad2a(0x123)),textSize(0x12),noStroke(),foto[_0x43ad2a(0x11b)]();}function draw(){var _0x550426=_0x3ed1;background(foto);for(n=0x0;n<height;n+=height/AantalPixels){for(x=0x0;x<width;x+=width/AantalPixels){pixelKleur=foto[_0x550426(0x118)](x,n),rood=pixelKleur[0x0],groen=pixelKleur[0x1],blauw=pixelKleur[0x2],fill(pixelKleur),rect(x,n,width/AantalPixels,height/AantalPixels);}}}