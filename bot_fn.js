//Declarations
const Discord = require("discord.js");
// Extract the required classes from the discord.js module
//const { Client, RichEmbed } = require('discord.js');
const client = new Discord.Client();

//Log In bot account
client.login("MzM1NTkyMjk0NzA5MzI5OTM3.DEsAQQ.7FgTRnrlgL8rr0ASQGm47sgYA4A");

//Game lists
var listOfGames = [];
var bot_msg = "";
//Client Start notifications
client.on("ready", () => {
  console.log("===READY===");
});

client.on("message", (message) => {
  // Set the prefix
  let prefix = "-g ";
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  //join game
/*  if(message.content.startsWith(prefix+"join")){
    const args = message.content.split(/\s+/g).slice(2);
    var gc = args[0];
    if (gc.length>3||gc.length<3){
      message.channel.send("Invalid Game Code")
      console.log("length error")
    }
    else if (/\d/.test(gc)&&gc.match(/([A-Za-z])/g)){
      var game = joinGame(gc, message.author.id);
      //If the result of join game is 1 or 2
      if (game==1||game==2){
        var msg=" ";
        //Formulate the message with the list of players in each game
        for(var i=0;i<listOfGames.length;i++){
          msg += "\n\n **ID: "+listOfGames[i][0]+" ("+(listOfGames[i].length-1)+" player(s))**";
          for (var j=1;j<listOfGames[i].length;j++){
            msg+="\n"+j+". <@"+listOfGames[i][j]+">";
          }
      }
      //Give notification that the user has joined a gamecode
      message.channel.send("<@"+message.author.id+"> has joined game "+gc)
      //Send embed with the list of games and players
      message.channel.send({embed: {
  title: "**Current Servers**",
  color: 3447003,
  description: msg
}});
      }
      //If 0, it means the user already exists in the server
      else if(game==0){
        message.channel.send("Name already exists!")
      }
    }
    else{
      message.channel.send("Invalid Game Code");
    }
  }*/
  //User request to amend
  if(message.content.startsWith(prefix+"join")){
    const args = message.content.split(/\s+/g).slice(2);
    var gc = args[0]
    if (gc.length>3||gc.length<3){
      message.channel.send("Invalid Game Code").then((sent_message)=>{sent_message.delete(5000)});
      console.log("length error")
    }
    else if (/\d/.test(gc)&&gc.match(/([A-Za-z])/g)){
      var result = amend(message.author.id, gc);
    //if(result == 0)
      //message.channel.send("Name already exists!");
    if(result == 1||result == 2){
      var msg = ""
      for(var i=0;i<listOfGames.length;i++){
        msg += "\n\n **ID: "+listOfGames[i][0]+" ("+(listOfGames[i].length-1)+" player(s))**";
        for (var j=1;j<listOfGames[i].length;j++){
          msg+="\n"+j+". <@"+listOfGames[i][j]+">";
        }
    }
      message.channel.send("<@"+message.author.id+"> has joined game "+gc+"\n").then((sent_message)=>{sent_message.delete(5000)});
      //if (bot_msg == ""){
      message.channel.send({embed: {
        title: "**Current Servers**",
        color: 3447003,
        description: msg
      }}).then((sent_message)=>{message.delete(5000);
    });
  }
    //else if(result == 3)
      //message.channel.send("Game code doesn't exist!");
  }
  else{
    message.channel.send("Invalid Game Code").then((sent_message)=>{sent_message.delete(5000)});
  }
}
  //Reset servers
  if(message.content.startsWith(prefix+"reset")){
    //Check if user has the role Admin
    if(message.member.roles.find("name", "Admin")){
      listOfGames = [];
      message.channel.send("All game codes have been reset.").then((sent_message)=>{sent_message.delete(5000)});;
    }
    else{
      message.channel.send("You do not have permission to use this command").then((sent_message)=>{sent_message.delete(5000)});;
    }
      message.delete(5000);
  }
});
//Check if game code exists
function checkExist(gamecode){
  for(var i=0; i<listOfGames.length;i++){
    if(listOfGames[i][0]==gamecode)
      return true;
    else
      return false;


  }
}

function setMessage(msg){
  bot_msg = msg;

}
//Add a new game code function
function addGame(gamecode, playerName){
  var newGame = [gamecode, playerName];
  listOfGames.push(newGame);
  console.log("game added");
  return newGame;
}
//Join an existing game code function
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
//Amend game
function amend(playername, gamecode){
  var removed = false;
  var result;

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
