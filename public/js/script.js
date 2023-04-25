
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
    mouseMaskStation=new Obj(mouse.x,mouse.y,mouse.w,mouse.h),
    mouseMasklocalSpdBtn=new Obj(mouse.x,mouse.y,mouse.w,mouse.h)
    ;
///point  
let point=new Obj(mouse.x,mouse.y,8,8,10),
    pointActive=false;

//ship
let ship=new Obj(400,400,32,32,0.07),
    engine=false,
    fuel=0,
    fuelcharge=false,
    fuelBtn=new Obj(250,canvas.height-116,32,32),
    barraFuel=new Obj(130,canvas.height-50,25,0),
    fuelBtnMaskMouse=new Obj(fuelBtn.x,fuelBtn.y,fuelBtn.w,fuelBtn.h),
    taxaAquecimentoEngine=0,
    engineaquecido=false,
    localSpdBtn=new Obj(500,canvas.height-116,32,32),
    localSpdBtnMaskmouse=new Obj(localSpdBtn.x,localSpdBtn.y,localSpdBtn.w,localSpdBtn.h),
    localSpd=false,
    placaSolar=false,
    reator=0,
    barrareator=new Obj(50,canvas.height-50,25,0),
    placaSolarBtn=new Obj(350,canvas.height-116,32,32),
    placaSolarBtnMaskMouse=new Obj(placaSolarBtn.x,placaSolarBtn.y,placaSolarBtn.w,placaSolarBtn.h),
    shipMaskpoint=new Obj(ship.x,ship.y,ship.w,ship.h),
    shipMaskStation=new Obj(ship.x,ship.y,ship.w,ship.h),
    dockable=false,
    dock=false,
    dockBtn=new Obj(600,canvas.height-116,32,32),
    dockBtnMaskMouse=new Obj(dockBtn.x,dockBtn.y,dockBtn.w,dockBtn.h);

//station
let station= new Obj(600,300,32,32),
    stationMask= new Obj(station.x,station.y,station.w,station.h);


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
                  else if (k=="f"){
                             localSpd=true        
                  }
                  else if (k=="g"){
                                 localSpd=false     
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





//executa interação da colisão ship/point
if(shipMaskpoint.collideBolean){
  
  localSpd=false
}

//executa interação da colisão ship/station
if(shipMaskStation.collideBolean||mouseMaskStation.collideBolean){
  
  station.hudMsg(station.x+84,station.y+32,"green","19px DePixel","Station 1")
}

//
if(shipMaskStation.collideBolean){dockable=true;}else{dockable=false;}


                  
///sistema placas solar e reator
if(placaSolar&&reator<=100){

  reator+=0.1;
  barrareator.h-=0.1;
}else{
  placaSolar=false;
 
}
                  
///sistema fuel charge
if(fuelcharge&&fuel<=100&&shipMaskStation.collideBolean){

  fuel+=0.1;
  barraFuel.h-=0.1;
}else{
  fuelcharge=false;
 
}




///aquecimento engine










/*
if(!engine&&taxaAquecimentoEngine>=100){
  engineaquecido=true;
 
 }
if(engineaquecido){
 taxaAquecimentoEngine-=0.1;
 barraFuel.h+=0.1;
}


if (engine&&taxaAquecimentoEngine<=100){
  taxaAquecimentoEngine+=0.1;
    barraFuel.h-=0.1;
    
  }else{
    engine=false; 
  }
  */
  

///mover na direçao indicada

if(localSpd&&!placaSolar&&reator>=1){
  ship.DrawLine(ship.x+16,ship.y+16,point.x+4,point.y+4,"green",1,0.4)
 
  if(ship.x<point.x){
    //ship.DrawLine(ship.x+16,ship.y+16,point.x+8,point.y+8,"green",1,0.2)
   ship.x+=ship.spd
  
   barrareator.h+=0.005;
   reator-=0.005;
  
  }
  if(ship.x>point.x) {
    //ship.DrawLine(ship.x+16,ship.y+16,point.x+8,point.y+8,"green",1,0.2)
    ship.x-=ship.spd
 
    barrareator.h+=0.005;
    reator-=0.005;
  } 
  
  if(ship.y>point.y){
   // ship.DrawLine(ship.x+16,ship.y+16,point.x+8,point.y+8,"green",1,0.2)
   ship.y-=ship.spd
  
   
   barrareator.h+=0.005;
   reator-=0.005;
  }
  if(ship.y<point.y) {
    //ship.DrawLine(ship.x+16,ship.y+16,point.x+8,point.y+8,"green",1,0.2)
    ship.y+=ship.spd
   
    barrareator.h+=0.005;
    reator-=0.005;
  } 

}else{localSpd=false}


///desliga botao engine
if(localSpdBtnMaskmouse.collideBolean&&click&&localSpd){
  pointActive=false
  localSpd=false;
  //localSpdBtn.DrawRect("green",0.1);
  localSpdBtn.DrawRect("green",0.5)
  
}else
//liga botao engine
if(localSpdBtnMaskmouse.collideBolean&&click){
  pointActive=false
  localSpd=true;
  localSpdBtn.Draw("green");
  
}

if(localSpd){
  localSpdBtn.Draw("green")
}



///desliga placa solar
if(placaSolarBtnMaskMouse.collideBolean&&click&&placaSolar){
  pointActive=false
  placaSolar=false;
  //localSpdBtn.DrawRect("green",0.1);
  //localSpdBtn.DrawRect("green",0.5)
  
}else
//liga placa solar
if(placaSolarBtnMaskMouse.collideBolean&&click){
  pointActive=false
  placaSolar=true;
  //localSpdBtn.Draw("green");
  
}
///desliga fuel charge
if(fuelBtnMaskMouse.collideBolean&&click&&fuelcharge){
  pointActive=false
  fuelcharge=false;
  //localSpdBtn.DrawRect("green",0.1);
  //localSpdBtn.DrawRect("green",0.5)
  
}else
//liga fuel charge
if(fuelBtnMaskMouse.collideBolean&&click){
  pointActive=false
  fuelcharge=true;
  //localSpdBtn.Draw("green");
  
}


///desliga dock
if(dockBtnMaskMouse.collideBolean&&click&&dockable){
  pointActive=false
  dock=false;
  //localSpdBtn.DrawRect("green",0.1);
  //localSpdBtn.DrawRect("green",0.5)
  
}else
//liga dock
if(dockBtnMaskMouse.collideBolean&&click){
  pointActive=false
  dock=true;
  //localSpdBtn.Draw("green");
  
}



/*
if(localSpd){
  localSpdBtn.Draw("green")
}
*/





  ///pega a posiçao do point
  if(pointActive){
    ship.DrawLine(ship.x+16,ship.y+16,point.x+4,point.y+4,"green",1,0.6)
    point.x=mouse.x
    point.y=mouse.y
  }

                        ////Draw

                        

station.DrawRect("green")
ship.DrawRect("green")
ship.hudMsg(ship.x+54,ship.y+32,"green","19px DePixel","ship")
localSpdBtn.DrawRect("green",0.5)
localSpdBtn.hudMsg(localSpdBtn.x+32,localSpdBtn.y+84,"green","19px DePixel","localSpd")
placaSolarBtn.hudMsg(placaSolarBtn.x+32,placaSolarBtn.y+84,"green","19px DePixel","placa solar")
point.DrawRect("green")
dockBtn.DrawRect("green")
dockBtn.hudMsg(dockBtn.x+32,dockBtn.y+84,"green","19px DePixel","dock")



if(placaSolar){
  placaSolarBtn.Draw("green",1);
 

}else{placaSolarBtn.DrawRect("green",0.5)}


  
if(fuelcharge){
  fuelBtn.Draw("orange",1);
  

}else{fuelBtn.DrawRect("orange",0.5)}


  
  ///hud sistem
  barrareator.Draw("green")
 
 

  if(reator>0){
    barrareator.hudMsg(barrareator.x+8,barrareator.y+16,"green","19px DePixel",`reator ${Math.floor(reator)}%` )
  } if(reator<1) {
    barrareator.hudMsg(barrareator.x+8,barrareator.y+16,"red","19px DePixel",`reator ${Math.floor(reator)}%` )
  }



  fuelBtn.hudMsg(fuelBtn.x+32,fuelBtn.y+84,"green","19px DePixel","charge fuel")

  barraFuel.Draw("orange")
  if(fuel>0){
    barraFuel.hudMsg(barraFuel.x+8,barraFuel.y+16,"green","19px DePixel",`fuel ${Math.floor(fuel)}%` )
  } if(fuel<1){
    barraFuel.hudMsg(barraFuel.x+8,barraFuel.y+16,"red","19px DePixel",`fuel ${Math.floor(fuel)}%` )
  }




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
pointActive: ${pointActive}
taxaAquecimentoEngine: ${Math.floor(taxaAquecimentoEngine) }
angineaquecido: ${engineaquecido }


`)
debug.hudMsg(debug.x,debug.y+32,"green","19px DePixel",`
fuelbtnMaskMouse:${fuelBtnMaskMouse.collideBolean}
dockable:${dockable}
dock:${dock}

`)

point.hudMsg(point.x,point.y-32,"green","18px DePixel",`
point.x: ${point.x}
point.y: ${point.y}

`)



////Hud
ship.hudMsg(ship.x,ship.y-64,"green","18px DePixel",`

localSpd: ${localSpd}
aceleration: ${ship.spd}`
)
ship.hudMsg(ship.x,ship.y-32,"green","18px DePixel",`
distancex:${ Math.floor(ship.x-point.x)}
distancey:${ Math.floor(ship.y-point.y)}
ship.x:${Math.floor(ship.x) }
ship.y:${Math.floor(ship.y)}

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