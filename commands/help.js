const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

try{

   var text = "**Frog.** \n\n *commands:* \n >hallo - Zegt hallo terug. \n >botinfo - Info over de bot. \n >ping - Zegt hoeveel ping je hebt. \n >leden - Zegt hoeveel leden er op dat moment in de server zitten. \n >ticket - Je maakt een ticket aan. \n >serverinfo - Geeft info weer van de server.";

   message.author.send(text);

   message.reply("Alle commands kan je vinden in je dm.")

}catch(error){
    message.reply("Er is iets fout gelopen.");
}

}

module.exports.help = {
    name: "help",
    description: "",
    category: ""
}