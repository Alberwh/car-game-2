class Player {
  constructor(){
    this.name = null
    this.distance = 0
    this.index = null                      
  }
//reading from database
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
//writing in database
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//()=>{} arrow function
  static getPlayerInfo(){
    database.ref("players").on("value",(data)=>{
      allPlayers = data.val()
    })
  }
}
