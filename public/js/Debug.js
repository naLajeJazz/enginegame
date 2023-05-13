import{debug,debugMode,mouse,click,testi}from './controller.js'

import{shipCollidePoint,
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
                  hudControlBtn,
                  pointActive,
                  hudControl,
                  dockable,
                  dock,
                  localSpd,
                  
                  
}from './script.js'
const Debug=()=>{

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
click: ${click}    
pointActive: ${pointActive}    
hudControl: ${hudControl }       
hudControlcollide: ${hudControlBtn.collideBolean } 
dockable:${dockable}    
dock:${dock} 
dockable:${dockable}    
testi:${testi}`)
debug.hudMsg(debug.x,debug.y+46,"orange","19px DePixel",`
placaSolarcollidebolean:${placaSolarBtnCollideMouse.collideBolean}    
fuelMaskMouse:${fuelBtnCollideMouse.collideBolean}    
enginecollidebolean:${engineBtnCollideMouse.collideBolean}
localSpdMaskMousecollidebolean:${localSpdCollideMouse.collideBolean}    
dockBtnCollideMousecollidebolean:${dockBtnCollideMouse.collideBolean}`)
                                    
point.hudMsg(point.x,point.y-48,"green","18px DePixel",`
point.x: ${point.x}    
point.y: ${point.y}   
shipCollidePoint.collideBolean: ${shipCollidePoint.collideBolean}`)
                                    
mouse.hudMsg(mouse.x,mouse.y,"red","18px DePixel",`
mouse.x: ${mouse.x}    
mouse.y: ${mouse.y}`)
                                    
                                    
////Hud
ship.hudMsg(ship.x,ship.y-64,"green","18px DePixel",`
localSpd: ${localSpd}   
aceleration: ${ship.spd}`)

ship.hudMsg(ship.x,ship.y-32,"green","18px DePixel",`
distancex:${ Math.floor(ship.x-point.x)}   
distancey:${ Math.floor(ship.y-point.y)}   
ship.x:${Math.floor(ship.x) }   
ship.y:${Math.floor(ship.y)}`)
                                    
 }                  
}
export default Debug