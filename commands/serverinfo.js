const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Zet de beschrijving")
            .setColor("#379140")
            .addField("Bot naam", "Frog.")
            .addField("Je bent deze server gejoind op", message.member.joinedAt)
            .addField("Totaal memebers", message.guild.memberCount);
            .setFooter('Created by Tweeli.#5298')
        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}
