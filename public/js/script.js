
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg,
       btnImg,
       shipImg,
       stationImg,
       pointImg,
       cockpitImg,
       monitorImg,
       hudControlBtnImg} from './Img.js'

       
import{debug,debugMode,mouse,click}from './controller.js'


 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

                      ////Objetos////


let navigation=new Obj(0,0,canvas.width,canvas.height),
    cockpit=new Obj(0,0,canvas.width,canvas.height),
    monitorStatus1=new Obj(64,330,216,274),
    monitorStatus2=new Obj(332,330,490,300),
    hudControlBtn=new Obj(canvas.width/2,canvas.height/2,32,32);


//mouse
let 
    
    mouseMaskStation=new Obj(mouse.x,mouse.y,mouse.w,mouse.h),
    mouseMasklocalSpdBtn=new Obj(mouse.x,mouse.y,mouse.w,mouse.h)
    ;


//ship
let ship=new Obj(560,300,32,32,0.02),
    hudControl=true,
    logisticControl=new Obj(900,100,400,500),
    logisticControlBol=false,
    engine=false,
    engineBtn=new Obj(monitorStatus1.x+140,monitorStatus1.h+400,64,64),
    engineBtnMaskMouse=new Obj(engineBtn.x,engineBtn.y,engineBtn.w,engineBtn.h),
    engineSpd=0.07,
    fuel=0,
    fuelcharge=false,
    fuelBtn=new Obj(monitorStatus1.x+140,monitorStatus1.h+340,32,32),
    barraFuel=new Obj(monitorStatus1.x+120,monitorStatus1.h+290,48,0),
    fuelBtnMaskMouse=new Obj(fuelBtn.x,fuelBtn.y,fuelBtn.w,fuelBtn.h),
    localSpdBtn=new Obj(monitorStatus1.x+48,monitorStatus1.h+400,64,64),
    localSpdBtnMaskmouse=new Obj(localSpdBtn.x,localSpdBtn.y,localSpdBtn.w,localSpdBtn.h),
    localSpd=false,
    placaSolar=false,
    reator=0,
    barrareator=new Obj(monitorStatus1.x+48,monitorStatus1.h+290,48,0),
    placaSolarBtn=new Obj(monitorStatus1.x+48,monitorStatus1.h+340,32,32),
    placaSolarBtnMaskMouse=new Obj(placaSolarBtn.x,placaSolarBtn.y,placaSolarBtn.w,placaSolarBtn.h),
    shipMaskpoint=new Obj(ship.x,ship.y,ship.w,ship.h),
    shipMaskStation=new Obj(ship.x,ship.y,ship.w,ship.h),
    dockable=false,
    dock=false,
    dockBtn=new Obj(cockpit.x+950,cockpit.h/2,64,64),
    dockBtnMaskMouse=new Obj(dockBtn.x,dockBtn.y,dockBtn.w,dockBtn.h);

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



                  /////Game//////

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);


                  /////Game Updates/////

                 

///as mascaras de colisões sempre seguem os objetos

//ship collitions masks
shipMaskpoint.x=ship.x
shipMaskpoint.y=ship.y
shipMaskStation.x=ship.x
shipMaskStation.y=ship.y

//localSpdBtn collittions mask
localSpdBtnMaskmouse.x=localSpdBtn.x
localSpdBtnMaskmouse.y=localSpdBtn.y

//station collitions masks
stationMask.x=station.x
stationMask.y=station.y

//mouse collitions masks
mouseMaskStation.x=mouse.x
mouseMaskStation.y=mouse.y
mouseMasklocalSpdBtn.x=mouse.x
mouseMasklocalSpdBtn.y=mouse.y

//placasolarbtn collitions mask
placaSolarBtnMaskMouse.x=placaSolarBtn.x
placaSolarBtnMaskMouse.y=placaSolarBtn.y

//
fuelBtnMaskMouse.x=fuelBtn.x;
fuelBtnMaskMouse.y=fuelBtn.y;

//
dockBtnMaskMouse.x=dockBtn.x;
dockBtnMaskMouse.y=dockBtn.y;

//
engineBtnMaskMouse.x=engineBtn.x;
engineBtnMaskMouse.y=engineBtn.y;
//
pointCollideShip.x=point.x;
pointCollideShip.y=point.y;


///Colisões

//
shipMaskpoint.collide(point.x,point.y,point.w,point.h)
//
shipMaskStation.collide(station.x,station.y,station.w,station.h)
//
mouseMaskStation.collide(station.x,station.y,station.w,station.h)
//
mouseMasklocalSpdBtn.collide(localSpdBtn.x,localSpdBtn.y,localSpdBtn.w,localSpdBtn.h)
//
localSpdBtnMaskmouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
placaSolarBtnMaskMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
fuelBtnMaskMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
dockBtnMaskMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
engineBtnMaskMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
hudControlBtn.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
pointCollideShip.collide(ship.x,ship.y,ship.w,ship.h)

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
if(shipMaskpoint.collideBolean){

    localSpd=false;
    engine=false;


}



//dockable
if(shipMaskStation.collideBolean){
  
  dockable=true;
}else{
  dockable=false;
}


                  
///sistema placas solar e reator
if(placaSolar&&reator<=200){
  
  reator+=0.1;
  barrareator.h-=0.1;
}else{
  placaSolar=false;
 
}
                  
///sistema fuel charge
if(fuelcharge&&fuel<=200&&shipMaskStation.collideBolean){


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

station.hudMsg(station.x+64,station.y+32,"green","16px DePixel","Station 1");
station.SpriteAnime(stationImg,0,0);

ship.hudMsg(ship.x+54,ship.y+32,"green","16px DePixel","ship");
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


 
  
  cockpit.Sprite(cockpitImg,canvas.width,canvas.height);

  
  monitorStatus1.Sprite(monitorImg,monitorStatus1.w,monitorStatus1.h);
  monitorStatus2.Sprite(monitorImg,monitorStatus2.w,monitorStatus2.h);
 
  hudControlBtn.SpriteAnime(hudControlBtnImg,0,yIndex)

 



///desliga botao localspd
if(localSpdBtnMaskmouse.collideBolean&&click&&localSpd){
 localSpd=false;  
}else
//liga botao localspd
if(localSpdBtnMaskmouse.collideBolean&&click&&!dock&&!engine&&reator>=1){
  localSpd=true; 
} 

if(localSpd){
  localSpdBtn.SpriteAnime(btnImg,0,yIndex+64)
}else{
  localSpdBtn.SpriteAnime(btnImg,0,yIndex)
}



///desliga botao engine

if(engineBtnMaskMouse.collideBolean&&click&&engine){
 engine=false;  
}else
//liga botao engine
if(engineBtnMaskMouse.collideBolean&&click&&!dock&&!localSpd&&fuel>=1){
  engine=true; 
}

if(engine){
  engineBtn.SpriteAnime(btnImg,0,yIndex+64)
}else{
  engineBtn.SpriteAnime(btnImg,0,yIndex)
}



///desliga placa solar

if(placaSolarBtnMaskMouse.collideBolean&&click&&placaSolar){
 placaSolar=false; 
}else
//liga placa solar
if(placaSolarBtnMaskMouse.collideBolean&&click){
  placaSolar=true; 
}
if(placaSolar){
  placaSolarBtn.SpriteAnime(btnImg,0,yIndex+64);
}else{
  placaSolarBtn.SpriteAnime(btnImg,0,yIndex);
}


///desliga fuel charge

if(fuelBtnMaskMouse.collideBolean&&click&&fuelcharge){
  pointActive=false
  fuelcharge=false;
  

}else
//liga fuel charge
if(fuelBtnMaskMouse.collideBolean&&click){
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

if(dockBtnMaskMouse.collideBolean&&click&&dock&&dockable){
  pointActive=false
  dock=false;
  
  
}else
//liga dock
if(dockBtnMaskMouse.collideBolean&&click&dockable){
  
  pointActive=false
  dock=true;

  
}
if(dock){
  dockBtn.SpriteAnime(btnImg,0,yIndex+64);
}else{
  dockBtn.SpriteAnime(btnImg,0,yIndex);
}


                        ////Draw
  
let thrustpower=0
if(localSpd){
  thrustpower=ship.spd
}else if(engine){
  thrustpower=engineSpd
}
let monitorFontColor="orange"
monitorStatus2.hudMsg(monitorStatus2.x+140,monitorStatus2.y+64,monitorFontColor,"22px Courier New",`status: normal`)
monitorStatus2.hudMsg(monitorStatus2.x+116,monitorStatus2.y+100,monitorFontColor,"18px Courier New",`dinstance:[${dis}] `)
monitorStatus2.hudMsg(monitorStatus2.x+300,monitorStatus2.y+100,monitorFontColor,"18px Courier New",`thrust power:[${thrustpower} %]`)
monitorStatus2.hudMsg(monitorStatus2.x+238,monitorStatus2.y+132,monitorFontColor,"18px Courier New",`solar panel charge:[${placaSolar}] reator->${Math.floor(reator/2)}%`)
monitorStatus2.hudMsg(monitorStatus2.x+228,monitorStatus2.y+146,monitorFontColor,"18px Courier New",`fuel pump charge:[${fuelcharge}] fuel->${Math.floor(fuel/2)}%`)
monitorStatus2.hudMsg(monitorStatus2.x+132,monitorStatus2.y+196,monitorFontColor,"18px Courier New",`dockable:[${dockable}]`)
monitorStatus2.hudMsg(monitorStatus2.x+132,monitorStatus2.y+210,monitorFontColor,"18px Courier New",`dock:[${dock}]`)




  placaSolarBtn.hudMsg(placaSolarBtn.x+32,placaSolarBtn.y+44,"green","14px DePixel",`placa solar`)
  localSpdBtn.hudMsg(localSpdBtn.x+32,localSpdBtn.y+84,"green","14px DePixel",`localspd`)
  fuelBtn.hudMsg(fuelBtn.x+32,fuelBtn.y+44,"green","14px DePixel",`fuel charger`)
  engineBtn.hudMsg(engineBtn.x+32,engineBtn.y+84,"green","14px DePixel",`engine`)
  dockBtn.hudMsg(dockBtn.x+32,dockBtn.y+84,"green","14px DePixel",`dock`)


  
  ///hud sistem

  if(reator>0){
    barrareator.hudMsg(barrareator.x+28,barrareator.y+16,"orange","14px Courier New",`reator` )
  } if(reator<1) {
    barrareator.hudMsg(barrareator.x+28,barrareator.y+16,"red","14px Courier New",`reator` )
  }



  barraFuel.Draw("orange",0.5)
  if(fuel>0){
    barraFuel.hudMsg(barraFuel.x+38,barraFuel.y+16,"orange","14px Courier New",`fuel` )
  } if(fuel<1){
    barraFuel.hudMsg(barraFuel.x+38,barraFuel.y+16,"red","14px Courier New",`fuel` )
  }
  
  barrareator.Draw("green",0.5)
  


  
}


if (debugMode){

  
stationMask.DrawRect("red",2)
mouseMaskStation.DrawRect("red",2) 
point.DrawRect("red",2)
shipMaskpoint.DrawRect("red",2);
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
   


`)
debug.hudMsg(debug.x,debug.y+38,"orange","19px DePixel",`
placaSolarcollidebolean:${placaSolarBtnMaskMouse.collideBolean}    
fuelMaskMouse:${fuelBtnMaskMouse.collideBolean}    
enginecollidebolean:${engineBtnMaskMouse.collideBolean}
localSpdMaskMousecollidebolean:${localSpdBtnMaskmouse.collideBolean}    
dockBtnmaskMousecollidebolean:${dockBtnMaskMouse.collideBolean}    
dockable:${dockable}    
dock:${dock}    
    

`)

point.hudMsg(point.x,point.y-48,"green","18px DePixel",`
point.x: ${point.x}    
point.y: ${point.y}   
shipMaskpoint.collideBolean: ${shipMaskpoint.collideBolean}   

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

