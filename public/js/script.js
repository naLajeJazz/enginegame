
import Obj from './obj.js'
import {canvas} from './obj.js'
import {ctx} from './obj.js'



 
canvas.width=screen.width;
canvas.height=screen.height+8;
canvas.style.backgroundColor="black";

                  ////Objetos

let txt=new Obj(canvas.width/2,canvas.height/2,800,800,0.5)
setInterval(()=>txt.spd=-0.5 ,4000)
setInterval(()=>txt.spd=0.5 ,8000)




                      /////Game Update

    
function game (){
requestAnimationFrame(game,canvas);
ctx.clearRect(0,0,canvas.width,canvas.height);



txt.x+=txt.spd
txt.hudMsg(txt.x,txt.y,"gray","100px DePixel ","Engine Game")
txt.Shadow("white",5,-4,2)
  



};
game();