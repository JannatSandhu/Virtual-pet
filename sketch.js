//Create variables here
var hungrypet, happypet; 
var dog, dog2;


function preload()
{
  //load images here
  hungrypet= loadImage("dogImg.png");
  happypet= loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
 happydog = createSprite(250, 250);

  
}


function draw() {  
 background(46,139,87)

 if(keyWentDown(UP_ARROW)){
   writeStock(food);
   dog.addImage(happypet);
 }
  drawSprites();
  //add styles here

}



