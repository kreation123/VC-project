//Create variables here
var dogImage, dog
var happydogImage, happydog

function preload()
{
  dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  dog  = createSprite(400, 400, 20, 20)
  dog.setImage("dogImage" )
  
  foodStock =  database.ref('Food')
foodStock.on("value", readStock)
}


function draw() {  


  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImage)
  }
  drawSprites();

}



function readStock(data){
  foodS = data.val()

}
function writeStock(x){
  if(x<= 0){
    x = 0;

  }else{
    x = x+ 1 
  }
  database.ref('/').update({
    food : x
  })

}