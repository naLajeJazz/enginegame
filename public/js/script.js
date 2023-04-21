
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg} from './Img.js'


 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

////Objetos////

let txt=new Obj(canvas.width/2,canvas.height/2,800,800,0.5);
setInterval(()=>txt.spd=-0.5 ,4000);
setInterval(()=>txt.spd=0.5 ,8000);

let mouse=new Obj(0,0,64,64),
    click=false;
    

let test=false;

let debug=new Obj(300,50),
    debugMode=false;

let point=new Obj(mouse.x,mouse.y,16,16,10),
pointActive=false

let ship=new Obj(400,400,32,32,0.3),
    engine=false,
    fuel=1000;


/////////


////controles////

////teclado

window.addEventListener("keyup",()=>{
                 test=false;
                 
                  
                },false);

window.addEventListener("keydown",function(event){

                  let k= event.key;
                             
                  if (k == "d" ){
                                         
                  test=true

                  }else if(k =="a" ){

                  test=true
                                        
                  }else if (k=="w"){

                  test=true

                  }else if (k=="s"){

                  test=true

                  }else if (k=="t"){
                  debugMode=true           
                  }else if (k=="y"){
                  debugMode=false           
                  }
                  else if (k=="f"){
                             engine=true        
                  }
                  else if (k=="g"){
                                 engine=false     
                  }
                  else if (k=="e"){
                                 ship.spd+=0.1    
                  }
                  else if (k=="q"){
                                ship.spd-=0.1   
                  }
                  },false);


///mouse
                  
canvas.addEventListener('mousemove',function(e){
                  mouse.x=e.offsetX;
                  mouse.y=e.offsetY;

                  
              },false);
canvas.addEventListener('mousedown',function(){
                  click=true
                  pointActive=true
                 
                 
              },false);
canvas.addEventListener('mouseup',function(){
                  click=false
                  pointActive=false
                  
              },false);
canvas.addEventListener('mouseover',function(){
                  ////
                  
              },false);
               
/////////

///anima Sprite
let xIndex=0
let yIndex=0
let animaSpd=8//tem que ser multiplos de 2
setInterval(()=>xIndex+=64,1000/animaSpd);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndex=0,4000/animaSpd);//quando chegar na ultima imagem volta pra primeira

/////Game Update

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);


if(pointActive==true){

  point.x=mouse.x
  point.y=mouse.y
}


point.collide(mouse.x,mouse.y,mouse.w,mouse.h)
ship.collide(mouse.x,mouse.y,mouse.w,mouse.h)  
ship.collide(point.x,point.y,point.w,point.h)  

////draw


if(!ship.collideBolean){

  point.DrawCicle(8, 0, 2 * Math.PI)
  point.DrawRect("white")
}
if(ship.collideBolean){

  ship.DrawRect("red")
  engine=false
}else{
  ship.DrawRect("green")
  
}
///mover na direçao indicada

if(engine&&fuel>0){


  if(ship.x<point.x){
   ship.x+=ship.spd
   fuel-=ship.spd
   
  }
  if(ship.x>point.x) {
    ship.x-=ship.spd
    fuel-=ship.spd
  } 
  
  if(ship.y>point.y){
   ship.y-=ship.spd
   fuel-=ship.spd
  }
  if(ship.y<point.y) {
    ship.y+=ship.spd
    fuel-=ship.spd
  } 

 
}else{
  ship.DrawLine(point.x,point.y)
  point.hudMsg(point.x,point.y-32,"green","18px DePixel",`
point.x: ${point.x}
point.y: ${point.y}

`)
}

if (click){mouse.SpriteAnime(mouseImg,0,yIndex+64)}else{mouse.SpriteAnime(mouseImg,0,yIndex)}


////Hud
ship.hudMsg(ship.x,ship.y-64,"green","18px DePixel",`engine: ${engine}`)
ship.hudMsg(ship.x,ship.y-32,"green","18px DePixel",`
distancex:${ Math.floor(ship.x-point.x)}
distancey:${ Math.floor(ship.y-point.y)}
ship.x:${Math.floor(ship.x) }
ship.y:${Math.floor(ship.y)}
fuel: ${Math.floor(fuel)}
aceleration: ${ship.spd}

`)



if (debugMode){

  
 
debug.hudMsg(debug.x+400,debug.y,"white","20px DePixel",
`mouse.x: ${mouse.x}
 mouse.y: ${mouse.y} 
 click: ${click} 
 test: ${test}
 pointActive: ${pointActive}
 point.x: ${point.x}
 point.y: ${point.y}
 point.collidebolean: ${point.collideBolean}
 ship.collidebolean: ${ship.collideBolean}
 ship.spd: ${ship.spd}
 
  
  `)
}
/*
txt.x+=txt.spd
txt.hudMsg(txt.x,txt.y,"gray","100px DePixel ","Game Engine")
*/
  



};
game();