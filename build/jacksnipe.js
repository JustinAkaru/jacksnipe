!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).JackSnipe={})}(this,function(t){"use strict";t.appendDisplay=function(t){document.body.appendChild(t)},t.clearDisplay=function(t){ctx.clearRect(0,0,t.width,t.height)},t.doRectsCollide=function(t,e){return t.x<e.right&&e.x<t.right&&t.y<e.bottom&&e.y<t.bottom},t.drawActor=function(t){ctx.drawImage(t.image,t.x,t.y,t.width,t.height)},t.make2DContextCurrent=function(t){window.ctx=t.getContext("2d")},t.makeActor=function(t,e,i,n,o){return{image:t,x:e,y:i,width:n,height:o}},t.makeDisplay=function(t,e){let i=document.createElement("canvas");return i.width=t||window.innerWidth,i.height=e||window.innerHeight,i.id="jacksnipeCanvas",i},t.makeRect=function(t,e,i,n){return{x:t,y:e,width:i,height:n,right:t+i,bottom:e+n}},t.resizeDisplay=function(t,e,i){t.width=e,t.height=i},Object.defineProperty(t,"__esModule",{value:!0})});
