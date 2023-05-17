
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
import GameControl from './gameControl.js'
import MousePointer from './controller.js'
import NavigationRoom from './Rooms/navigationRoom.js'

                    /////Game//////
  
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);

                  /////Game Updates/////
                 
Collisions();  
  
Sistemas();

GameControl();

if(rooms[0]=="navigationRoom"){
  
  NavigationRoom();
}else if (rooms[0]=="cockPitRoom"){
  CockpitRoom();
}else if (rooms[0]=="oRoom"){
  oRoom();
}

Debug();
MousePointer();

if(logisticControlBol){
logisticControl.DrawRect("green",2)
}

};game();