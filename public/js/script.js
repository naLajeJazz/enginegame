
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'

import{mouseImg} from './Img.js'


 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

////Objetos////

let txt=new Obj(canvas.width/2,canvas.height/2,800,800,0.5);
setInterval(()=>txt.spd=-0.5 ,4000);
setInterval(()=>txt.spd=0.5 ,8000);

let mouse=new Obj(0,0),
    click=false;

let test=false;

let debug=new Obj(300,50),
    debugMode=false;

/////////


////controles////

////teclado

window.addEventListener("keyup",()=>{
                 test=false;
                 
                  
                },false);

window.addEventListener("keydown",function(event){

                  let k= event.key;
                             
                  if (k == "d" ){
                                         
                  test=true

                  }else if(k =="a" ){

                  test=true
                                        
                  }else if (k=="w"){

                  test=true

                  }else if (k=="s"){

                  test=true

                  }else if (k=="t"){
                  debugMode=true           
                  }else if (k=="y"){
                  debugMode=false           
                  }
                  else if (k=="v"){
                                     
                  }
                  else if (k=="q"){
                                      
                  }
                  },false);


///mouse
                  
canvas.addEventListener('mousemove',function(e){
                  mouse.x=e.offsetX;
                  mouse.y=e.offsetY;

                  
              },false);
canvas.addEventListener('mousedown',function(){
                  click=true
                 
                 
              },false);
canvas.addEventListener('mouseup',function(){
                  click=false
                  
              },false);
canvas.addEventListener('mouseover',function(){
                  ////
                  
              },false);
               
/////////



/////Game Update

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);





////Hud
if (debugMode){


debug.hudMsg(debug.x,debug.y,"blue","48px DePixel",
` ${mouse.x}
  ${mouse.y} 
  ${click} 
  ${test}
  
  `)
}

txt.x+=txt.spd
txt.hudMsg(txt.x,txt.y,"gray","100px DePixel ","Game Engine")

  



};
game();