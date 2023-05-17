
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg,btnImg,btn2Img,shipImg,stationImg,pointImg,
cockpitImg,spaceImg,monitorImg,hudControlBtnImg} from './Img.js'

       


import Collisions from './Collisions.js'

import{xIndex,yIndex,xIndexShip,yIndexShip,xIndexTile,yIndexTile,
xIndexStation,yIndexStation,xIndexPoint,yIndexPoint}from './Animation.js'

import Debug from './Debug.js'
import Sistemas from './sistemas.js'

 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

                      ////Objetos////
import {shipCollidePoint, shipCollideStation, localSpdCollideMouse,
  stationMask, mouseCollideStation, mouseCollideLocalSpdBtn,
  placaSolarBtnCollideMouse, fuelBtnCollideMouse, dockBtnCollideMouse,
  engineBtnCollideMouse, pointCollideShip, ship,localSpdBtn, station, placaSolarBtn, fuelBtn,
  dockBtn, engineBtn, point, hudControlBtn, pointActive, hudControl, dockable, dock, localSpd,
  navigation, cockpit, space, logisticControl, logisticControlBol, engine, engineSpd, 
  fuel, fuelcharge, barraFuel, placaSolar, reator, barrareator, monitorStatus1, monitorStatus2,mouse,
   click,dis, rooms    
             }from './globalVar.js' 
import oRoom from './Rooms/0Rooms.js'
import CockpitRoom from './Rooms/cokpitRoom.js'
  

                    /////Game//////

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);


                  /////Game Updates/////

Collisions();  
  
Sistemas();

if(rooms[0]=="oRooms") {
  oRoom();
} 



if(hudControlBtn.collideBolean&&click[0]&&!hudControl[0]){
hudControl[0]=true
}else if(hudControlBtn.collideBolean&&click[0]&&hudControl[0]){
hudControl[0]=false
}
if(hudControl[0]){
hudControlBtn.y=canvas.height-canvas.height+16
}else{
hudControlBtn.y=canvas.height-74
hudControlBtn.SpriteAnime(hudControlBtnImg,0,yIndex+64,hudControlBtn.w,hudControlBtn.h)
}


//////////////////

if(hudControl[0]){
  CockpitRoom();

}


Debug();
     
if (click[0]){
mouse.SpriteAnime(mouseImg,0,yIndex+64,mouse.w,mouse.h)
}else{
mouse.SpriteAnime(mouseImg,0,yIndex,mouse.w,mouse.h)}
//
if(logisticControlBol){
logisticControl.DrawRect("green",2)
}

};game();

export{shipCollidePoint,shipCollideStation,localSpdCollideMouse,stationMask,mouseCollideStation,
       mouseCollideLocalSpdBtn,placaSolarBtnCollideMouse,fuelBtnCollideMouse,dockBtnCollideMouse,
       engineBtnCollideMouse,pointCollideShip,ship,localSpdBtn,station,placaSolarBtn,fuelBtn,
       dockBtn,engineBtn,point,hudControlBtn     
}