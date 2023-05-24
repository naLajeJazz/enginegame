
import {btn,onOffBtn}from './globalVar.js'
import { click } from './globalVar.js';
                 

const OnOff=()=>{

  
  btn[0].x=400;
  btn[1].x=500;
  btn[2].x=600;
  btn[3].x=700;
  
  
 


                                    if(btn[0].collideBolean&&click[0]&&!onOffBtn[0]){
                                      onOffBtn[0]=true
                                     
                                    }else if(btn[0].collideBolean&&click[0]&&onOffBtn[0]){
                                      onOffBtn[0]=false
                                    }
                                     if(onOffBtn[0]){
                                      btn[0].Draw("red")
                                      //btn[0].y++
                                     }else{
                                      btn[0].Draw("green")
                                     }

                                     //
                                    if(btn[1].collideBolean&&click[0]&&!onOffBtn[1]){
                                      onOffBtn[1]=true
                                     
                                    }else if(btn[1].collideBolean&&click[0]&&onOffBtn[1]){
                                      onOffBtn[1]=false
                                    }
                                     if(onOffBtn[1]){
                                      btn[1].Draw("red")
                                     }else{
                                      btn[1].Draw("green")
                                     }
                                     //
                                    if(btn[2].collideBolean&&click[0]&&!onOffBtn[2]){
                                      onOffBtn[2]=true
                                     
                                    }else if(btn[2].collideBolean&&click[0]&&onOffBtn[2]){
                                      onOffBtn[2]=false
                                    }
                                     if(onOffBtn[2]){
                                      btn[2].Draw("red")
                                     }else{
                                      btn[2].Draw("green")
                                     }
                                     //
                                    if(btn[3].collideBolean&&click[0]&&!onOffBtn[3]){
                                      onOffBtn[3]=true
                                     
                                    }else if(btn[3].collideBolean&&click[0]&&onOffBtn[3]){
                                      onOffBtn[3]=false
                                    }
                                     if(onOffBtn[3]){
                                      btn[3].Draw("red")
                                     }else{
                                      btn[3].Draw("green")
                                     }
                                        
};    
                                                         
                                    


export default OnOff