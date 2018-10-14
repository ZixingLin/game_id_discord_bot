//Declarations
const Discord = require("discord.js");
const client = new Discord.Client();

//Log In bot account
client.login("MzM1NTkyMjk0NzA5MzI5OTM3.DEsAQQ.7FgTRnrlgL8rr0ASQGm47sgYA4A");

//Gacha Variables
var characterlessR = ["Characterless R",0];
var characterlessSR = ["Characterless SR",1];
var rares = ["R Carmeiux", "R Barawa", "R Korata", "R Lunalu", "R Mary", "R Farrah", "R Herja"];
var superRares = ["SR Sutera", "SR Sen", "SR Barawa", "SR Naoise", "SR Jeanne d'Arc", "SR Mary", "SR Lucius(D)"];
var ssrares = ["SSR Torbjorn", "Shiva +99","SSR Zoi", "SSR Korwa", "SSR Cagliostro(E)", "SSR Cagliostro(D)", "SSR Dark Sarunan"];
//Reminder Variables
var reminderTime = [0 , 0]
var reminderChannel;
var interval;

//Simple Message Response Object
let responseObject = {
"ayy": "lmao",
"heles": "alimas",
"hey": "i capped"
};

//Arrays
var Carries = [];
var Support = [];
var ResultPartners = [];
//Client Start notifications
client.on("ready", () => {
  console.log("I am ready!");
});

//Message events
client.on("message", (message) => {
  // Set the prefix
  let prefix = "smd.";

  //Message Response Object
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //Ping - Pong
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }

  //Single Roll
  if(message.content.startsWith(prefix+"roll")){
    var rollResult = roll();
    message.channel.send("You got: "+rollResult[0]);
  }

  //10Roll
  if(message.content.startsWith(prefix+"10roll")){
    var resultArray = ["",0];
    var resultString = "";
    var rarityIndex = 0;
    for(var i=0; i<10;i++){
      if(i==9&&rarityIndex==0){
        resultArray = roll(true);
      }
      else
      {
        resultArray = roll(false);
      }
      rarityIndex+=resultArray[1];
      resultString = resultString + resultArray[0];
      if(i<9)
        resultString+=", ";
      }
      message.channel.send("You Got: "+resultString);
  }

  //Reminder
  if(message.content.startsWith(prefix+"reminder")){
    const args = message.content.split(/\s+/g).slice(1);
    var d = new Date();
    if(!args[0]){
        message.channel.send("Please enter time in hours: eg. smd.remind 4");
        return 0;
    }
    args[0] = parseInt(args[0]);
    reminderTime[0] = d.getHours() + args[0];
    console.log(reminderTime[0]+" "+args[0]);
    reminderTime[1] = d.getMinutes();
    if(reminderTime[0]>24){
      var excessTime = reminderTime[0] - 24;
      reminderTime[0] = excessTime;
    }
    reminderChannel = message.channel;
    message.channel.send("Your set time for reminder is set in "+args[0] + " hours. Time set: "+reminderTime[0]+reminderTime[1]+"GMT+8");
    interval = setInterval(function() {
      var date = new Date();
      console.log(date.getHours()+" "+reminderTime[0]);
      console.log(date.getMinutes()+" "+reminderTime[1]);
      if (date.getHours() == reminderTime[0]){
        if(date.getMinutes() == reminderTime[1]){
          reminderChannel.send("Reminder!!!!");
          reminderTime[0] = null;
          reminderTime[1] = null;
          clearInterval(interval);
        }
      }
    },(60 * 1000)); // Check every minute
  }

  //Clear Reminder
  if(message.content.startsWith(prefix+"clearReminder")){
      message.channel.send("Reminder for "+reminderTime[0] + reminderTime[1]+" was cleared.");
    clearInterval(interval);
  }
  //Stickers
  if(message.content.startsWith(prefix+"sticker")){
    const sticker = message.content.split(/\s+/g).slice(1);
    var stickerName = sticker[0]+".png";
    message.channel.send("STICKER!!", {file:"D:/AnimeImages/Photo Database/GBF Stickers/"+stickerName});
    }
  //Images
  if(message.content.startsWith(prefix+"pout")){
    var pictureName = "Pout "+ (Math.floor(Math.random()*(5-1+1))+1) +".jpg";
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Pouting/" + pictureName});
  }

  if(message.content.startsWith(prefix+"lewd")){
    var pictureName = "lewd "+ (Math.floor(Math.random()*(5-1+1))+1) +".png";
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Lewd/" + pictureName});
  }

  if(message.content.startsWith(prefix+"sugoi")){
    var randompic = (Math.floor(Math.random()*(2-1+1))+1);
    var pictureName;
    if(randompic==1){
      pictureName = "admire_"+ (Math.floor(Math.random()*(3-1+1))+1) +".jpg";
      message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Admire/" + pictureName});
    }
    else{
      pictureName = "admire "+ (Math.floor(Math.random()*(2-1+1))+1) +".gif";
      message.channel.send("~~IMAGE~~GIF!!", {file:"D:/AnimeImages/Photo Database/Admire/gif/" + pictureName});
    }
  }

  if(message.content.startsWith(prefix+"shrug")){
    //var pictureName = "lewd "+ (Math.floor(Math.random()*(5-1))+1) +".png";
    var pictureName = "shrug.jpg"
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Shrug/" + pictureName});
  }
  if(message.content.startsWith(prefix+"thinking")){
    var pictureName = "thinking"+ (Math.floor(Math.random()*(5-1))+1) +".png";
    console.log(pictureName);
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Thinking/" + pictureName});
  }

  if(message.content.startsWith(prefix+"thonkang")){
    var pictureName = "thinking3.png";
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Thinking/" + pictureName});
  }

  if(message.content.startsWith(prefix+"korwa")){
    pictureName = "korwa_"+ (Math.floor(Math.random()*(3-1+1))+1) +".png";
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Korwa/" + pictureName});
  }
  //Rate WAIFU
  if(message.content.startsWith(prefix+"ratewaifu")){
      const args = message.content.split(/\s+/g).slice(1);
      var potentialWaifu = args[0];
      var rating = (Math.floor(Math.random()*(10-0+1))+0);
      if(args[0] == "SMD"||args[0]=="Heles"||args[0]=="Rackam"){
        rating = 9000;
      }
      message.channel.send("I give "+args[0]+" a rating of "+rating+"/10");
    }
    //Help
    if(message.content.startsWith(prefix+"help"))
    {
        message.channel.send("Help yourself for now m8");
    }

    //Experimental Codes
    if(message.mentions.users.id == 335592294709329937 )
    {
        message.channel.send("Testing");
    }
    if(message.content.startsWith(prefix+"test"))
    {
      const args = message.content.split(/\s+/g).slice(1);
      message.channel.send("This is your message: "+args[0]);
      console.log(args[0]);
      console.log(client.id);
    }
    if(message.content.startsWith("@335592294709329937"))
    {
      message.channel.send("it works man");
    }
    //TASK: DO BELOW


});

//Gacha Function
function roll(sr)
{
  var rand = Math.random()
  var returnArray = ["",0];
  if(!sr){
    if(rand<0.82){
      var rand2 = Math.floor(Math.random() * (15 - 0 +1)) + 1;
      rand = Math.floor(Math.random() * (rares.length - 0)) + 0;
      returnArray = [rares[rand],0]
      if(rand2<15){
        return characterlessR;
      }
      else{
        return returnArray;
      }
    }
    else if(rand>0.82&&rand<0.97){
      var rand2 = Math.floor(Math.random() * (15 - 0 +1)) + 1;
      rand = Math.floor(Math.random() * (superRares.length - 0)) + 0;
      returnArray = [superRares[rand],1]
      if(rand2<15){
        return characterlessSR;
      }
      else{
        return returnArray;
      }
    }
    else{
      rand = Math.floor(Math.random() * (ssrares.length - 0)) + 0;
      var ssr = ":large_orange_diamond:" +ssrares[rand];
      returnArray = [ssr,2]
      return returnArray;
    }
  }
  else {
    var rand2 = Math.floor(Math.random() * (15 - 0 +1)) + 1;
    rand = Math.floor(Math.random() * (superRares.length - 0)) + 0;
    returnArray = [superRares[rand],1]
    if(rand2<15){
      return characterlessSR;
    }
    else{
      return returnArray;
    }
  }


}
