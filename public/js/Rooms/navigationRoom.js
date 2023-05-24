import {canvas} from '../obj.js'


import{mouseImg,btnImg,btn2Img,shipImg,stationImg,pointImg,
                  cockpitImg,spaceImg,monitorImg,hudControlBtnImg} from '../Img.js'

                  import{xIndex,yIndex,xIndexShip,yIndexShip,xIndexTile,yIndexTile,
                                    xIndexStation,yIndexStation,xIndexPoint,yIndexPoint}from '../Animation.js'                  

import {shipCollidePoint, shipCollideStation, localSpdCollideMouse,
                  stationMask, mouseCollideStation, mouseCollideLocalSpdBtn,
                  placaSolarBtnCollideMouse, fuelBtnCollideMouse, dockBtnCollideMouse,
                  engineBtnCollideMouse, pointCollideShip, ship,localSpdBtn, station, placaSolarBtn, fuelBtn,
                  dockBtn, engineBtn, point, hudControlBtn, pointActive, hudControl, dockable, dock, localSpd,
                  navigation, cockpit, space, logisticControl, logisticControlBol, engine, engineSpd, 
                  fuel, fuelcharge, barraFuel, placaSolar, reator, barrareator, monitorStatus1, monitorStatus2,mouse, click, rooms    
                             }from '../globalVar.js' 


const NavigationRoom=()=>{
                  
                           
                      
 ///pega a posiçao do point
if(pointActive[0]&&rooms[0]=="navigationRoom"){
                  ship.DrawLine(ship.x+16,ship.y+16,point.x+16,point.y+16,"green",1,0.6)
                  point.x=mouse.x
                  point.y=mouse.y
                  }
//executa interação da colisão ship/point
if(shipCollidePoint.collideBolean){
                  localSpd[0]=false;
                  engine[0]=false;
                  }


                  navigation.Sprite(monitorImg,canvas.width,canvas.height); 
                  
                  point.SpriteAnime(pointImg,xIndexPoint,yIndexPoint,point.w,point.h);
                  
                  station.hudMsg(station.x+32,station.y+32,"green","16px DePixel","Station 1",0.7);
                  station.SpriteAnime(stationImg,xIndexStation,yIndexStation,station.w,station.h);
                  
                  ship.hudMsg(ship.x+32,ship.y+32,"green","16px DePixel","ship",0.7);
                  ship.SpriteAnime(shipImg,xIndexShip,yIndexShip,ship.w,ship.h)
                  ship.DrawLine(ship.x+16,ship.y+16,point.x+16,point.y+16,"green",1,0.6)
                  hudControlBtn.y=canvas.height-74
                  hudControlBtn.SpriteAnime(hudControlBtnImg,0,yIndex+64,hudControlBtn.w,hudControlBtn.h)
} 
export default NavigationRoom                               