import {shipCollidePoint, shipCollideStation, localSpdCollideMouse,
                  stationMask, mouseCollideStation, mouseCollideLocalSpdBtn,
                  placaSolarBtnCollideMouse, fuelBtnCollideMouse, dockBtnCollideMouse,
                  engineBtnCollideMouse, pointCollideShip, ship,localSpdBtn, station, placaSolarBtn, fuelBtn,
                  dockBtn, engineBtn, point, hudControlBtn, hudControl, dock, dockable,
                  navigation, cockpit, space, logisticControl, logisticControlBol, engineSpd, engine, 
                  fuel, fuelcharge, barraFuel, reator, barrareator, monitorStatus1, monitorStatus2,mouse,pointActive, placaSolar,localSpd      
                             }from './globalVar.js'
                          
  const Sistemas=()=>{
         
                  
             
                 
            
          
                  if(hudControl[0]||hudControlBtn.collideBolean){
                                    pointActive[0]=false
                                  }
                                  
 ///pega a posiçao do point
if(pointActive[0]){
                  ship.DrawLine(ship.x+16,ship.y+16,point.x+16,point.y+16,"green",1,0.6)
                  point.x=mouse.x
                  point.y=mouse.y
                  }
//executa interação da colisão ship/point
if(shipCollidePoint.collideBolean){
                  localSpd[0]=false;
                  engine[0]=false;
                  }

//dockable
if(shipCollideStation.collideBolean){
                  dockable[0]=true;
                  }else{
                  dockable[0]=false;
                  }

///sistema placas solar e reator
if(placaSolar[0]&&reator[0]<=100){
                  reator[0]+=0.1;
                  barrareator.h-=0.1;
                  }else{
                  placaSolar[0]=false;
                  }

//sistema fuel charge
if(fuelcharge[0]&&fuel[0]<=100&&shipCollideStation.collideBolean){
                  fuel[0]+=0.1;
                  barraFuel.h-=0.1;
                  }else{
                  fuelcharge[0]=false;
                   }


                   if(localSpd[0]&&!placaSolar[0]&&reator[0]>=1||engine[0]&&!fuelcharge[0]&&fuel[0]>=1&&!dock[0]){
                                    ship.DrawLine(ship.x+16,ship.y+16,point.x+16,point.y+16,"green",1,0.4)
                                   if(localSpd[0]){
                                    if(ship.x<point.x){
                                     
                                      ship.x+=ship.spd
                                     
                                      barrareator.h+=0.005;
                                      reator[0]-=0.005;
                                     
                                     }
                                     if(ship.x>point.x) {
                                      
                                       ship.x-=ship.spd
                                    
                                       barrareator.h+=0.005;
                                       reator[0]-=0.005;
                                     } 
                                     
                                     if(ship.y>point.y){
                                      
                                      ship.y-=ship.spd
                                     
                                      
                                      barrareator.h+=0.005;
                                      reator[0]-=0.005;
                                     }
                                     if(ship.y<point.y) {
                                      
                                       ship.y+=ship.spd
                                      
                                       barrareator.h+=0.005;
                                       reator[0]-=0.005;
                                     } 
                                   }
                                    if(engine[0]){
                                      if(ship.x<point.x){
                                     
                                        ship.x+=engineSpd[0]
                                       
                                        barraFuel.h+=0.03;
                                        fuel[0]-=0.03;
                                       
                                       }
                                       if(ship.x>point.x) {
                                        
                                         ship.x-=engineSpd[0]
                                      
                                         barraFuel.h+=0.03;
                                         fuel[0]-=0.03;
                                       } 
                                       
                                       if(ship.y>point.y){
                                        
                                        ship.y-=engineSpd[0]
                                       
                                        
                                        barraFuel.h+=0.03;
                                        fuel[0]-=0.03;
                                       }
                                       if(ship.y<point.y) {
                                        
                                         ship.y+=engineSpd[0]
                                        
                                         barraFuel.h+=0.03;
                                         fuel[0]-=0.03;
                                       } 
                                    }
                                  
                                  }else{
                                    localSpd[0]=false;
                                    engine[0]=false
                                  };
                                  



  } 
  
  
                               
export default Sistemas