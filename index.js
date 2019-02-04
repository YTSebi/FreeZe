const Commando = require("discord.js-commando");
const bot = new Commando.Client();
const TOKEN = "NTQxNDA4MjE4Nzk5MTQ0OTcw.DzfGJA.Mej9OAWgWiguHiVjAgyW0-G42SE";

bot.registry.registerGroup("profile", "Profile");
bot.registry.registerGroup("music", "Music");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

global.servers = {};



// ---------- Nachricht beim Joinen in DM ----------


bot.on("guildMemberAdd" , function(member)
{
    member.send(" Du bist dem Team FreeZe Discord beigetreten, Viel Spaß noch :blush: . Hoffentlich bleibst du auch lange :smiley: :wink:");
});



// ---------- Info (updaten) ----------


bot.on("message", function(message){
    if(message.content == ">info")
    {
        message.channel.sendMessage("``` Team FreeZe \n \n \n \n \n \n \n \n hosted by TonicProvider© \n Programmed by Sebi#9077```");      // " \n " IST EIN ZEILENUMBRUCH!!!
    }



// ---------- Commands ----------


    if(message.content == ">games")
    {
        message.channel.sendMessage("```Wir unterstützen verschiendene games: \n \n Fortnite \n Rocket leage \n Paladins \n \n und vieles mehr kommt bald```");
    }

    if(message.content == ">tryout")
    {
        message.channel.sendMessage("```termine```");
    }

    if(message.content == ">anforderungen")
    {
        message.channel.sendMessage("```\n Diese Anforderungen solltest du erfüllen, um in den Clan zu kommen! \n \n - Min. 60 Wins (ausnahmen) \n - Min. 5% Win Chance (ausnahmen) \n - Min. 1,0 K/D (ausnahmen) \n - Teamspieler \n - Freundlichkeit \n - Mindestens 13 Jahre Alt (ausnahmen) \n \n Getestet wirst du dann in einer Test Arena die von @Sebi#9077 bereitgestellt wurde. Die tests bestehen aus: \n 1v1 gegen einen Tester \n und \n ein Solo vs Duo \n \n \n Der Sinn dieser tests besteht nicht darin alle zu gewinnen oder auf die meisten kills zu gehen,\n er besteht darin zu sehen wie du spielst damit wir dich einer Gruppe zuordnen können```");
    }

    if(message.content == ">scrims")
    {
        message.channel.sendMessage("https://discord.gg/54WqXf");
    }

    if(message.content == ">musik")
    {
        message.channel.sendMessage("``` Voice Channel Commands sind mit \"!\" anzuführen \n \n \n Starte die Musik mit: \n \n !join [YouTube link von deinem Video] \n \n \n bitte beachte dass du dich für diesen Command in einem Voicechannel befinden musst!```");
    }

});




// ---------- Laden Status ----------
bot.on("ready" ,function(){

    bot.user.setPresence({ game: { name: "FreeZe Clan (>)", type: "streaming", url: "https://www.twitch.tv/monstercat"}});

    console.log("Laden Erfolgreich");
})

bot.login(TOKEN);