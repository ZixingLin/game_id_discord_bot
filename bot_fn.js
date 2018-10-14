//Declarations
const Discord = require("discord.js");
// Extract the required classes from the discord.js module
//const { Client, RichEmbed } = require('discord.js');
const client = new Discord.Client();

//Log In bot account
client.login("MzM1NTkyMjk0NzA5MzI5OTM3.DEsAQQ.7FgTRnrlgL8rr0ASQGm47sgYA4A");

//Game lists
var listOfGames = [];
//var numOfGames = 0;
//Client Start notifications
client.on("ready", () => {
  console.log("===READY===");
});

client.on("message", (message) => {
  // Set the prefix
  let prefix = "-g ";
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

//create game
/*  if(message.content.startsWith(prefix+"create")){
    const args = message.content.split(/\s+/g).slice(2);
    //if gamecode arg does not fulfil the 3 chara requirement
    var gc = args[0];
    var listOfGameIDs = [];
    for (var i=0;i<listOfGames.length;i++){
      listOfGameIDs.push(listOfGames[i][0]);
    }
    if (gc.length>3||gc.length<3){
      message.channel.send("Invalid Game Code")
      console.log("length error")
    }
    else if(listOfGameIDs.includes(gc)){
      message.channel.send("Game already exists! Use -g join to join an existing game")
    }
    //check if alphanumerical
    else if(/\d/.test(gc)&&gc.match(/([A-Za-z])/g)){
      var game = addGame(gc, message.author.id);
      message.channel.send("Players in game "+game[0]+":");
      for(var i=1;i<game.length;i++){
        message.channel.send("\n<@"+game[i]+">");
      }
    }
    else{
      message.channel.send("Invalid Game Code");
    }
  }*/
  //join game
  if(message.content.startsWith(prefix+"join")){
    const args = message.content.split(/\s+/g).slice(2);
    var gc = args[0];
    if (gc.length>3||gc.length<3){
      message.channel.send("Invalid Game Code")
      console.log("length error")
    }
    else if (/\d/.test(gc)&&gc.match(/([A-Za-z])/g)){
      var game = joinGame(gc, message.author.id);
      if (game==1||game==2){
        var msg=" ";// = "<@"+message.author.id+"> has joined game "+gc;
        /*for(var i=1;i<game.length;i++){
          msg+="\n"+i+". <@"+game[i]+">";
        }*/

        for(var i=0;i<listOfGames.length;i++){
          msg += "\n\n **ID: "+listOfGames[i][0]+" ("+(listOfGames[i].length-1)+" player(s))**";
          for (var j=1;j<listOfGames[i].length;j++){
            msg+="\n"+j+". <@"+listOfGames[i][j]+">";
          }
      }
      message.channel.send("<@"+message.author.id+"> has joined game "+gc)
      message.channel.send({embed: {
  title: "**Current Servers**",
  color: 3447003,
  description: msg
}});
      }
      else if(game==0){
        message.channel.send("Name already exists!")
      }
    }
    else{
      message.channel.send("Invalid Game Code");
    }
  }

  if(message.content.startsWith(prefix+"amend")){
    const args = message.content.split(/\s+/g).slice(2);
    var gc = args[0]
    var result = amend(message.author.id, gc);
    if(result == 0)
      message.channel.send("Name already exists!");
    else if(result == 1||result == 2){
      var msg = ""
      for(var i=0;i<listOfGames.length;i++){
        msg += "\n\n **ID: "+listOfGames[i][0]+" ("+(listOfGames[i].length-1)+" player(s))**";
        for (var j=1;j<listOfGames[i].length;j++){
          msg+="\n"+j+". <@"+listOfGames[i][j]+">";
        }
    }
      message.channel.send("<@"+message.author.id+"> has successfully moved to game code "+gc+"\n");
      message.channel.send({embed: {
        title: "**Current Servers**",
        color: 3447003,
        description: msg
      }});
    }
    //else if(result == 3)
      //message.channel.send("Game code doesn't exist!");
  }

  if(message.content.startsWith(prefix+"reset")){
    if(message.member.roles.find("name", "Admin")){
      listOfGames = [];
      message.channel.send("All game codes have been reset.");
    }
    else{
      message.channel.send("You do not have permission to use this command");
    }
  }


});
function checkExist(gamecode){
  for(var i=0; i<listOfGames.length;i++){
    if(listOfGames[i][0]==gamecode)
      return true;
    else
      return false;


  }
}
function addGame(gamecode, playerName){
  var newGame = [gamecode, playerName];
  listOfGames.push(newGame);
  console.log("game added");
  return newGame;
}

function joinGame(gamecode, playername){
  for(var i=0;i<listOfGames.length;i++){
    if(listOfGames[i][0]==gamecode){
      for(j=0;j<listOfGames[i].length;j++){
        if(playername == listOfGames[i][j])
          return 0;
      }
      listOfGames[i].push(playername);
      selectedGame = listOfGames[i];
      return 1
    }
  }
  var newGame = addGame(gamecode, playername);
  return 2;
}

function amend(playername, gamecode){
  var removed = false;
  var result;
  //if(!checkExist(gamecode))
    //return 3;
  for(var i=0;i<listOfGames.length;i++){
    if(listOfGames[i].includes(playername)){
      listOfGames[i].splice( listOfGames[i].indexOf(playername), 1 );
      if (listOfGames[i].length<=1)
        listOfGames.splice(i,1);
      removed = true;
    }
  }
  result = joinGame(gamecode, playername);
      return result;
}
