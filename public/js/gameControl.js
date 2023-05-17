import {shipCollidePoint, shipCollideStation, localSpdCollideMouse,
                  stationMask, mouseCollideStation, mouseCollideLocalSpdBtn,
                  placaSolarBtnCollideMouse, fuelBtnCollideMouse, dockBtnCollideMouse,
                  engineBtnCollideMouse, pointCollideShip, ship,localSpdBtn, station, placaSolarBtn, fuelBtn,
                  dockBtn, engineBtn, point, hudControlBtn, pointActive, hudControl, dockable, dock, localSpd,
                  navigation, cockpit, space, logisticControl, logisticControlBol, engine, engineSpd, 
                  fuel, fuelcharge, barraFuel, placaSolar, reator, barrareator, monitorStatus1, monitorStatus2,mouse,
                   click,dis, rooms    
                             }from './globalVar.js' 

const GameControl=()=>{

                  if(hudControl[0]||hudControlBtn.collideBolean){
                                    pointActive[0]=false
                                  }
                                
                                if(hudControlBtn.collideBolean&&click[0]&&!hudControl[0]){
                                        hudControl[0]=true
                                        rooms[0]="cockPitRoom"
                                }else if(hudControlBtn.collideBolean&&click[0]&&hudControl[0]){
                                        hudControl[0]=false
                                        rooms[0]="navigationRoom"
                                };
                                
                                  
}
export default GameControl