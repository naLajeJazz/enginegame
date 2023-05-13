
import Obj from './obj.js'
import {canvas} from './obj.js'




let mouse=new Obj(0,0,64,64);
let click=false;
let pointActive=false;
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
  click=true
setTimeout(() => {
click=false
}, 12);
 
 
},false);
canvas.addEventListener('mouseup',function(){
  click=false
  //pointActive=false
  testi=false
  
},false);
canvas.addEventListener('mouseover',function(){
  ////
  
},false);

export{
  
debug,
debugMode,
mouse,
click,
pointActive,
testi
 
}