//Naomi Marshall
//Maze game (Final version will hopefully be more complex, I just need it to work fully first before I add more)
//Mostly good prototype just can't figure out how to pause
//I'd hopefully make it so that when mouse pressed, the ellipse stays where it last was


let button = false; //
var counter = 100; //"Health bar"
var ell = 25;
var oell = 20;
var g = 200;
var h = 190;
var paused = 1;
let win = false;

let wall1, wall2, wall3, wall4, wall5,wall6; // Maze wall

function setup(){
  
  createCanvas(300, 300);
  // Initialize Objects
wall1 = new maze(0, 30, 250, 30); // 
wall2 = new maze(40, 90, 260, 30);
wall3 = new maze(40, 120, 40, 140);
wall4 = new maze(80, 210, 180, 50);
wall5 = new maze(220, 160, 40, 60);
wall6 = new maze(120, 160, 110, 10);

}
function draw() {
  background(255-2*(counter));
  ellipse(mouseX,mouseY,ell,ell);
  ellipse(g,h,oell,oell);
  wall1.display();
  wall1.touchy();
  wall2.display();
  wall2.touchy();
  wall3.display();
  wall3.touchy();
  wall4.display();
  wall4.touchy();
  wall5.display();
  wall5.touchy();
  wall6.display();
  wall6.touchy();
 
  print (" ", mouseX,",",mouseY," ");

 
 if (mouseX > 190 && mouseX < 210 && mouseY > 180 && mouseY < 200) {
      
  // counter = 100;
   
   win = true;
      
 // button =false;
      
   
   fill(0,255,0); 
   rect(0, 0, 300, 300);
   
      print("Level Complete!"); 
      background(0,255,0);
      
      //textFont(f, 16);
  fill(255); 
  textSize(50);
  textAlign(CENTER, CENTER);
  text("YOU WIN :D", width/2, height/2);
    }
}

//Pause Ability (Not Completed)
  function mousePressed() {
  paused = paused+1; 
  if (paused%2==0) { 

  println ("Paused");
  

}
  
 else   { println ("Unpaused");} 
  }


  
  
  class maze { 
 constructor(Inx, Iny, Inw, Inh) {// Constructor
  this.x = Inx;
  this.y = Iny;
  this.w = Inw;
  this.h = Inh;
  }

  //Fuction shows walls
 display() {
   if (win == false){
    stroke(1);
    fill(175); 
    rect(this.x, this.y, this.w, this.h);
   } else if (win == true)
   {  
     fill(0,255,0); 
   rect(0, 0, 300, 300);
   
      print("Level Complete!"); 
      background(0,255,0);
      
      //textFont(f, 16);
  fill(255); 
  textSize(50);
  textAlign(CENTER, CENTER);
  text("YOU WIN :D", width/2, height/2);
}
  }
  //Takes walls out (Currently not working)
  // void nodisplay() { 
  //  noStroke();
  //  noFill(); 
  //  rect(x, y, w, h);
  //}
  
  //If touching walls health goes down, If depleted, game over
 touchy(){
 if (win == false){
 if (mouseX+(12.5) > this.x && mouseX-(12.5) < this.x+this.w && mouseY+(12.5) > this.y && mouseY-(12.5) < this.y+this.h) {
  button = true;
    counter = counter-1;
    background(255-2*(counter)); 
    
    
    
     if (counter <= 0){  // reset your counter
   counter = 0;
   print("GAME OVER"); 
   background(255,0,0);
   ell= 0;
   fill(255,0,0); 
   rect(0, 0, 300, 300);
   
  
     }
 
  } else {
   button = false;
    
    if (counter <= 0){  // reset your counter
   counter = 0;
   print(" GAME OVER "); 
   background(255,0,0);
   ell= 0;
   fill(255,0,0); 
   rect(0, 0, 300, 300);
   
     }
    else if (win == true){
    fill(0,255,0); 
   
    }
  }
  
 }
 }
 
 }