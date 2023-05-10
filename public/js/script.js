
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg,
       btnImg,
       shipImg,
       stationImg,
       pointImg,
       cockpitImg,
       spaceImg,
       monitorImg,
       hudControlBtnImg} from './Img.js'

       
import{debug,debugMode,mouse,click,testi}from './controller.js'

import Collisions from './Collisions.js'

 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

                      ////Objetos////


let navigation=new Obj(0,0,canvas.width,canvas.height),
    cockpit=new Obj(0,0,canvas.width,canvas.height),
    space=new Obj(0,0,600,300),
    monitorStatus1=new Obj(64,484,116,164),
    monitorStatus2=new Obj(440,440,490,300),
    hudControlBtn=new Obj(canvas.width/2,canvas.height/2,32,32);


//mouse
let mouseCollideStation=new Obj(mouse.x,mouse.y,mouse.w,mouse.h),
    mouseCollideLocalSpdBtn=new Obj(mouse.x,mouse.y,mouse.w,mouse.h);


    //ship
    let ship=new Obj(560,300,32,32,0.02),
    shipCollidePoint=new Obj(ship.x,ship.y,ship.w,ship.h),
    shipCollideStation=new Obj(ship.x,ship.y,ship.w,ship.h),
    hudControl=true,
    logisticControl=new Obj(900,100,400,500),
    logisticControlBol=false,
    engine=false,
    engineBtn=new Obj(monitorStatus2.x+116,monitorStatus2.h+82,32,32),
    engineBtnCollideMouse=new Obj(engineBtn.x,engineBtn.y,engineBtn.w,engineBtn.h),
    engineSpd=0.07,
    fuel=0,
    fuelcharge=false,
    barraFuel=new Obj(monitorStatus1.x+70,monitorStatus1.h+448,32,0),
    fuelBtn=new Obj(monitorStatus1.x+70,monitorStatus1.h+500,32,32),
    fuelBtnCollideMouse=new Obj(fuelBtn.x,fuelBtn.y,fuelBtn.w,fuelBtn.h),
    localSpdBtn=new Obj(monitorStatus2.x+48,monitorStatus2.h+82,32,32),
    localSpdCollideMouse=new Obj(localSpdBtn.x,localSpdBtn.y,localSpdBtn.w,localSpdBtn.h),
    localSpd=false,
    placaSolar=false,
    reator=0,
    barrareator=new Obj(monitorStatus1.x+12,monitorStatus1.h+448,32,0),
    placaSolarBtn=new Obj(monitorStatus1.x+12,monitorStatus1.h+500,32,32),
    placaSolarBtnCollideMouse=new Obj(placaSolarBtn.x,placaSolarBtn.y,placaSolarBtn.w,placaSolarBtn.h),
    dockable=false,
    dock=false,
    dockBtn=new Obj(cockpit.x+950,cockpit.h/2,64,64),
    dockBtnCollideMouse=new Obj(dockBtn.x,dockBtn.y,dockBtn.w,dockBtn.h);

///point  
let point=new Obj(ship.x,ship.y,32,32),
    pointCollideShip=new Obj(point.x,point.y,point.w,point.h),
    pointActive=false;

//station
let station= new Obj(600,300,32,32),
    stationMask= new Obj(station.x,station.y,station.w,station.h);


                    ////controles////
canvas.addEventListener('mousedown',function(){
                  
                  pointActive=true
                 
                 
              },false);
                          
canvas.addEventListener('mouseup',function(){
                 
                  pointActive=false
                  
              },false);
              

///anima Sprite
let xIndex=0
let yIndex=0
let animaSpd=8//tem que ser multiplos de 2
setInterval(()=>xIndex+=64,1000/animaSpd);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndex=0,4000/animaSpd);//quando chegar na ultima imagem volta pra primeira

///anima Sprite
let xIndexShip=0
let yIndexShip=0
let animaSpdShip=4//tem que ser multiplos de 2
setInterval(()=>yIndexShip+=64,1000/animaSpdShip);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>yIndexShip=0,2000/animaSpdShip);//quando chegar na ultima imagem volta pra primeira

///anima Sprite
let xIndexTile=0
let yIndexTile=0
let animaSpdTile=4//tem que ser multiplos de 2
setInterval(()=>yIndexTile+=300,1000/animaSpdTile);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>yIndexTile=0,4000/animaSpdTile);//quando chegar na ultima imagem volta pra primeira


                  /////Game//////

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);


                  /////Game Updates/////

       Collisions();  
       
       
       

if(hudControl||hudControlBtn.collideBolean){
  pointActive=false
}
 ///pega a posiçao do point
 if(pointActive){
  ship.DrawLine(ship.x+16,ship.y+16,point.x+16,point.y+16,"green",1,0.6)
  point.x=mouse.x
  point.y=mouse.y
}
  


//executa interação da colisão ship/point
if(shipCollidePoint.collideBolean){

    localSpd=false;
    engine=false;


}



//dockable
if(shipCollideStation.collideBolean){
  
  dockable=true;
}else{
  dockable=false;
}


                  
///sistema placas solar e reator
if(placaSolar&&reator<=100){
  
  reator+=0.1;
  barrareator.h-=0.1;
}else{
  placaSolar=false;
 
}
                  
///sistema fuel charge
if(fuelcharge&&fuel<=100&&shipCollideStation.collideBolean){


  fuel+=0.1;
  barraFuel.h-=0.1;
}else{
  fuelcharge=false;
 
}



///mover na direçao indicada

if(localSpd&&!placaSolar&&reator>=1||engine&&!fuelcharge&&fuel>=1&&!dock){
  ship.DrawLine(ship.x+16,ship.y+16,point.x+16,point.y+16,"green",1,0.4)
 if(localSpd){
  if(ship.x<point.x){
   
    ship.x+=ship.spd
   
    barrareator.h+=0.005;
    reator-=0.005;
   
   }
   if(ship.x>point.x) {
    
     ship.x-=ship.spd
  
     barrareator.h+=0.005;
     reator-=0.005;
   } 
   
   if(ship.y>point.y){
    
    ship.y-=ship.spd
   
    
    barrareator.h+=0.005;
    reator-=0.005;
   }
   if(ship.y<point.y) {
    
     ship.y+=ship.spd
    
     barrareator.h+=0.005;
     reator-=0.005;
   } 
 }
  if(engine){
    if(ship.x<point.x){
   
      ship.x+=engineSpd
     
      barraFuel.h+=0.03;
      fuel-=0.03;
     
     }
     if(ship.x>point.x) {
      
       ship.x-=engineSpd
    
       barraFuel.h+=0.03;
       fuel-=0.03;
     } 
     
     if(ship.y>point.y){
      
      ship.y-=engineSpd
     
      
      barraFuel.h+=0.03;
      fuel-=0.03;
     }
     if(ship.y<point.y) {
      
       ship.y+=engineSpd
      
       barraFuel.h+=0.03;
       fuel-=0.03;
     } 
  }

}else{
  localSpd=false;
  engine=false
};


let dis=  Math.floor(Math.abs(point.x-ship.x) + Math.abs(point.y-ship.y))    
 

                                     
navigation.Sprite(monitorImg,canvas.width,canvas.height); 


point.SpriteAnime(pointImg,0,0);

station.hudMsg(station.x+32,station.y+32,"green","16px DePixel","Station 1",0.7);
station.SpriteAnime(stationImg,0,0);

ship.hudMsg(ship.x+32,ship.y+32,"green","16px DePixel","ship",0.7);
ship.SpriteAnime(shipImg,0,yIndexShip)
ship.DrawLine(ship.x+16,ship.y+16,point.x+16,point.y+16,"green",1,0.6)





if(hudControlBtn.collideBolean&&click&&!hudControl){
  
  hudControl=true
  
 }else if(hudControlBtn.collideBolean&&click&&hudControl){
  hudControl=false
 }
if(hudControl){
  hudControlBtn.y=canvas.height-canvas.height+16

}else{
  hudControlBtn.y=canvas.height-74
  hudControlBtn.SpriteAnime(hudControlBtnImg,0,yIndex+64)
}




//////////////////



if(hudControl){


 
  
  space.Sprite(spaceImg,canvas.width,canvas.height);
  cockpit.Sprite(cockpitImg,canvas.width,canvas.height);

  
  monitorStatus1.Sprite(monitorImg,monitorStatus1.w,monitorStatus1.h);
  monitorStatus2.Sprite(monitorImg,monitorStatus2.w,monitorStatus2.h);
 

  hudControlBtn.SpriteAnime(hudControlBtnImg,0,yIndex)

 
  let thrustpower=0
  if(localSpd){
    thrustpower=ship.spd
  }else if(engine){
    thrustpower=engineSpd
  }


///desliga botao localspd
if(localSpdCollideMouse.collideBolean&&click&&localSpd){
 localSpd=false;  
}else
//liga botao localspd
if(localSpdCollideMouse.collideBolean&&click&&!dock&&!engine&&reator>=1){
  localSpd=true; 
} 

if(localSpd){
  localSpdBtn.SpriteAnime(btnImg,0,yIndex+64)
}else{
  localSpdBtn.SpriteAnime(btnImg,0,yIndex)
}



///desliga botao engine

if(engineBtnCollideMouse.collideBolean&&click&&engine){
 engine=false;  
}else
//liga botao engine
if(engineBtnCollideMouse.collideBolean&&click&&!dock&&!localSpd&&fuel>=1){
  engine=true; 
}

if(engine){
  engineBtn.SpriteAnime(btnImg,0,yIndex+64)
}else{
  engineBtn.SpriteAnime(btnImg,0,yIndex)
}



///desliga placa solar

if(placaSolarBtnCollideMouse.collideBolean&&click&&placaSolar){
 placaSolar=false; 
}else
//liga placa solar
if(placaSolarBtnCollideMouse.collideBolean&&click){
  placaSolar=true; 
}
if(placaSolar){
  placaSolarBtn.SpriteAnime(btnImg,0,yIndex+64);
}else{
  placaSolarBtn.SpriteAnime(btnImg,0,yIndex);
}


///desliga fuel charge

if(fuelBtnCollideMouse.collideBolean&&click&&fuelcharge){
  pointActive=false
  fuelcharge=false;
  

}else
//liga fuel charge
if(fuelBtnCollideMouse.collideBolean&&click){
  pointActive=false;
  
  if(dock){

    fuelcharge=true;
    
  }
  
}
if(fuelcharge){
  fuelBtn.SpriteAnime(btnImg,0,yIndex+64);
}else{
  fuelBtn.SpriteAnime(btnImg,0,yIndex);
}


///desliga dock

if(dockBtnCollideMouse.collideBolean&&click&&dock&&dockable){
  pointActive=false
  dock=false;
  
  
}else
//liga dock
if(dockBtnCollideMouse.collideBolean&&click&dockable){
  
  pointActive=false
  dock=true;

  
}
if(dock){
  dockBtn.SpriteAnime(btnImg,0,yIndex+64);
}else{
  dockBtn.SpriteAnime(btnImg,0,yIndex);
}


                        ////Draw
  

let monitorFontColor="orange";
let textAlpha=0.7;

monitorStatus2.hudMsg(monitorStatus2.x+140,monitorStatus2.y+64,monitorFontColor,"22px Courier New",`status: normal`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+100,monitorFontColor,"18px Courier New",`dinstance:[${dis}] `,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+228,monitorStatus2.y+100,monitorFontColor,"18px Courier New",`thrust power:[${thrustpower} %]`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+132,monitorFontColor,"18px Courier New",`solar panel charge:[${placaSolar}] reator->${Math.floor(reator)}%`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+146,monitorFontColor,"18px Courier New",`fuel pump charge:[${fuelcharge}] fuel->${Math.floor(fuel)}%`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+196,monitorFontColor,"18px Courier New",`dockable:[${dockable}]`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+210,monitorFontColor,"18px Courier New",`dock:[${dock}]`,textAlpha)




  placaSolarBtn.hudMsg(placaSolarBtn.x,placaSolarBtn.y+44,"green","14px DePixel",`placa solar`,textAlpha)
  localSpdBtn.hudMsg(localSpdBtn.x,localSpdBtn.y+42,"green","14px DePixel",`localspd`,textAlpha)
  fuelBtn.hudMsg(fuelBtn.x,fuelBtn.y+44,"green","14px DePixel",`fuel charger`,textAlpha)
  engineBtn.hudMsg(engineBtn.x,engineBtn.y+42,"green","14px DePixel",`engine`,textAlpha)
  dockBtn.hudMsg(dockBtn.x+16,dockBtn.y+84,"green","14px DePixel",`dock`,textAlpha)


  
  ///hud sistem

  if(reator>0){
    barrareator.hudMsg(barrareator.x,barrareator.y+16,"orange","14px Courier New",`reator`,textAlpha )
  } if(reator<1) {
    barrareator.hudMsg(barrareator.x,barrareator.y+16,"red","14px Courier New",`reator`,textAlpha )
  }



  barraFuel.Draw("orange",0.5)
  if(fuel>0){
    barraFuel.hudMsg(barraFuel.x,barraFuel.y+16,"orange","14px Courier New",`fuel`,textAlpha )
  } if(fuel<1){
    barraFuel.hudMsg(barraFuel.x,barraFuel.y+16,"red","14px Courier New",`fuel`,textAlpha )
  }
  
  barrareator.Draw("green",0.5)
  


  
}


if (debugMode){

  
stationMask.DrawRect("red",2)
mouseCollideStation.DrawRect("red",2) 
point.DrawRect("red",2)
shipCollidePoint.DrawRect("red",2);
mouse.DrawRect("red",2)
placaSolarBtn.DrawRect("red",2)
fuelBtn.DrawRect("red",2)
engineBtn.DrawRect("red",2)
localSpdBtn.DrawRect("red",2)
dockBtn.DrawRect("red",2)
hudControlBtn.DrawRect("red",2)
pointCollideShip.DrawRect("red",2)

debug.hudMsg(debug.x,debug.y+16,"orange","19px DePixel",`
mouse.x: ${mouse.x}    
mouse.y: ${mouse.y}     
click: ${click}    
pointActive: ${pointActive}    
hudControl: ${hudControl }       
hudControlcollide: ${hudControlBtn.collideBolean } 
dockable:${dockable}    
dock:${dock} 
dockable:${dockable}    
testi:${testi}   
   


`)
debug.hudMsg(debug.x,debug.y+46,"orange","19px DePixel",`
placaSolarcollidebolean:${placaSolarBtnCollideMouse.collideBolean}    
fuelMaskMouse:${fuelBtnCollideMouse.collideBolean}    
enginecollidebolean:${engineBtnCollideMouse.collideBolean}
localSpdMaskMousecollidebolean:${localSpdCollideMouse.collideBolean}    
dockBtnCollideMousecollidebolean:${dockBtnCollideMouse.collideBolean}    
   
  
    

`)

point.hudMsg(point.x,point.y-48,"green","18px DePixel",`
point.x: ${point.x}    
point.y: ${point.y}   
shipCollidePoint.collideBolean: ${shipCollidePoint.collideBolean}   

`)


////Hud
ship.hudMsg(ship.x,ship.y-64,"green","18px DePixel",`

localSpd: ${localSpd}   
aceleration: ${ship.spd}   `
)
ship.hudMsg(ship.x,ship.y-32,"green","18px DePixel",`
distancex:${ Math.floor(ship.x-point.x)}   
distancey:${ Math.floor(ship.y-point.y)}   
ship.x:${Math.floor(ship.x) }   
ship.y:${Math.floor(ship.y)}   
distance=${ dis }


`)

}

     
if (click){mouse.SpriteAnime(mouseImg,0,yIndex+64)}else{mouse.SpriteAnime(mouseImg,0,yIndex)}
//
if(logisticControlBol){
  logisticControl.DrawRect("green",2)
}


};
game();

export{
  shipCollidePoint,
       shipCollideStation,
       localSpdCollideMouse,
       stationMask,
       mouseCollideStation,
       mouseCollideLocalSpdBtn,
       placaSolarBtnCollideMouse,
       fuelBtnCollideMouse,
       dockBtnCollideMouse,
       engineBtnCollideMouse,
       pointCollideShip,
       ship,
       localSpdBtn,
       station,
       placaSolarBtn,
       fuelBtn,
       dockBtn,
       engineBtn,
       point,
       hudControlBtn
}