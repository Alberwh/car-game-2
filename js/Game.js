class Game {
  constructor(){}
  
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
      var reff = await database.ref("playerCount").once("value")
      if(reff .exists()){
        playerCount = reff.val()
        player.getCount()
      }

      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(35)
    text("Game Started",100,100)
    Player.getPlayerInfo()
    if(allPlayers!== undefined){
      var pos = 150
      for(var i in allPlayers){
        if(i === "player"+player.index){
          fill("red")
        }
        else{
          fill("black")
        }
        textSize(20)
        pos = pos+30
        text(allPlayers[i].name + " : "+ allPlayers[i].distance, 130,pos)
      }
    }

    if( keyIsDown(UP_ARROW) && player.index !== null ){
      player.distance +=40
      player.update()
    }

  }






}
