
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'



 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";






                      /////Game Update

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);


  
};
game();