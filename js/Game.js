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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30);
    text("GET SET GO",120,100)
    Player.getPlayerinfo();
    if(allPlayers!= undefined){
      var yposition=130
      for(var plr in allPlayers){
        if(plr== "player"+player.index){
          fill ("green")
        }
        else {
          fill ("red")
        }
        yposition=yposition+30
        textSize(20);
        text(allPlayers[plr].name+" : "+ allPlayers[plr].distance,120,yposition)
      }
      if (keyDown("up")&&player.index!= null){
        player.distance=player.distance+20;
        player.update();
      }
    }
  }
}
