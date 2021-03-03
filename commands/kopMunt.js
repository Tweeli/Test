const discord = require("discord.js");

module.exports.run = async(discordBot, message, args) => {

    var value = ["kop", "munt"];

    var result = value[Math.floor(Math.random() * value.length)];

    var resultEmbed = new discord.MessageEmbed()
        .setDescription(`:coin: En het is geworden... ${result}!`)
        .setColor("#7bb54e")
    message.channel.send(resultEmbed)
}

module.exports.help = {
    name: "kom",
    aliases: ["kom", "kopofmunt"]
} 