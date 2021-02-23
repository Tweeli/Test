const discord = require("discord.js");

module.exports.run = async(discordBot, message, args) => {

    var value = ["kop", "munt"];

    var result = value[Math.floor(Math.random() * value.length)];

    var resultEmbed = new discord.MessageEmbed()
        .setDescription(`:coin: En het is geworden... ${result}!!!!`)
        .setColor("#E67E22")
    message.channel.send(resultEmbed)
}

module.exports.help = {
    name: "kop_of_munt",
    aliases: ["kom", "kopofmunt"]
} 