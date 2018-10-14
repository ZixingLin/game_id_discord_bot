//Declarations
const Discord = require("discord.js");
const client = new Discord.Client();

//Log In bot account
client.login("MzM1NTkyMjk0NzA5MzI5OTM3.DEsAQQ.7FgTRnrlgL8rr0ASQGm47sgYA4A");

//Gacha Variables
var characterlessR = ["Characterless R",0];
var characterlessSR = ["Characterless SR",1];

var rares = ["R Alistair", "R Anna", "R Bakura", "R Balurga", "R Barawa", "R Bridgette", "R Cailana", "R Camieux (F)", "R Camieux (E)", "R Chloe", "R Cordelia", "R Daetta", "R Dante", "R Deliford", "R Drusilla", "R Elmelaura", "R Eso", "R Farrah", "R Feather", "R Flesselles", "R Galadar", "R Garma", "R Hazen", "R Herja", "R Ippatsu", "R Jasmine", "R Joel", "R Karteira", "R Karva", "R Krugne", "R Alec", "R La Coiffe", "R Lamretta", "R Leonora", "R Lowain", "R Lunalu", "R Mary", "R Nene", "R Norcel", "R Pavidus", "R Petra", "R Philisophia", "R Randall", "R Richard", "R Rosamia", "R Rosine", "R Ryan", "R Stan", "R Suframare", "R Tanya", "R Thelonim", "R Vanzza", "R Vermeil", "R Viceroy", "R Volenna", "R Will", "R Yodarha", "R Zehek", "Angelie", "Belle", "Bonethorn", "Cavebat", "Crawler", "Crusher", "Dragonflair", "Ghost light", "Hornbird", "Imp", "Jawfish", "Lumacie Griffin", "Mandrake", "Minotaur", "Purgatorian", "Rivacuda", "Rodfly", "Skeleton", "Sleepyhead", "Slime", "Swordshark", "Twilight Devil", "Venom Lancer", "Walking Torch"];

var superRares = ["SR Alec", "SR Almeida", "SR Ange", "SR Anna", "SR Arusha", "SR Baotorda", "SR Carren", "SR Claudia", "SR Cucouroux", "SR Daetta", "SR Dante", "SR Danua", "SR Deliford", "SR Dorothy", "SR Ejaeli", "SR Elmott", "SR Elta", "SR Erin", "SR Eso", "SR Ezecrain", "SR Farrah", "SR Feather", "SR Ferry", "SR Galadar", "SR Gayne", "SR Goblin Mage", "SR Hazen", "SR Helnar", "SR Herja", "SR J.J.", "SR Jamil (E)", "SR Jamil (D)", "SR Jasmine", "SR Jeanne D'Arc", "SR Jessica", "SR Johann", "SR Keehar", "SR Ladiva", "SR Laguna", "SR Lamretta (E)", "SR Lamretta (W)", "SR Lucius (D)", "SR Lucius (F)", "SR Ludmila", "SR Mariah", "SR Mary", "SR Milleore", "SR Mimlemel", "SR Mimlemel and Stumpeye", "SR Mina", "SR Mishra", "SR Noa", "SR Pengy", "SR Predator", "SR Redluck", "SR Rosamia", "SR Ryan", "SR Sahli Lao", "SR Sen", "SR Sevastien", "SR Shao", "SR Sig", "SR Soriz", "SR Sutera (W)", "SR Sutera (F)", "SR Tanya", "SR Teena", "SR Therese", "SR Tyre", "SR Ulamnuran", "SR Vane", "SR Vermeil", "SR Vira", "SR Will", "SR Yaia", "SR Zaja", "Angelie Cascade", "Aquamarine Carbuncle", "Clay Golem", "Doomworm", "Elmenhilde Windsprite", "Elusious Windwyrm", "Garnet Carbuncle", "Golem", "Griffin", "Hellhound", "Hydra", "Myconid", "Onyx Carbuncle", "Opal Carbuncle", "Pixie", "Ruination Gargoyle", "Stone Golem", "Vrazarek Firewyrm", "Wilinus Icewyrm", "Wyvern", "Zircon Carbuncle"];

var ssrares = ["SSR Agielba", "SSR Albert", "SSR Altheia", "SSR Aliza", "SSR Altair", "SSR Amira", "SSR Anthuria", "SSR Aoidos", "SSR Arriet", "SSR Arulumaya", "SSR Ayer", "SSR Baotorda", "SSR Beatrix", "SSR Cagliostro(E)", "SSR Cagliostro(D)", "SSR Carmelina", "SSR Catherine", "SSR Cerberus", "SSR Charlotta", "SSR Chat Noir", "SSR Clarisse (F)", "SSR Clarisse (L)", "SSR De La Fille (L)", "SSR De La Fille (E)", "SSR Eustace", "SSR Feena", "SSR Ferry", "SSR Forte", "SSR Gawain", "SSR Ghandagoza", "SSR Grea",  "SSR Hallessena", "SSR Heles", "SSR Izmir", "SSR Jeanne D'Arc (L)", "SSR Jeanne D'Arc (D)", "SSR Juliet", "SSR Korwa", "SSR Lady Grey", "SSR Lady Katapillar and Vira", "SSR Lancelot", "SSR Lennah", "SSR Lilele", "SSR Lily", "SSR Magisa", "SSR Marquiares", "SSR Melissabelle", "SSR Melleau", "SSR Metera (W)", "SSR Metera (F)", "SSR Narmaya", "SSR Nemone", "SSR Nezahualpilli", "SSR Percival", "SSR Petra", "SSR Razia", "SSR Romeo", "SSR Rosamia", "SSR Sara", "SSR Sarunan (L)", "SSR Sarunan (D)", "SSR Scathacha", "SSR Seruel", "SSR Seigfried", "SSR Silva", "SSR Societte (W)", "SSR Societte (F)", "SSR Sophia", "SSR Vane", "SSR Vania", "SSR Vaseraga", "SSR Veight", "SSR Vira", "SSR Yggdrasil", "SSR Yngwie", "SSR Yodarha", "SSR Yuel", "SSR Yuisis", "SSR Zahlhamelina", "SSR Zeta (F)", "SSR Zeta (D)", "SSR Black Knight", "SSR Drang", "SSR Eugen", "SSR Io", "SSR Katalina", "SSR Lecia", "SSR Lucio", "SSR Orchid", "SSR Rackam", "SSR Rosetta", "SSR Sturm", "Anubis", "Aphrodite", "Apollo", "Athena", "Baal", "Bonito", "Ca Ong", "Cybelle", "Dark Angel Olivia", "Garuda", "Garula, Shining Hawk", "Gilgamesh", "Grani", "Hector", "Lich", "Macula Marius", "Medusa", "Morrigna", "Nacht", "Neptune", "Nezha", "Oceanus", "Odin", "Prometheus", "SQuetzalcoatl", "Rose Queen", "Satan", "Satyr", "Setekh", "Sethlans", "Siren", "Tezcatlipoca", "Thor", "Twin Elements", "Typhon", "Vortex Dragon", "Zaoshen", "Agni", "Bahamut", "Europa", "Godsworn Alexiel", "Grand Order", "Hades", "Kaguya", "Lucifer", "Shiva", "Titan", "Varuna", "Zephyrus", "Zeus"];
//Reminder Variables
var reminderTime = [0 , 0]
var reminderChannel;
var interval;
//UNF Variables
var CarriesList = [];
var SupportList = [];
var partnersList = [];
var partnersString = " ";
var freeCarry = [];
var hasRemovedPlayer = false;
var resultsFinalized = false;
//Simple Message Response Object
let responseObject = {
"ayy": "lmao",
"heles": "alimas",
"hey": "i capped"
};

//Client Start notifications
client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  // Set the prefix
  let prefix = "smd.";

  //Message Response Object
  if(responseObject[message.content]) {
    message.channel.send(responseObject[message.content]);
  }
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;


  ///////////////////////
  //        UNITE      //
  //        AND        //
  //        FIGHTO     //

  //Carry List
  if(message.content.startsWith(prefix + "addcarry")){
    const args = message.content.split(/\s+/g).slice(1);
    if (args[0] == null)
    {
      message.channel.send("Please enter a valid name");
    }
    else{
      var exist = false;
      for(var i=0;i<CarriesList.length;i++)
      {
        if (CarriesList[i]==args[0])
        {
          exist = true;
        }
      }
      if(exist)
      {
        message.channel.send("Player already exists in carry list");
      }
      else {
        CarriesList.push(args[0]);
        message.channel.send("SMD has added " +args[0]+ " to the Carries list");
        message.channel.send("Current Carry List: " + CarriesList.toString());
      }
    }
  }


  if(message.content.startsWith(prefix + "removecarry")){
    const args = message.content.split(/\s+/g).slice(1);
    hasRemovedPlayer=false;
    if (args[0] == null)
    {
      message.channel.send("Please enter a valid name");
    }
    else{
      for(var i = 0; i < CarriesList.length; i++)
      {
        if(args[0] == CarriesList[i])
        {
          CarriesList.splice(i,1);
          hasRemovedPlayer = true;
        }
      }
      if(hasRemovedPlayer == true)
      {
        message.channel.send("SMD has removed " + args[0] +(" from the Carry list"))
        message.channel.send("Current Carry List: " + CarriesList.toString());
        hasRemovedPlayer = false;
      }
      else
      {
        message.channel.send("Error, player name not found :P");
      }
    }
  }

//Support List
if(message.content.startsWith(prefix + "addsupport")){
  const args = message.content.split(/\s+/g).slice(1);
  if (args[0] == null)
  {
    message.channel.send("Please enter a valid name");
  }
  else{
    var exist = false;
    for(var i=0;i<SupportList.length;i++)
    {
      if (SupportList[i]==args[0])
      {
        exist = true;
      }
    }
    if(exist)
    {
      message.channel.send("Player already exists in Support List");
    }
    else{
      SupportList.push(args[0]);
      message.channel.send("SMD has added " +args[0]+ " to the Support list");
      message.channel.send("Current Support List: " + SupportList.toString());
    }
  }
}

if(message.content.startsWith(prefix+ "playerlist")){
  message.channel.send("Current Carry List: " + CarriesList.toString() + "\nCurrent Support List: " + SupportList.toString());
}

if(message.content.startsWith(prefix + "removesupport")){
  const args = message.content.split(/\s+/g).slice(1);
  if (args[0] == null)
  {
    message.channel.send("Please enter a valid name");
  }
  else{
    for(var i = 0; i < SupportList.length; i++)
    {
      if(args[0] == SupportList[i])
      {
        SupportList.splice(i,1);
        hasRemovedPlayer = true;
      }
    }
    if(hasRemovedPlayer == true)
    {
      message.channel.send("SMD has removed " + args[0] +(" from the Support list"))
      message.channel.send("Current Support List: " + SupportList.toString());
      hasRemovedPlayer = false;
    }
    else
    {
      message.channel.send("Error, player name not found :P");
    }
  }
}

/*if(message.content.startsWith(prefix + "partnerresults")){
  var totalTeams = 0;
  if(resultsFinalized){
    message.channel.send("Partner List has already been generated");
//    message.channel.send("List of Partners: ")
//    for(var i = 0; i<partnersList.length;i++)
//    {
//      message.channel.send((i+1) + ". "+ partnersList[i]);
//    }
//    message.channel.send("Free Carry:" + freeCarry.toString());
  }
  else{
    partnersString = " ";
    if(CarriesList.length>SupportList.length)
    {
      totalTeams = SupportList.length;
    }
    else {
      totalTeams = CarriesList.length;
    }
    var diff = 0;
    var randCarryList = CarriesList;
    var randSupportList = SupportList;
    var partnersList = [];
    randCarryList.sort(function(a, b){return 0.5 - Math.random()});
    randSupportList.sort(function(a, b){return 0.5 - Math.random()});
    for(var i = 0; i<totalTeams;i++){
      partnersList.push(randCarryList[i]+", "+randSupportList[i]);

      console.log("test");
    }

    if(CarriesList.length>SupportList.length)
    {
      diff = CarriesList.length - SupportList.length;
      for(var i = 0;i<diff;i++)
      {
        freeCarry.push(CarriesList[SupportList.length+i]);
      }
    }
    else {
      diff = SupportList.length-CarriesList.length;
      var k = 0
      for(var i = 0; i<diff;i++)
      {
        if(i>=partnersList.length)
        {
          k=0;
        }
        partnersList[k] = partnersList[k]+", "+SupportList[CarriesList.length+i];
        k++;
      }
    }

    for(var i = 0; i<partnersList.length;i++)
    {
      partnersString += "\n"+(i+1)+": "+ partnersList[i];
    }
    message.channel.send("List of Partners: "+ partnersString);
    //message.channel.send("Free Carry:" + freeCarry.toString());

  }
  resultsFinalized = true;
}*/

if (message.content.startsWith(prefix + "resetpartners")) {
  resultsFinalized = false;
  message.channel.send("You can use partnerresults command again to refresh partners");
}
if(message.content.startsWith(prefix + "partnerresults")){
  //message.channel.send("Figure it out yourself");
  if(!resultsFinalized){
    var totalTeams =0;
    var doubleCarry = false;
    var carryCount = 0;
       totalTeams = Math.floor(CarriesList.length/2);
       doubleCarry = true;
      partnersList = [];
      var final = " ";


    if(doubleCarry)
    {
      for(var i = 0; i<totalTeams;i++)
      {
        partnersList.push(CarriesList[i*2]+", "+CarriesList[i*2+1]);
        carryCount += 2;
      }
      diff = SupportList.length-partnersList.length;
      var k = 0
      for(var i = 0; i<SupportList.length;i++)
      {
        if(k>=partnersList.length)
        {
          k=0;
        }
        partnersList[k] = partnersList[k]+", "+SupportList[i];
        k++;
      }
      if(CarriesList.length>carryCount){
          freeCarry.push(CarriesList[carryCount]);
      }
      for(var i = 0; i<partnersList.length;i++){
        final+="\nTeam "+(i+1)+": "+partnersList[i];
      }
      if(freeCarry.length>0){
        message.channel.send("Team Results: "+final+"\nUnassigned: "+freeCarry[0]);
      }
      else {
        message.channel.send("Team Results: "+final);
      }
    }
    /*else{
        partnersString = " ";
        if(CarriesList.length>SupportList.length)
        {
          totalTeams = SupportList.length;
        }
        else {
          totalTeams = CarriesList.length;
        }
        var diff = 0;
        var randCarryList = CarriesList;
        var randSupportList = SupportList;
        var partnersList = [];
        randCarryList.sort(function(a, b){return 0.5 - Math.random()});
        randSupportList.sort(function(a, b){return 0.5 - Math.random()});
        for(var i = 0; i<totalTeams;i++){
          partnersList.push(randCarryList[i]+", "+randSupportList[i]);

          console.log("test");
        }

        if(CarriesList.length>SupportList.length)
        {
          diff = CarriesList.length - SupportList.length;
          for(var i = 0;i<diff;i++)
          {
            freeCarry.push(CarriesList[SupportList.length+i]);
          }
        }
        else {
          diff = SupportList.length-CarriesList.length;
          var k = 0
          for(var i = 0; i<diff;i++)
          {
            if(i>=partnersList.length)
            {
              k=0;
            }
            partnersList[k] = partnersList[k]+", "+SupportList[CarriesList.length+i];
            k++;
          }
          for(var i = 0; i<partnersList.length;i++)
          {
            partnersString += "\n"+(i+1)+": "+ partnersList[i];
          }
          message.channel.send("List of Partners: "+ partnersString);
          message.channel.send("Free Carry:" + freeCarry.toString());
        }


      }*/

    resultsFinalized = true;
  }
}





  //Ping - Pong
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }

  //Single Roll
  if(message.content.startsWith(prefix+"roll")){
    var rollResult = roll();
    message.channel.send("<@"+message.author.id +"> You Got: \n"+rollResult[0]);
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
      message.channel.send("<@"+message.author.id +"> You Got: \n"+resultString+"");
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
  if(message.content.startsWith(prefix+"clearreminder")){
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
    var pictureName = "lewd "+ (Math.floor(Math.random()*(6-1+1))+1) +".png";
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
  if(message.content.startsWith(prefix+"lolithonk")){
    var pictureName = "thinking0.jpg";
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Thinking/" + pictureName});
  }
  if(message.content.startsWith(prefix+"placenta")){
    var pictureName = "placenta.jpg";
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/" + pictureName});
  }
  if(message.content.startsWith(prefix+"korwa")){
    pictureName = "korwa_"+ (Math.floor(Math.random()*(4-1+1))+1) +".png";
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Korwa/" + pictureName});
  }

  if(message.content.startsWith(prefix+"pots")){
    pictureName = "pots_"+ (Math.floor(Math.random()*(2-1+1))+1) +".png";
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/Pots/" + pictureName});
  }

  if(message.content.startsWith(prefix+"getalife")){
    pictureName = "getlife.png"
    message.channel.send("IMAGE!!", {file:"D:/AnimeImages/Photo Database/" + pictureName});
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
      message.channel.send("Author: <@" + message.author.id + ">");
      console.log(args[0]);
      console.log(message.author.id);
    }
    if(message.content.startsWith("@335592294709329937"))
    {
      message.channel.send("it works man");
    }
    //Rak
    if (message.content.startsWith(prefix + "prayasrak")) {
    message.channel.send(":expressionless:\n:pray:");
  }


});

//Gacha Function
function roll(sr)
{
  var rand = Math.random()
  var returnArray = ["",0];
  if(!sr){
    if(rand<0.79){
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
    else if(rand>0.79&&rand<0.94){
      var rand2 = Math.floor(Math.random() * (15 - 0 +1)) + 1;
      rand = Math.floor(Math.random() * (superRares.length - 0)) + 0;
      returnArray = [":large_blue_diamond:" + superRares[rand],1]
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
    returnArray = [":large_blue_diamond:"+superRares[rand],1]
    if(rand2<15){
      return characterlessSR;
    }
    else{
      return returnArray;
    }
  }
}
function pairUp()
{
  if(CarriesList.length>SupportList.length)
  {
    totalTeams = SupportList.length;
  }
  else {
    totalTeams = CarriesList.length;
  }
  var diff = 0;
  var randCarryList = CarriesList;
  var randSupportList = SupportList;
  var partnersList = [];
  randCarryList.sort(function(a, b){return 0.5 - Math.random()});
  randSupportList.sort(function(a, b){return 0.5 - Math.random()});
  for(var i = 0; i<totalTeams;i++){
    partnersList.push(randCarryList[i]+", "+randSupportList[i]);
  }

  if(CarriesList.length>SupportList.length)
  {
    diff = CarriesList.length - SupportList.length;
    for(var i = 0;i<diff;i++)
    {
      freeCarry.push(CarriesList[SupportList.length+i]);
    }
  }
  else {
    diff = SupportList.length-CarriesList.length;
    var k = 0
    for(var i = 0; i<diff;i++)
    {
      if(i>=partnersList.length)
      {
        k=0;
      }
      partnersList[k] = partnersList[k]+", "+SupportList[CarriesList.length+i];
      k++;
    }
  }
}
