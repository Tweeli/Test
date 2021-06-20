const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

try{

   var text = "**Tweeli.#5298** \n\n *Frog. commands:* \n > !Hallo - Zegt hallo terug. \n > !Botinfo - Geeft info weer over de bot. \n > !Serverinfo - Geeft info weer over de server. \n > !Ping - Geeft weer hoeveel ping je hebt op dat moment. \n > !Ledencount - Geeft het aantal leden weer dat er op dat moment in de server zitten. \n > !New - Je maakt een ticket aan.";

   message.author.send(text);

   message.reply("Alle commands kan je vinden in je DM.")

}catch(error){
    message.reply("Er is iets fout gelopen.");
}

}

module.exports.help = {
    name: "commands",
    description: "",
    category: ""
}
