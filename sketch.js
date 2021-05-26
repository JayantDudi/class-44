var backgroundImg;
var player,playerImg;
var enemy,enemyImg;
var missileImg;
var missile;
var missileGroup;
var enemyGroup;

function preload(){
 backgroundImg = loadImage("road.jpg");
 playerImg = loadImage("tank player.png");
 enemyImg = loadImage("car.png");
 missileImg = loadImage("rocket.png")
}


function setup() {
  createCanvas(1000,650);

  player = createSprite(500,450,50,50);
  player.addImage(playerImg,"playerImg");
  player.scale=0.2;

 
  missileGroup = new Group();
  enemyGroup = new Group();


    


  
}

function draw() {
  background(backgroundImg);

  if(enemyGroup.isTouching(missileGroup)){
    enemyGroup.destroyEach();
    missileGroup.destroyEach();
  }

  if(player.isTouching(enemyGroup)){
    enemyGroup.destroyEach();
    
  }
  

  if(keyDown(LEFT_ARROW) ){
    player.x = player.x -6;
  }

  if(keyDown(RIGHT_ARROW) ){
    player.x = player.x +6;
  }

  if(keyDown(UP_ARROW) ){
    player.y = player.y -6;
  }

  if(keyDown(DOWN_ARROW) ){
    player.y = player.y +6;
  }


  if (keyDown("space")) {
    createMissile();
    
  }


  drawSprites();

  spawnEnemy();
  
   
}

function spawnEnemy() {
  //write code here to spawn the enemy
  if (frameCount % 120 === 0) {
    var enemy = createSprite(400,20,40,10);
    enemy.x = Math.round(random(80,770));
    enemy.addImage(enemyImg);
    
    enemy.velocityY = 3;
    enemy.scale = 0.2;
    
     //assign lifetime to the variable
    
    
    //adjust the depth
    
    
    //add each cloud to the group

 
    enemy.setCollider("rectangle",0,0,350,enemy.height);
    

    enemyGroup.add(enemy);


    
  }
}


function createMissile() {
  var missile= createSprite(100,player.y, 60, 10);
  missile.addImage(missileImg);
 
  missile.x=player.x;
  missile.velocityY = -4;
  missile.lifetime = 200;
  missile.scale = 0.05;

  missile.setCollider("rectangle",0,0,missile.width,missile.height);
    
  missileGroup.add(missile);
 
}

