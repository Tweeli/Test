const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan deze command niet gebruiken.");
        if(!args[0]) return message.channel.send("Zet erbij hoeveel berichten je wil gebruiken.");
        message.delete();
        message.channel.bulkDelete(args[0]).catch(e => { message.channel.send("Het maximum berichten dat je kan deleten is 100.")});
        message.channel.send(`Het deleten is gelukt! \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));

}

module.exports.help = {
    name: "clear",
    description: "",
    category: ""
}