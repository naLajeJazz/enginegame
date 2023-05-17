
import Obj from './obj.js'
import {canvas} from './obj.js'


canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

                      ////Objetos////
                    
                     
let navigation=new Obj(0,0,canvas.width,canvas.height),
    cockpit=new Obj(0,0,canvas.width,canvas.height),
    space=new Obj(0,0,600,300),
    monitorStatus1=new Obj(64,484,116,164),
    monitorStatus2=new Obj(400,200,490,300),
    hudControlBtn=new Obj(canvas.width/2,canvas.height/2,64,64);


//mouse
let mouse=new Obj(0,0,64,64);
let mouseCollideStation=new Obj(mouse.x,mouse.y,mouse.w,mouse.h),
    mouseCollideLocalSpdBtn=new Obj(mouse.x,mouse.y,mouse.w,mouse.h),
    click=[false];


    //ship
    let ship=new Obj(560,300,32,32,0.02),
    shipCollidePoint=new Obj(ship.x,ship.y,ship.w,ship.h),
    shipCollideStation=new Obj(ship.x,ship.y,ship.w,ship.h),
    hudControl=[true],
    logisticControl=new Obj(900,100,400,500),
    logisticControlBol=false,
    engine=[false],
    engineBtn=new Obj(monitorStatus2.x+116,monitorStatus2.h+216,64,64),
    engineBtnCollideMouse=new Obj(engineBtn.x,engineBtn.y,engineBtn.w,engineBtn.h),
    engineSpd=[0.07],
    fuel=[0],
    fuelcharge=[false],
    barraFuel=new Obj(monitorStatus1.x+70,monitorStatus1.h+448,32,0),
    fuelBtn=new Obj(monitorStatus1.x+70,monitorStatus1.h+500,32,32),
    fuelBtnCollideMouse=new Obj(fuelBtn.x,fuelBtn.y,fuelBtn.w,fuelBtn.h),
    localSpdBtn=new Obj(monitorStatus2.x+48,monitorStatus2.h+216,64,64),
    localSpdCollideMouse=new Obj(localSpdBtn.x,localSpdBtn.y,localSpdBtn.w,localSpdBtn.h),
    localSpd=[false],
    placaSolar=[false],
    reator=[0],
    barrareator=new Obj(monitorStatus1.x+12,monitorStatus1.h+448,32,0),
    placaSolarBtn=new Obj(monitorStatus1.x+12,monitorStatus1.h+500,32,32),
    placaSolarBtnCollideMouse=new Obj(placaSolarBtn.x,placaSolarBtn.y,placaSolarBtn.w,placaSolarBtn.h),
    dockable=[false],
    dock=[false],
    dockBtn=new Obj(monitorStatus2.x+300,monitorStatus2.h+216,64,64),
    dockBtnCollideMouse=new Obj(dockBtn.x,dockBtn.y,dockBtn.w,dockBtn.h),
     dis=  [0] ;

///point  
let point=new Obj(ship.x,ship.y,32,32),
    pointCollideShip=new Obj(point.x,point.y,point.w,point.h),
    pointActive=[false];

//station
let station= new Obj(600,300,32,32),
    stationMask= new Obj(station.x,station.y,station.w,station.h);

//rooms
let rooms=["cockPitRoom"];

    export{shipCollidePoint, shipCollideStation, localSpdCollideMouse,
stationMask, mouseCollideStation, mouseCollideLocalSpdBtn,
placaSolarBtnCollideMouse, fuelBtnCollideMouse, dockBtnCollideMouse,
engineBtnCollideMouse, pointCollideShip, ship,localSpdBtn, station, placaSolarBtn, fuelBtn,
dockBtn, engineBtn, point, hudControlBtn, pointActive, hudControl, dockable, dock, localSpd,
navigation, cockpit, space, logisticControl, logisticControlBol, engine, engineSpd, 
fuel, fuelcharge, barraFuel, placaSolar, reator, barrareator, monitorStatus1,
 monitorStatus2, mouse, click,dis, rooms     
           }