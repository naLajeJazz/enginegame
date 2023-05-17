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
                  fuel, fuelcharge, barraFuel, placaSolar, reator, barrareator, monitorStatus1, monitorStatus2,
                  mouse, click, rooms,dis    
                             }from '../globalVar.js' 



const CockpitRoom=()=>{


cockpit.Sprite(cockpitImg,canvas.width,canvas.height);

  
monitorStatus1.Sprite(monitorImg,monitorStatus1.w,monitorStatus1.h);
monitorStatus2.Sprite(monitorImg,monitorStatus2.w,monitorStatus2.h);

hudControlBtn.y=canvas.height-canvas.height+16
hudControlBtn.SpriteAnime(hudControlBtnImg,0,yIndex,hudControlBtn.w,hudControlBtn.h)


let thrustpower=0
if(localSpd[0]){
  thrustpower=ship.spd
}else if(engine[0]){
  thrustpower=engineSpd[0]
}


///desliga botao localspd
if(localSpdCollideMouse.collideBolean&&click[0]&&localSpd[0]){
localSpd[0]=false;  
}else
//liga botao localspd
if(localSpdCollideMouse.collideBolean&&click[0]&&!dock[0]&&!engine[0]&&reator[0]>=1){
localSpd[0]=true; 
} 

if(localSpd[0]){
localSpdBtn.SpriteAnime(btn2Img,64,0,localSpdBtn.w,localSpdBtn.h)
}else{
localSpdBtn.SpriteAnime(btn2Img,0,0,localSpdBtn.w,localSpdBtn.h)
}



///desliga botao engine

if(engineBtnCollideMouse.collideBolean&&click[0]&&engine[0]){
engine[0]=false;  
}else
//liga botao engine
if(engineBtnCollideMouse.collideBolean&&click[0]&&!dock[0]&&!localSpd[0]&&!engine[0]&&fuel[0]>=1){
engine[0]=true; 
}

if(engine[0]){
engineBtn.SpriteAnime(btn2Img,64,0,engineBtn.w,engineBtn.h)
}else{
engineBtn.SpriteAnime(btn2Img,0,0,engineBtn.w,engineBtn.h)
}



///desliga placa solar

if(placaSolarBtnCollideMouse.collideBolean&&click[0]&&placaSolar[0]){
placaSolar[0]=false; 
}else
//liga placa solar
if(placaSolarBtnCollideMouse.collideBolean&&click[0]){
placaSolar[0]=true; 
}
if(placaSolar[0]){
placaSolarBtn.SpriteAnime(btnImg,32,0,placaSolarBtn.w,placaSolarBtn.h);
}else{
placaSolarBtn.SpriteAnime(btnImg,0,0,placaSolarBtn.w,placaSolarBtn.h);
}


///desliga fuel charge

if(fuelBtnCollideMouse.collideBolean&&click[0]&&fuelcharge[0]){
pointActive[0]=false
fuelcharge[0]=false;


}else
//liga fuel charge
if(fuelBtnCollideMouse.collideBolean&&click[0]){
pointActive[0]=false;

if(dock[0]){

  fuelcharge[0]=true;
  
}

}
if(fuelcharge[0]){
fuelBtn.SpriteAnime(btnImg,32,0,fuelBtn.w,fuelBtn.h);
}else{
fuelBtn.SpriteAnime(btnImg,0,0,fuelBtn.w,fuelBtn.h);
}


///desliga dock

if(dockBtnCollideMouse.collideBolean&&click[0]&&dock[0]&&dockable[0]){
pointActive[0]=false
dock[0]=false;


}else
//liga dock
if(dockBtnCollideMouse.collideBolean&&click[0]&dockable[0]){

pointActive[0]=false
dock[0]=true;


}
if(dock[0]){
dockBtn.SpriteAnime(btn2Img,64,0,dockBtn.w,dockBtn.h);
}else{
dockBtn.SpriteAnime(btn2Img,0,0,dockBtn.w,dockBtn.h);
}


                      ////Draw


let monitorFontColor="orange";
let textAlpha=0.7;
dis[0]=Math.floor(Math.abs(point.x-ship.x) + Math.abs(point.y-ship.y));

monitorStatus2.hudMsg(monitorStatus2.x+140,monitorStatus2.y+64,monitorFontColor,"22px Courier New",`status: normal`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+100,monitorFontColor,"18px Courier New",`dinstance:[${dis[0]}] `,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+228,monitorStatus2.y+100,monitorFontColor,"18px Courier New",`thrust power:[${thrustpower} %]`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+132,monitorFontColor,"18px Courier New",`solar panel charge:[${placaSolar}] reator->${Math.floor(reator[0])}%`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+146,monitorFontColor,"18px Courier New",`fuel pump charge:[${fuelcharge[0]}] fuel->${Math.floor(fuel[0])}%`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+196,monitorFontColor,"18px Courier New",`dockable:[${dockable[0]}]`,textAlpha)
monitorStatus2.hudMsg(monitorStatus2.x+32,monitorStatus2.y+210,monitorFontColor,"18px Courier New",`dock:[${dock[0]}]`,textAlpha)




placaSolarBtn.hudMsg(placaSolarBtn.x,placaSolarBtn.y+44,"#ee6800","13px DePixel",`placa solar`,textAlpha)
localSpdBtn.hudMsg(localSpdBtn.x,localSpdBtn.y+84,"#ee6800","13px DePixel",`localspd`,textAlpha)
fuelBtn.hudMsg(fuelBtn.x,fuelBtn.y+44,"#ee6800","13px DePixel",`fuel charger`,textAlpha)
engineBtn.hudMsg(engineBtn.x,engineBtn.y+84,"#ee6800","13px DePixel",`engine`,textAlpha)
dockBtn.hudMsg(dockBtn.x+16,dockBtn.y+84,"#ee6800","13px DePixel",`dock`,textAlpha)



///hud sistem

if(reator[0]>0){
  barrareator.hudMsg(barrareator.x,barrareator.y+16,"orange","14px Courier New",`reator`,textAlpha )
} if(reator[0]<1) {
  barrareator.hudMsg(barrareator.x,barrareator.y+16,"red","14px Courier New",`reator`,textAlpha )
}



barraFuel.Draw("orange",0.5)
if(fuel[0]>0){
  barraFuel.hudMsg(barraFuel.x,barraFuel.y+16,"orange","14px Courier New",`fuel`,textAlpha )
} if(fuel[0]<1){
  barraFuel.hudMsg(barraFuel.x,barraFuel.y+16,"red","14px Courier New",`fuel`,textAlpha )
}

barrareator.Draw("green",0.5)



}

export default CockpitRoom
  