
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg,btnImg,shipImg,stationImg,pointImg,spaceImg,cockpitImg,monitorImg} from './Img.js'


 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

                      ////Objetos////


let space=new Obj(0,0,canvas.width,canvas.height),
    cockpit=new Obj(0,0,canvas.width,canvas.height),
    monitor=new Obj(64,460,364,300);
//debug
let debug=new Obj(600,0),
    debugMode=false;

//mouse
let mouse=new Obj(0,0,64,64),
    click=false,
    mouseMaskStation=new Obj(mouse.x,mouse.y,mouse.w,mouse.h),
    mouseMasklocalSpdBtn=new Obj(mouse.x,mouse.y,mouse.w,mouse.h)
    ;


//ship
let ship=new Obj(560,300,32,32,0.05),
    hudControl=true,
    logisticControl=new Obj(900,100,400,500),
    logisticControlBol=false,
    engine=false,
    engineBtn=new Obj(cockpit.x+700,cockpit.h/2,64,64),
    engineBtnMaskMouse=new Obj(engineBtn.x,engineBtn.y,engineBtn.w,engineBtn.h),
    engineSpd=0.2,
    fuel=0,
    fuelcharge=false,
    fuelBtn=new Obj(cockpit.x+550,cockpit.h/2,64,64),
    barraFuel=new Obj(300,canvas.height-76,48,0),
    fuelBtnMaskMouse=new Obj(fuelBtn.x,fuelBtn.y,fuelBtn.w,fuelBtn.h),
    engineaquecido=false,
    localSpdBtn=new Obj(cockpit.x+800,cockpit.h/2,64,64),
    localSpdBtnMaskmouse=new Obj(localSpdBtn.x,localSpdBtn.y,localSpdBtn.w,localSpdBtn.h),
    localSpd=false,
    placaSolar=false,
    reator=0,
    barrareator=new Obj(cockpit.x+232,cockpit.h-76,48,0),
    placaSolarBtn=new Obj(cockpit.x+450,cockpit.h/2,64,64),
    placaSolarBtnMaskMouse=new Obj(placaSolarBtn.x,placaSolarBtn.y,placaSolarBtn.w,placaSolarBtn.h),
    shipMaskpoint=new Obj(ship.x,ship.y,ship.w,ship.h),
    shipMaskStation=new Obj(ship.x,ship.y,ship.w,ship.h),
    dockable=false,
    dock=false,
    dockBtn=new Obj(cockpit.x+950,cockpit.h/2,64,64),
    dockBtnMaskMouse=new Obj(dockBtn.x,dockBtn.y,dockBtn.w,dockBtn.h);

///point  
let point=new Obj(ship.x,ship.y,32,32),
    pointActive=false;

//station
let station= new Obj(600,300,32,32),
    stationMask= new Obj(station.x,station.y,station.w,station.h);



let btnTest=new Obj(100,100,64,64),btnTestMaskMouse=new Obj(100,100,64,64),btnTestBol=false;

                    ////controles////

////teclado

window.addEventListener("keyup",()=>{
                 test=false;
                 
                  
                },false);

window.addEventListener("keydown",function(event){

                  let k= event.key;
                             
                  if (k == "d" ){
                                         
                 dock=true

                  }else if(k =="a" ){

                  dock=false
                                        
                  }else if (k=="w"){

                  test=true

                  }else if (k=="s"){

                  test=true

                  }else if (k=="t"){
                  debugMode=true           
                  }else if (k=="y"){
                  debugMode=false           
                  }
                  else if (k=="b"){
                             localSpd=true        
                  }
                  else if (k=="n"){
                                 localSpd=false     
                  }
                  else if (k=="e"){
                                 ship.spd+=0.1    
                  }
                  else if (k=="q"){
                                ship.spd-=0.1   
                  }
                  else if (k=="h"){
                                 placaSolar=true
                  }
                  else if (k=="j"){
                        placaSolar=false
                  }
                  else if (k=="z"){
                        hudControl=true
                  }
                  else if (k=="x"){
                        hudControl=false
                  }
                  else if (k=="c"){
                        engine=true
                  }
                  else if (k=="v"){
                        engine=false
                  }
                  else if (k=="f"){
                        fuelcharge=true
                  }
                
                  else if (k=="l"){
                        logisticControlBol=true
                  }
                  else if (k=="ç"){
                    logisticControlBol=false
                  }
                
                  },false);


///mouse
                  
canvas.addEventListener('mousemove',function(e){
                  mouse.x=e.offsetX;
                  mouse.y=e.offsetY;

                  
              },false);
canvas.addEventListener('mousedown',function(){
                  
                  pointActive=true
                 
                 
              },false);
canvas.addEventListener('click',function(){
                  click=true
             setTimeout(() => {
              click=false
             }, 10);
                 
                 
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
btnTestMaskMouse.x=btnTest.x;
btnTestMaskMouse.y=btnTest.y;


///Colisões
//ship collitions check
shipMaskpoint.collide(point.x,point.y,point.w,point.h)
shipMaskStation.collide(station.x,station.y,station.w,station.h)

//mouse collitions check
mouseMaskStation.collide(station.x,station.y,station.w,station.h)
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
btnTestMaskMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)





if(hudControl){


if(placaSolarBtnMaskMouse.collideBolean||
  fuelBtnMaskMouse.collideBolean||fuelBtnMaskMouse.collideBolean||
  engineBtnMaskMouse.collideBolean||localSpdBtnMaskmouse.collideBolean||
  dockBtnMaskMouse.collideBolean){
  pointActive=false
}
}



 ///pega a posiçao do point
 if(pointActive){
  ship.DrawLine(ship.x+16,ship.y+16,point.x+16,point.y+16,"green",1,0.6)
  point.x=mouse.x
  point.y=mouse.y
}
  






//executa interação da colisão ship/point
if(shipMaskpoint.collideBolean&&ship.x==point.x&&ship.y==point.y){
  
  localSpd=false
}

//executa interação da colisão ship/station
if(shipMaskStation.collideBolean||mouseMaskStation.collideBolean){
 
  
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
station.DrawLine(station.x+16,station.y+16,ship.x+16,ship.y+16,"orange",1)

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


 
 

                                     
space.Sprite(monitorImg,canvas.width,canvas.height); 


point.SpriteAnime(pointImg,0,0);


station.hudMsg(station.x+64,station.y+32,"green","16px DePixel","Station 1");
station.SpriteAnime(stationImg,0,0);

ship.hudMsg(ship.x+54,ship.y+32,"green","16px DePixel","ship");
ship.SpriteAnime(shipImg,0,yIndexShip)

ship.DrawLine(ship.x+16,ship.y+16,point.x+16,point.y+16,"green",1,0.6)


if(hudControl){


  cockpit.Sprite(cockpitImg,canvas.width,canvas.height);
  monitor.Sprite(monitorImg,316,290)

 

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
  pointActive=false
  
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
  









if(placaSolar){
  placaSolarBtn.hudMsg(placaSolarBtn.x+32,placaSolarBtn.y+84,"green","14px DePixel",`placa solar:${placaSolar}`)
}else{
  placaSolarBtn.hudMsg(placaSolarBtn.x+32,placaSolarBtn.y+84,"green","14px DePixel",`placa solar:${placaSolar}`)
}
//
if(localSpd){
  localSpdBtn.hudMsg(localSpdBtn.x+32,localSpdBtn.y+84,"green","14px DePixel",`localspd:${localSpd}`)
}else{
  localSpdBtn.hudMsg(localSpdBtn.x+32,localSpdBtn.y+84,"green","14px DePixel",`localspd:${localSpd}`)
}
//
if(dock){
  dockBtn.hudMsg(dockBtn.x+32,dockBtn.y+104,"green","14px DePixel",`dock:${dock}`)
  fuelBtn.hudMsg(fuelBtn.x+32,fuelBtn.y+84,"green","14px DePixel",`fuel pump:${dock}`)
  station.DrawLine(station.x+19,station.y+19,ship.x+19,ship.y+19,"blue",1)
}else{
  dockBtn.hudMsg(dockBtn.x+32,dockBtn.y+104,"green","14px DePixel",`dock:${dock}`)
  fuelBtn.hudMsg(fuelBtn.x+32,fuelBtn.y+84,"green","14px DePixel",`fuel pump:${dock}`)
}
//
if(dockable){
  dockBtn.hudMsg(dockBtn.x+32,dockBtn.y+84,"green","14px DePixel",`dockable:${dockable}`)
}else{
  dockBtn.hudMsg(dockBtn.x+32,dockBtn.y+84,"green","14px DePixel",`dockable:${dockable}`)
}
//
if(engine){
engineBtn.hudMsg(engineBtn.x+32,engineBtn.y+84,"green","14px DePixel",`engine:${engine}`)
}else{
  engineBtn.hudMsg(engineBtn.x+32,engineBtn.y+84,"green","14px DePixel",`engine:${engine}`)
}


  
  ///hud sistem

 
 

  if(reator>0){
    barrareator.hudMsg(barrareator.x+8,barrareator.y+16,"green","16px DePixel",`reator ${Math.floor(reator/2)}%` )
  } if(reator<1) {
    barrareator.hudMsg(barrareator.x+8,barrareator.y+16,"red","16px DePixel",`reator ${Math.floor(reator/2)}%` )
  }


 


  

  barraFuel.Draw("orange",0.5)
  if(fuel>0){
    barraFuel.hudMsg(barraFuel.x+8,barraFuel.y+16,"green","16px DePixel",`fuel ${Math.floor(fuel/2)}%` )
  } if(fuel<1){
    barraFuel.hudMsg(barraFuel.x+8,barraFuel.y+16,"red","16px DePixel",`fuel ${Math.floor(fuel/2)}%` )
  }
  
  barrareator.Draw("green",0.5)
  if(fuelcharge){
    fuelBtn.hudMsg(fuelBtn.x+32,fuelBtn.y+104,"green","14px DePixel",`fuel charge:${fuelcharge}`)
  }else{
    fuelBtn.hudMsg(fuelBtn.x+32,fuelBtn.y+104,"green","14px DePixel",`fuel charge:${fuelcharge}`)
  }


//
if(logisticControlBol){
  logisticControl.DrawRect("green",2)
}

  
}


if (debugMode){
/*
  //mascaras de colisao
  
  stationMask.DrawRect("red",2)
  mouseMaskStation.DrawRect("red",2)
  
 //
*/

point.DrawRect("red",2)
shipMaskpoint.DrawRect("red",2);
mouse.DrawRect("red",2)

debug.hudMsg(debug.x,debug.y+16,"green","19px DePixel",`
mouse.x: ${mouse.x}    
mouse.y: ${mouse.y}     
click: ${click}    
pointActive: ${pointActive}    
hudControl: ${hudControl }    
angineaquecido: ${engineaquecido }    


`)
debug.hudMsg(debug.x,debug.y+38,"green","19px DePixel",`
fuelbtnMaskMouse:${fuelBtnMaskMouse.collideBolean}    
dockable:${dockable}    
dock:${dock}    
enginebtncollidebolean:${engineBtnMaskMouse.collideBolean}    

`)

point.hudMsg(point.x,point.y-48,"green","18px DePixel",`
point.x: ${point.x}    
point.y: ${point.y}   

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

ship.collidebolean: ${ship.collideBolean}   

`)

}

     
if (click){mouse.SpriteAnime(mouseImg,0,yIndex+64)}else{mouse.SpriteAnime(mouseImg,0,yIndex)}

};
game();