
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg} from './Img.js'


 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

                      ////Objetos////

//debug
let debug=new Obj(600,0),
    debugMode=false;

//mouse
let mouse=new Obj(0,0,64,64),
    click=false,
    mouseMaskStation=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);
///point  
let point=new Obj(mouse.x,mouse.y,16,16,10),
    pointActive=false;

//ship
let ship=new Obj(400,400,32,32,0.1),
    engine=false,
    placaSolar=false,
    bateria=0,
    barraBateria=new Obj(50,canvas.height-50,25,0),
    btnPlacaSolar=new Obj(50,canvas.height-200,25,25),
    shipMaskpoint=new Obj(ship.x,ship.y,ship.w,ship.h),
    shipMaskStation=new Obj(ship.x,ship.y,ship.w,ship.h);

//station
let station= new Obj(600,600,32,32),
    stationMask= new Obj(station.x,station.y,station.w,station.h);


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
               


///anima Sprite
let xIndex=0
let yIndex=0
let animaSpd=8//tem que ser multiplos de 2
setInterval(()=>xIndex+=64,1000/animaSpd);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndex=0,4000/animaSpd);//quando chegar na ultima imagem volta pra primeira



                  /////Game//////

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);


                  /////Game Updates/////

///sistema placas solar e bateria
if(placaSolar&&bateria<=100){bateria+=0.1;barraBateria.h-=0.1}else{placaSolar=false}


///as mascaras de colisões sempre seguem os objetos

//ship collitions masks
shipMaskpoint.x=ship.x
shipMaskpoint.y=ship.y
shipMaskStation.x=ship.x
shipMaskStation.y=ship.y

//station collitions masks
stationMask.x=station.x
stationMask.y=station.y

//mouse collitions masks
mouseMaskStation.x=mouse.x
mouseMaskStation.y=mouse.y


///Colisões
//ship collitions check
shipMaskpoint.collide(point.x,point.y,point.w,point.h)
shipMaskStation.collide(station.x,station.y,station.w,station.h)

//mouse collitions check
mouseMaskStation.collide(station.x,station.y,station.w,station.h)


///pega a posiçao do point
if(pointActive){

  point.x=mouse.x
  point.y=mouse.y
}


//executa interação da colisão ship/point
if(shipMaskpoint.collideBolean){
  engine=false
}

//executa interação da colisão ship/station
if(shipMaskStation.collideBolean||mouseMaskStation.collideBolean){
  
  station.hudMsg(station.x+84,station.y+32,"blue","19px DePixel","Station 1")
}

///mover na direçao indicada

if(engine&&!placaSolar&&bateria>=1){

  ship.DrawLine(ship.x+16,ship.y+16,point.x+8,point.y+8,"green",1,0.5)
 
  if(ship.x<point.x){
   ship.x+=ship.spd
  
   bateria-=0.005
   barraBateria.h+=0.005
  }
  if(ship.x>point.x) {
    ship.x-=ship.spd
    
    bateria-=0.005
    barraBateria.h+=0.005
  } 
  
  if(ship.y>point.y){
   ship.y-=ship.spd
  
   bateria-=0.005
   barraBateria.h+=0.005
  }
  if(ship.y<point.y) {
    ship.y+=ship.spd
   
    bateria-=0.005
    barraBateria.h+=0.005
  } 

}

                        ////Draw


station.DrawRect("blue")
ship.DrawRect("green")
ship.hudMsg(ship.x+54,ship.y+32,"green","19px DePixel","ship")

point.DrawRect("green")


if(placaSolar){
  btnPlacaSolar.Draw("green",1);
  ship.DrawRect("green",4)

}else{btnPlacaSolar.Draw("green",0.2)}


  
  ///hud sistem
  barraBateria.Draw("green")
 
  barraBateria.hudMsg(barraBateria.x+8,barraBateria.y+16,"green","19px DePixel",`bateria ${Math.floor(bateria)}%` )
  
  
  

if (debugMode){
/*
  //mascaras de colisao
  shipMaskpoint.DrawRect("red",2)
  stationMask.DrawRect("red",2)
  mouseMaskStation.DrawRect("red",2)
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
shipMaskpoint.collidebolean: ${shipMaskpoint.collideBolean}
stationMask.collidebolean: ${stationMask.collideBolean}
mouseMaskStation.collidebolean: ${mouseMaskStation.collideBolean}


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