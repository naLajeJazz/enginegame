
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

let debug=new Obj(600,0),
    debugMode=false;


let mouse=new Obj(0,0,64,64),
    click=false,
    mouseMask=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);
    
let point=new Obj(mouse.x,mouse.y,16,16,10),
pointActive=false,
pointMask=new Obj(point.x,point.y,point.w,point.h);

let ship=new Obj(400,400,32,32,0.1),
    engine=false,
    placaSolar=false,
    bateria=0,
    cristalEnergy=100,
    shipMask=new Obj(ship.x,ship.y,ship.w,ship.h);

let station= new Obj(600,600,64,64),
    stationMask= new Obj(station.x,station.y,station.w,station.h)


let tela=new Obj(0,0,canvas.width,canvas.height),
barraBateria=new Obj(50,canvas.height-50,25,0),
barraCristal=new Obj(150,canvas.height-50,25,0),
btnPlacaSolar=new Obj(50,canvas.height-200,25,25),
btnEngine=new Obj(150,canvas.height-200,25,25)
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
                  else if (k=="p"){
                                 placaSolar=true
                  }
                  else if (k=="o"){
                        placaSolar=false
                  }
                  else if (k=="x"){
                        telaactive=true
                  }
                  else if (k=="z"){
                        telaactive=false
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

///sistema placas solar e bateria
if(placaSolar&&bateria<=100){bateria+=0.1;barraBateria.h-=0.1}else{placaSolar=false}
barraCristal.h=-cristalEnergy

///as mascaras de colisao sempre seguem os objetos
shipMask.x=ship.x
shipMask.y=ship.y
stationMask.x=station.x
stationMask.y=station.y
mouseMask.x=mouse.x
mouseMask.y=mouse.y
pointMask.x=point.x
pointMask.y=point.y

//

///pega a posiçao do point
if(pointActive==true){

  point.x=mouse.x
  point.y=mouse.y
}
//

///mouse collitions
ship.collide(mouse.x,mouse.y,mouse.w,mouse.h)   
point.collide(mouse.x,mouse.y,mouse.w,mouse.h)
station.collide(mouse.x,mouse.y,mouse.w,mouse.h)  

///point collitions
shipMask.collide(point.x,point.y,point.w,point.h)  
stationMask.collide(point.x,point.y,point.w,point.h)  
mouseMask.collide(point.x,point.y,point.w,point.h)
 
///
//station.collide(ship.x,ship.y,ship.w,ship.h)

/*
mouse.collide(station.x,station.y,station.w,station.h)  
*/
////draw

ship.DrawCicle(8,0, 2 * Math.PI,"green",0,1)



//station.DrawRect("blue")
//station2.DrawRect("yellow")
//point.DrawRect("green")
point.DrawCicle(2,0, 2 * Math.PI,"green","green")

if(placaSolar){
  btnPlacaSolar.Draw("red",1)

}else{btnPlacaSolar.Draw("red",0.2)}
if (engine){
  btnEngine.Draw("green",1)
}else{btnEngine.Draw("green",0.2)}


if(shipMask.collideBolean){

  
  
  

  //ship.DrawRect("red")
 
  engine=false
}else{
  //ship.DrawRect("green")

  
}
///mover na direçao indicada
if (engine){ cristalEnergy-=0.001}
if(engine&&!placaSolar&&bateria>=1){

  ship.DrawLine(ship.x,ship.y,point.x,point.y,0.4)
 
  if(ship.x<point.x){
   ship.x+=ship.spd
   cristalEnergy-=0.001
   bateria-=0.005
   barraBateria.h+=0.005
  }
  if(ship.x>point.x) {
    ship.x-=ship.spd
    cristalEnergy-=0.001
    bateria-=0.005
    barraBateria.h+=0.005
  } 
  
  if(ship.y>point.y){
   ship.y-=ship.spd
   cristalEnergy-=0.001
   bateria-=0.005
   barraBateria.h+=0.005
  }
  if(ship.y<point.y) {
    ship.y+=ship.spd
    cristalEnergy-=0.001
    bateria-=0.005
    barraBateria.h+=0.005
  } 

 

}

//if(engine){barraBateria.h-=0.005}


  
  
  ///hud sistem
  barraBateria.Draw("red")
  barraBateria.hudMsg(barraBateria.x+50,barraBateria.y,"red","19px DePixel",`${Math.floor(bateria)}%` )
  barraBateria.hudMsg(barraBateria.x,barraBateria.y+16,"red","19px DePixel",`bateria` )
  
  barraCristal.Draw("green")
  barraCristal.hudMsg(barraCristal.x+50,barraCristal.y,"red","19px DePixel",`${Math.floor(cristalEnergy)}%` )
  barraCristal.hudMsg(barraCristal.x,barraCristal.y+16,"red","19px DePixel",`cristal energy` )


  

if (debugMode){
/*
  //mascaras de colisao
  shipMask.DrawRect("red",2)
  stationMask.DrawRect("red",2)
  mouseMask.DrawRect("red",2)
  pointMask.DrawRect("red",2)
 //
*/
debug.hudMsg(debug.x,debug.y+16,"green","19px DePixel",`
mouse.x: ${mouse.x}
mouse.y: ${mouse.y} 
click: ${click}


`)

debug.hudMsg(debug.x,debug.y+64,"white","19px DePixel",`
mouse collides
point.collidebolean: ${point.collideBolean}
ship.collidebolean: ${ship.collideBolean}
station.collidebolean: ${station.collideBolean}

`)
debug.hudMsg(debug.x,debug.y+96,"white","19px DePixel",`
point collides
shipMask.collidebolean: ${shipMask.collideBolean}
stationMask.collidebolean: ${stationMask.collideBolean}
mouseMask.collidebolean: ${mouseMask.collideBolean}


`)
debug.hudMsg(debug.x,debug.y+124,"white","19px DePixel",`
ship collides
statio.collidebolean: ${station.collideBolean}


`)
debug.hudMsg(debug.x,debug.y+154,"white","19px DePixel",`
sistem
placaSolar: ${placaSolar}
bateria: ${Math.floor(bateria)}%

`)

point.hudMsg(point.x,point.y-32,"green","18px DePixel",`
point.x: ${point.x}
point.y: ${point.y}

`)



////Hud
ship.hudMsg(ship.x,ship.y-64,"green","18px DePixel",`engine: ${engine}`)
ship.hudMsg(ship.x,ship.y-32,"green","18px DePixel",`
distancex:${ Math.floor(ship.x-point.x)}
distancey:${ Math.floor(ship.y-point.y)}
ship.x:${Math.floor(ship.x) }
ship.y:${Math.floor(ship.y)}
cristalEnergy: ${Math.floor(cristalEnergy)}%
aceleration: ${ship.spd}
ship.collidebolean: ${ship.collideBolean}

`)

}
/*
txt.x+=txt.spd
txt.hudMsg(txt.x,txt.y,"gray","100px DePixel ","Game Engine")
*/

if (click){mouse.SpriteAnime(mouseImg,0,yIndex+64)}else{mouse.SpriteAnime(mouseImg,0,yIndex)}


};
game();