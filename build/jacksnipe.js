//Copyright Daniel Wedding 2019. JackSnipe
class t{constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="Jacksnipe-Canvas",this.width=null,this.height=null}makeDisplay(t,i){this.width=t,this.height=i,this.canvas.width=t,this.canvas.height=i,window.ctx=this.canvas.getContext("2d"),window.canvas=this.canvas}static useDisplay(t){document.body.appendChild(t.canvas)}resizeDisplay(t,i){this.width=t,this.height=i,this.canvas.width=t,this.canvas.height=i}clearDisplay(){ctx.clearRect(0,0,this.width,this.height)}}class i{constructor(t,i,s,h,a){this.image=t,this.x=i,this.y=s,this.width=h,this.height=a}moveTo(t,i){this.x=t,this.y=i}resize(t,i){this.width=t,this.height=i}}class s{constructor(){this.actors=[]}draw(){for(let t in this.actors)ctx.drawImage(this.actors[t].image,this.actors[t].x,this.actors[t].y,this.actors[t].width,this.actors[t].height)}addActor(t){this.actors.push(t)}}class h{constructor(t,i,s,h){this.x=t,this.y=i,this.width=s,this.height=h}static doRectsCollide(t,i){return t.x<i.x+i.width&&i.x<t.x+t.width&&t.y<i.y+i.height&&i.y<t.y+t.height}}class a{constructor(){this.position={x:0,y:0},this.scale={x:1,y:1},this.left=0,this.top=0,this.right=0,this.bottom=0,this.width=0,this.height=0,this.distance=1e3,this.fov=Math.PI/4,this.aspectRatio=0,this.updateCamera()}startCamera(){ctx.save(),this.applyScale(),this.applyTranslation()}stopCamera(){ctx.restore()}applyScale(){ctx.scale(this.scale.x,this.scale.y)}applyTranslation(){ctx.translate(-this.left,-this.top)}updateCamera(){this.aspectRatio=canvas.width/canvas.height,this.width=this.distance*Math.tan(this.fov),this.height=this.width/this.aspectRatio,this.left=this.position.x-this.width/2,this.top=this.position.y-this.height/2,this.right=this.left+this.width,this.bottom=this.top+this.height,this.scale.x=canvas.width/this.width,this.scale.y=canvas.height/this.height}setZoomLevel(t){this.distance=t,this.updateCamera()}moveTo(t,i){this.position.x=t,this.position.y=i,this.updateCamera()}}export{i as Actor,a as Camera,t as Display,h as Rect,s as Stage};
