var _0x337d19=_0x1ace;(function(_0x35f440,_0x45ebe2){var _0x221d31=_0x1ace,_0x233391=_0x35f440();while(!![]){try{var _0x1f4b24=parseInt(_0x221d31(0x71))/0x1+-parseInt(_0x221d31(0x7d))/0x2*(-parseInt(_0x221d31(0x76))/0x3)+-parseInt(_0x221d31(0x78))/0x4+-parseInt(_0x221d31(0x7c))/0x5+-parseInt(_0x221d31(0x70))/0x6+-parseInt(_0x221d31(0x80))/0x7+-parseInt(_0x221d31(0x7b))/0x8*(-parseInt(_0x221d31(0x81))/0x9);if(_0x1f4b24===_0x45ebe2)break;else _0x233391['push'](_0x233391['shift']());}catch(_0x3306c6){_0x233391['push'](_0x233391['shift']());}}}(_0x24f5,0x199dd));var kleur=_0x337d19(0x7e),afstand,canvas='gray';function _0x24f5(){var _0x584165=['610288oRxMez','white','lavender','8qGrjfZ','756345EQvrKK','154UkaUHL','indianred','slategray','1330924exlmWw','3755439qvQALH','422916JCgcBm','71394YpzBav','Beweeg\x20de\x20muis\x20|\x20x\x20=\x20','yellow','Verdana','black','7041XrpAfi','red'];_0x24f5=function(){return _0x584165;};return _0x24f5();}function setup(){var _0xf4193=_0x337d19;canvas=createCanvas(0x1c2,0x1c2),textFont(_0xf4193(0x74)),textSize(0xe),noStroke(),frameRate(0x32);}function _0x1ace(_0x3de8b5,_0x5a1eb3){var _0x24f539=_0x24f5();return _0x1ace=function(_0x1aced5,_0xbba832){_0x1aced5=_0x1aced5-0x70;var _0x62fb2e=_0x24f539[_0x1aced5];return _0x62fb2e;},_0x1ace(_0x3de8b5,_0x5a1eb3);}function draw(){var _0x2882b0=_0x337d19;background(_0x2882b0(0x7a)),fill(_0x2882b0(0x75)),mouseX>=0xe1?background('white'):background(_0x2882b0(0x73)),mouseX=constrain(mouseX,0x19,width-0x19),mouseY=constrain(mouseY,0x19,height-0x19),text(_0x2882b0(0x72)+round(mouseX)+'\x20en\x20y\x20=\x20'+round(mouseY),0xa,0x14),mouseX>=width-0x1e||mouseX<=0x1e||mouseY<=0x1e||mouseY>=height-0x1e||afstand<=0x50?kleur=_0x2882b0(0x77):kleur='indianred',ellipse(width/0x2,height/0x2,0x64),tekenJos(mouseX,mouseY,kleur),afstand=dist(mouseX,mouseY,0xe1,0xe1),text(afstand,0xa,0x28);}function tekenJos(_0x244d58,_0x1bad60,_0x205722){var _0x34497c=_0x337d19;push(),translate(_0x244d58,_0x1bad60),scale(0x1),noStroke(),fill(_0x205722),ellipse(0x0,0x0,0x32),fill(_0x34497c(0x7f)),ellipse(-0x7,-0xa,0x11),ellipse(0x7,-0xa,0x11),fill('white'),ellipse(-0x7,-0x8,0x7,0xd),ellipse(0x7,-0x8,0x7,0xd),fill('orange'),ellipse(0x0,0x3,0x11),stroke(_0x34497c(0x7f)),strokeWeight(0x3),fill(_0x34497c(0x79)),arc(0x0,0xd,0x1a,0xd,0x0,PI,CHORD),pop();}