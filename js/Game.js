class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    ath1 = createSprite(100,200);
    ath2 = createSprite(300,200);
    ath3 = createSprite(500,200);
    ath4 = createSprite(700,200);
    aths = [ath1, ath2, ath3, ath4];
  }

  play(){
    form.hide();
    hurdle.destroy1();
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){      
        background(0);
      image(track, 0,0,displayWidth*2.5, displayHeight);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the aths
      var x  ;
      var y= -150;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the aths a little away from each other in y direction
        y = y + 200;
        //use data from the database to display the aths in x direction
        x = allPlayers[plr].distance + 20;
        aths[index-1].x = x;
        aths[index-1].y = y;

        if (index === player.index){
          aths[index - 1].shapeColor = "white";
          camera.position.y = displayHeight/2;
          camera.position.x = aths[index-1].x;
        }
       
    if(keyIsDown(UP_ARROW) && player.index !== null &&(player.distance >630 && player.distance<800)){
      player.distance = 850;
      player.update();
    }  
    if(keyIsDown(UP_ARROW) && player.index !== null &&(player.distance >1370 && player.distance<1500)){
      player.distance = 1550;
      player.update();
    }  
    if(keyIsDown(UP_ARROW) && player.index !== null &&(player.distance >2030 && player.distance<2200)){
      player.distance = 2250
      player.update();
    }  
    if(keyIsDown(UP_ARROW) && player.index !== null &&(player.distance >2670 && player.distance<2800)){
       player.distance = 2850
      player.update();
    }

      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3500){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
