var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock,1000);

function drawClock() {
 
    drawFace(ctx,radius);
    drawNumbers(ctx,radius);
    drawTime(ctx, radius);
}

function drawFace(ctx,radius){
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0 , 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
  
  var grad;
  grad = ctx.createRadialGradient(0,0,0.95*radius,0,0,1.05*radius);
  grad.addColorStop(0,"#333");
  grad.addColorStop(0.5,"white");
  grad.addColorStop(1,"#e6e6fa");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 0.1*radius;
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(0,0,radius*0.1,0,2*Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();
}

function drawNumbers(ctx,radius){
  var num;
  var ang;
  ctx.font = 0.15*radius+"px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for(num=1;num<13;num++){
    ang = num/6*Math.PI;
    ctx.rotate(ang);
    ctx.translate(0,-0.85*radius);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(),0,0);
    ctx.rotate(ang);
    ctx.translate(0,0.85*radius);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx,radius){
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  
  hour = hour%12;
  var hourAng = (hour*Math.PI/6)+(minute*Math.PI/(6*60)+(second*Math.PI/(6*3600)));
  drawHand(ctx,hourAng,radius*0.5,radius*0.07);
  
  var minuteAng = (minute*2*Math.PI/60)+(second&2*Math.PI/3600);
  drawHand(ctx,minuteAng,radius*0.8,radius*0.06);
  
  var secondAng = second*2*Math.PI/60;
  drawHand(ctx,secondAng,radius*0.9,radius*0.02);
 }

function drawHand(ctx,ang,length,width){
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap="round";
  ctx.moveTo(0,0);
  ctx.rotate(ang); 
  ctx.lineTo(0,-length);
  ctx.stroke();
  ctx.rotate(-ang);

  
}