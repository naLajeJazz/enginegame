
import {btn,onOffBtn}from './globalVar.js'
import { click } from './globalVar.js';
import{mouseImg,btnImg,btn2Img,shipImg,stationImg,pointImg,
  cockpitImg,spaceImg,monitorImg,hudControlBtnImg} from './Img.js'                


const Buttons=()=>{

  
  btn[0].x=400;
  btn[0].y=100;
  btn[1].x=500;
  btn[1].y=100;
  btn[2].x=600;
  btn[2].y=100;
  btn[3].x=700;
  btn[3].y=100;
  
  
 


                                    if(btn[0].collideBolean&&click[0]&&!onOffBtn[0]){
                                      onOffBtn[0]=true
                                     
                                    }else if(btn[0].collideBolean&&click[0]&&onOffBtn[0]){
                                      onOffBtn[0]=false
                                    }
                                     if(onOffBtn[0]){
                                    
                                      btn[0].SpriteAnime(btn2Img,64,0,btn[0].w,btn[0].h)
                                      
                                     }else{
                                      
                                      btn[0].SpriteAnime(btn2Img,0,0,btn[0].w,btn[0].h)
                                     }

                                     //
                                    if(btn[1].collideBolean&&click[0]&&!onOffBtn[1]){
                                      onOffBtn[1]=true
                                     
                                    }else if(btn[1].collideBolean&&click[0]&&onOffBtn[1]){
                                      onOffBtn[1]=false
                                    }
                                     if(onOffBtn[1]){
                                      btn[1].SpriteAnime(btn2Img,64,0,btn[1].w,btn[1].h)
                                     }else{
                                      btn[1].SpriteAnime(btn2Img,0,0,btn[1].w,btn[1].h)
                                     }
                                     //
                                    if(btn[2].collideBolean&&click[0]&&!onOffBtn[2]){
                                      onOffBtn[2]=true
                                     
                                    }else if(btn[2].collideBolean&&click[0]&&onOffBtn[2]){
                                      onOffBtn[2]=false
                                    }
                                     if(onOffBtn[2]){
                                      btn[2].SpriteAnime(btn2Img,64,0,btn[2].w,btn[2].h)
                                     }else{
                                      btn[2].SpriteAnime(btn2Img,0,0,btn[2].w,btn[2].h)
                                     }
                                     //
                                    if(btn[3].collideBolean&&click[0]&&!onOffBtn[3]){
                                      onOffBtn[3]=true
                                     
                                    }else if(btn[3].collideBolean&&click[0]&&onOffBtn[3]){
                                      onOffBtn[3]=false
                                    }
                                     if(onOffBtn[3]){
                                      btn[3].SpriteAnime(btn2Img,64,0,btn[3].w,btn[3].h)
                                     }else{
                                      btn[3].SpriteAnime(btn2Img,0,0,btn[3].w,btn[3].h)
                                     }
                                        
};    
                                                         
                                    


export default Buttons