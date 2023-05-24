import{shipCollidePoint, shipCollideStation, localSpdCollideMouse,
       stationMask, mouseCollideStation, mouseCollideLocalSpdBtn,
       placaSolarBtnCollideMouse, fuelBtnCollideMouse, dockBtnCollideMouse,
       engineBtnCollideMouse, pointCollideShip, ship,localSpdBtn, station, placaSolarBtn, fuelBtn,
       dockBtn, engineBtn, point, hudControlBtn, pointActive, hudControl, dockable, dock, localSpd,
       navigation, cockpit, space, logisticControl, logisticControlBol, engine, engineSpd, 
       fuel, fuelcharge, barraFuel, placaSolar, reator, barrareator, 
       monitorStatus1, monitorStatus2, mouse, btn, loteBtn, mouseCollideBtn
                  }from './globalVar.js'



const Collisions= ()=>{
///as mascaras de colisões sempre seguem os objetos

//ship collitions masks
shipCollidePoint.x=ship.x
shipCollidePoint.y=ship.y
shipCollideStation.x=ship.x
shipCollideStation.y=ship.y

//localSpdBtn collittions mask
localSpdCollideMouse.x=localSpdBtn.x
localSpdCollideMouse.y=localSpdBtn.y

//station collitions masks
stationMask.x=station.x
stationMask.y=station.y

//mouse collitions masks
mouseCollideStation.x=mouse.x
mouseCollideStation.y=mouse.y
mouseCollideLocalSpdBtn.x=mouse.x
mouseCollideLocalSpdBtn.y=mouse.y

//placasolarbtn collitions mask
placaSolarBtnCollideMouse.x=placaSolarBtn.x
placaSolarBtnCollideMouse.y=placaSolarBtn.y

//
fuelBtnCollideMouse.x=fuelBtn.x;
fuelBtnCollideMouse.y=fuelBtn.y;

//
dockBtnCollideMouse.x=dockBtn.x;
dockBtnCollideMouse.y=dockBtn.y;

//
engineBtnCollideMouse.x=engineBtn.x;
engineBtnCollideMouse.y=engineBtn.y;
//
pointCollideShip.x=point.x;
pointCollideShip.y=point.y;
//
mouseCollideBtn.x=mouse.x;
mouseCollideBtn.y=mouse.y;

///Colisões

//
shipCollidePoint.collide(point.x,point.y,point.w,point.h)
//
shipCollideStation.collide(station.x,station.y,station.w,station.h)
//
mouseCollideStation.collide(station.x,station.y,station.w,station.h)
//
mouseCollideLocalSpdBtn.collide(localSpdBtn.x,localSpdBtn.y,localSpdBtn.w,localSpdBtn.h)
//
localSpdCollideMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
placaSolarBtnCollideMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
fuelBtnCollideMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
dockBtnCollideMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
engineBtnCollideMouse.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
hudControlBtn.collide(mouse.x,mouse.y,mouse.w,mouse.h)
//
pointCollideShip.collide(ship.x,ship.y,ship.w,ship.h)
//
mouseCollideBtn.collide(btn.x,btn.y,btn.w,btn.h)
//
for(let i=0;i<loteBtn;i++){
       btn[i].collide(mouse.x,mouse.y,mouse.w,mouse.h)
       
     };

};

export default Collisions
