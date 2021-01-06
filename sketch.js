
const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rain=[]
function preload(){
    walking1=loadImage("images/walking_1.png")
    walking1=loadImage("images/walking_2.png")
    walking1=loadImage("images/walking_3.png")
    walking1=loadImage("images/walking_4.png")
    walking1=loadImage("images/walking_5.png")
    walking1=loadImage("images/walking_6.png")
    walking1=loadImage("images/walking_7.png")
    walking1=loadImage("images/walking_8.png")

}

function setup(){
    cnavas=createCanvas(500,850)
   walking=createSprite(250,500,5,5)
    walking.addImage(walking1)
}

function draw(){
    background("darkblue")

if(frameCount%60===0){
  rain.push(new Rain(random(width/2-30, width/2+30), 10,10));
 
}

for (var j = 0; j < rain.length; j++) {

  rain[j].display();
}
    walking.display()
 
}   

