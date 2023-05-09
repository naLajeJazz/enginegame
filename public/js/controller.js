
import Obj from './obj.js'
import {canvas} from './obj.js'




let mouse=new Obj(0,0,32,32);
let click=false;
  //debug
let debug=new Obj(600,0),
debugMode=false;  

 
    
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
  }
 
  },false);


///mouse
  
canvas.addEventListener('mousemove',function(e){
  mouse.x=e.offsetX;
  mouse.y=e.offsetY;

  
},false);
canvas.addEventListener('mousedown',function(){
  
  //pointActive=true
 
 
},false);
canvas.addEventListener('click',function(){
  click=true
setTimeout(() => {
click=false
}, 12);
 
 
},false);
canvas.addEventListener('mouseup',function(){
  click=false
  //pointActive=false
  
},false);
canvas.addEventListener('mouseover',function(){
  ////
  
},false);

export{
  
debug,
debugMode,
mouse,
click,
 
}