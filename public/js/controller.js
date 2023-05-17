

import Obj from './obj.js'
import {canvas} from './obj.js'
import{shipCollidePoint, shipCollideStation, localSpdCollideMouse,
  stationMask, mouseCollideStation, mouseCollideLocalSpdBtn,
  placaSolarBtnCollideMouse, fuelBtnCollideMouse, dockBtnCollideMouse,
  engineBtnCollideMouse, pointCollideShip, ship,localSpdBtn, station, placaSolarBtn, fuelBtn,
  dockBtn, engineBtn, point, hudControlBtn, hudControl, dockable, dock, localSpd,
  navigation, cockpit, space, logisticControl, logisticControlBol, engine, engineSpd, 
  fuel, fuelcharge, barraFuel, placaSolar, reator, barrareator, monitorStatus1, 
  monitorStatus2,mouse, pointActive, click, rooms}from './globalVar.js'







  //debug
let debug=new Obj(16,0),
debugMode=false;  
let testi=false;

 
    
    ////controles////

////teclado

window.addEventListener("keyup",()=>{
            
  
                  
},false);

window.addEventListener("keydown",function(event){

  let k= event.key;
             
   if (k=="t"){
  debugMode=true           
  }else if (k=="y"){
  debugMode=false           
  }else if (k=="p"){
    window.print()      
    }else if (k=="1"){
     rooms[0]="oRooms"     
      }
 
  },false);


///mouse
  
canvas.addEventListener('mousemove',function(e){
  mouse.x=e.offsetX;
  mouse.y=e.offsetY;

  
},false);
canvas.addEventListener('mousedown',function(){
  
  //pointActive=true
  testi=true
 
 
},false);
canvas.addEventListener('click',function(){
  click[0]=true
setTimeout(() => {
click[0]=false
}, 12);
 
 
},false);
canvas.addEventListener('mouseup',function(){
  click[0]=false
  //pointActive=false
  testi=false
  
},false);
canvas.addEventListener('mouseover',function(){
  ////
  
},false);
canvas.addEventListener('mousedown',function(){
  pointActive[0]=true
 },false);
          
canvas.addEventListener('mouseup',function(){
 pointActive[0]=false
  },false);

export{
  
debug,
debugMode,



testi
 
}