import {shipCollidePoint, shipCollideStation, localSpdCollideMouse,
    stationMask, mouseCollideStation, mouseCollideLocalSpdBtn,
    placaSolarBtnCollideMouse, fuelBtnCollideMouse, dockBtnCollideMouse,
    engineBtnCollideMouse, pointCollideShip, ship,localSpdBtn, station, placaSolarBtn, fuelBtn,
    dockBtn, engineBtn, point, hudControlBtn, pointActive, hudControl, dockable, dock, localSpd,
    navigation, cockpit, space, logisticControl, logisticControlBol, engine, engineSpd, 
    fuel, fuelcharge, barraFuel, placaSolar, reator, barrareator, monitorStatus1, monitorStatus2,mouse,
     click,dis, rooms    
               }from './globalVar.js' 

///anima Sprite
let xIndex=0
let yIndex=0
let animaSpd=8//tem que ser multiplos de 2
setInterval(()=>xIndex+=64,1000/animaSpd);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndex=0,4000/animaSpd);//quando chegar na ultima imagem volta pra primeira



///anima Sprite
let xIndexPoint=0
let yIndexPoint=0
let animaSpdPoint=0//tem que ser multiplos de 2
setInterval(()=>xIndexPoint+=point.w,1000/animaSpdPoint);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndexPoint=0,2000/animaSpdPoint);//quando chegar na ultima imagem volta pra primeira

///anima Sprite
let xIndexShip=0
let yIndexShip=0
let animaSpdShip=4//tem que ser multiplos de 2
setInterval(()=>xIndexShip+=ship.w,1000/animaSpdShip);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndexShip=0,2000/animaSpdShip);//quando chegar na ultima imagem volta pra primeira

///anima Sprite
let xIndexStation=0
let yIndexStation=0
let animaSpdStation=1//tem que ser multiplos de 2
setInterval(()=>xIndexStation+=station.w,1000/animaSpdStation);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>xIndexStation=0,2000/animaSpdStation);//quando chegar na ultima imagem volta pra primeira

///anima Sprite
let xIndexTile=0
let yIndexTile=0
let animaSpdTile=4//tem que ser multiplos de 2
setInterval(()=>yIndexTile+=300,1000/animaSpdTile);//a cada segundo pula 64 px na imagem, quatro frames na horizontal
setInterval(()=>yIndexTile=0,4000/animaSpdTile);//quando chegar na ultima imagem volta pra primeira

export{xIndex,
       yIndex,
       xIndexShip,
       yIndexShip,
       xIndexTile,
       yIndexTile,
       xIndexStation,
       yIndexStation,
       xIndexPoint,
       yIndexPoint


           }