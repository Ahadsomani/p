var form
var barrier
var coca,lemonJUice
var corona , delta , dengue , disease1 , disease2 , disease3 ,disease4 , malaria
var donate , nDonate 
var earthquake , hurricane , metheorite , snowfall
var edication , play
var mask , sanitizer , vaccine
var party , pray
var player 
var physical , digital
var pizza , salad , vegetables , chocolate
var playerAnimation,playerImg
var obstaclesGroup;
var rewardsGroup;
var healsGroup;

var health=100
var shield=100



function preload(){
    track=loadImage("123.jpg")
    vegetables = loadImage("vegetables.png")
    vaccine = loadImage("vaccine.png")
    snowfall = loadImage("snowFall.png")
    sanitizer = loadImage("sanitizer.png")
    salad = loadImage("salad.png")
    pray = loadImage("pray.png")
    play = loadImage("play.png")
    pizza = loadImage("pizza.png")
    physical = loadImage("physical.png")
   // playerAnimation = loadAnimation("person1.png ", "person2.png")
    party = loadImage("party.png")
    nDonate = loadImage("nDonate.png")
    metheorite = loadImage("metheorite.png")
    mask = loadImage("mask.png")
    malaria = loadImage("malaria.png")
    hurricane = loadImage("hurricane.png")
    education = loadImage("education.png")
    earthquake = loadImage("earthquake.png")
    donate = loadImage("donate.png")
    disease1 = loadImage("disease1.png")
    disease2 = loadImage("disease2.png")
    disease3 = loadImage("disease3.png")
    disease4 = loadImage("disease4.png")
    dengue = loadImage("dengue.png")
    delta = loadImage("delta.png")
    corona = loadImage("corona.png")
    coca = loadImage("coca cola.png")
    barrier = loadImage("barrier.png")
    obstacle1 = loadImage("obstacle 1.png")
    chocolate = loadImage("choclate.png")

    playerImg=loadImage("person1.png")

}



function setup(){
    createCanvas(windowWidth,windowHeight)

    player=createSprite(100,100,100,100)
   // player.addAnimation("run",playerAnimation)
    //player.changeAnimation("run",playerAnimation)
    player.addImage("player",playerImg)
 
    console.log(player.position.y)
   
  obstaclesGroup=new Group()
  rewardsGroup=new Group()
  healsGroup=new Group()
    
}

function draw(){
        background(0)
        image(track, 0, -height * 5, width, height * 6);


        if(keyDown(UP_ARROW)){
            player.position.y-=5;
        }
        camera.position.y = player.position.y

        if(keyDown(RIGHT_ARROW)){
          player.position.x-=-5;
      }

      if(keyDown(LEFT_ARROW)){
        player.position.x-=5;
    }



   if(obstaclesGroup.isTouching(player)&&shield>0){
      shield-=20;
    }
    else{
      health-=20
    }

    if(rewardsGroup.isTouching(player)&& shield===100)
    {
      health+=20
    }
    else{
      shield+=20
    }

    text("health : ",health,100,100)
    text("shield : ",shield,100,130)
  

spawnObstacles()
spawnRewards()

    drawSprites()
}

function spawnObstacles(){
  if(frameCount%60===0){
     
      var rand1= Math.round(random(0, -height * 5))
      var rand2= Math.round(random(0, width))
      var rand3= Math.round(random(1,4))
      

      var NG= createSprite(rand2,rand1,50,50)

switch(rand3){
case 1 :
 NG.addImage(play)
break 

 case 2:
   NG.addImage(pizza)
   break

   case 3:
     NG.addImage(party)
     break

     case 4:
       NG.addImage(nDonate)
       break

       case 5:
         NG.addImage(coca)
         break

         case 6:
           NG.addImage(chocolate)
           break


        default:break
}
  NG.scale=0.5
  NG.lifetime=100
  obstaclesGroup.add(NG)

  }

  }

    function spawnRewards(){
      if(frameCount%60===0){
         
          var rand4= Math.round(random(0, -height * 5))
          var rand5= Math.round(random(0, width))
          var rand6= Math.round(random(1,5))
          
  
          var GG= createSprite(rand5,rand4,50,50)
          rewardsGroup.add(GG)
  switch(rand6){
    case 1 :
     GG.addImage(pray)
  break 
  
     case 2:
       GG.addImage(physical)
       break
  
       case 3:
         GG.addImage(education)
         break
  
         case 4:
           GG.addImage(donate)
           break
  
           case 5:
             GG.addImage(salad)
             break
  
             
  
            default:break
  }
      GG.scale=0.5
      GG.lifetime=100
  
      }
  
      }
      function spawnHeals(){
        if(frameCount%60===0){
           
            var rand7= Math.round(random(0, -height * 5))
            var rand8= Math.round(random(0, width))
            var rand9= Math.round(random(1,3))
            
    
            var heal= createSprite(rand7,rand8,50,50)
            healsGroup.add(heal)
    switch(rand3){
  
    
               case 1:
                heal.addImage(vaccine)
                 break
    
                  case 2:
                    heal.addImage(sanitizer)
                    break
  
                    case 3:
                      heal.addImage(mask)
                      break
  
    
              default:break
    }
    heal.scale=0.5
    heal.lifetime=100
    
        }
    
        }
    