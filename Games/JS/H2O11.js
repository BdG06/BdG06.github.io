(function(_0x4b6cc4,_0x5990c4){var _0x5eebac=_0x1544,_0x5ea47b=_0x4b6cc4();while(!![]){try{var _0x3e90d9=-parseInt(_0x5eebac(0x75))/0x1+parseInt(_0x5eebac(0x80))/0x2+-parseInt(_0x5eebac(0x7a))/0x3*(-parseInt(_0x5eebac(0x73))/0x4)+-parseInt(_0x5eebac(0x76))/0x5*(parseInt(_0x5eebac(0x77))/0x6)+parseInt(_0x5eebac(0x72))/0x7+parseInt(_0x5eebac(0x7e))/0x8+parseInt(_0x5eebac(0x7d))/0x9;if(_0x3e90d9===_0x5990c4)break;else _0x5ea47b['push'](_0x5ea47b['shift']());}catch(_0x143190){_0x5ea47b['push'](_0x5ea47b['shift']());}}}(_0x550c,0x92ca7));function _0x550c(){var _0x265e32=['943162wuyKkX','push','3092453VtVPxJ','4OQeksq','Georgia','1162217TERsac','530360xSoPTK','30asIIse','nummer=','height','3355449xYjbTn','images/sprites/wizard/opdracht_11B/frame(','width','255762SIndNr','1868568Jywmkl',').png'];_0x550c=function(){return _0x265e32;};return _0x550c();}var animatie=[],aantalBeeldjes=0x1e,nummer=0x0,breedte,hoogte;function preload(){var _0x3804fc=_0x1544;for(var _0x9c7e0=0x0;_0x9c7e0<aantalBeeldjes;_0x9c7e0++){nieuw_beeldje=loadImage(_0x3804fc(0x7b)+_0x9c7e0+_0x3804fc(0x7f)),animatie[_0x3804fc(0x81)](nieuw_beeldje);}}function _0x1544(_0x566295,_0x37ad16){var _0x550ce2=_0x550c();return _0x1544=function(_0x154477,_0xa244ea){_0x154477=_0x154477-0x72;var _0x5e98ef=_0x550ce2[_0x154477];return _0x5e98ef;},_0x1544(_0x566295,_0x37ad16);}function setup(){var _0x2f1823=_0x1544;canvas=createCanvas(0xfa,0x64),noStroke(),frameRate(0xa),textFont(_0x2f1823(0x74)),textSize(0x12),breedte=animatie[0x0][_0x2f1823(0x7c)],hoogte=animatie[0x0][_0x2f1823(0x79)];}function draw(){var _0x403d88=_0x1544;background('lavender'),nummer=frameCount%aantalBeeldjes,image(animatie[nummer],0x96,0x0,0x2*breedte,0x2*hoogte),text('frameCount='+frameCount,0x5,0x28),text(_0x403d88(0x78)+nummer,0x5,0x46);}