const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

try{

   var text = "**Tweeli.#5298** \n\n *Frog. commands:* \n > !Hallo - Zegt hallo terug. \n > !Botinfo - Geeft info weer over de bot. \n > !Ping - Geeft weer hoeveel ping je hebt op dat moment.";

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
