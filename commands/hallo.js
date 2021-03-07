const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var avatarEmbed = new discord.MessageEmbed()
    .setDescription("Hallo!")
    .setColor("#7bb54e")
    .setFooter('Created by Tweeli.#5298')
    message.channel.send(avatarEmbed)   

}

module.exports.help = {
    name: "hallo",
    description: "",
    category: ""
}