const discord = require("discord.js");

module.exports.run = async(discordBot, message, args) => {


    var avatarEmbed = new discord.MessageEmbed()
        .setDescription(`Dit ticket is geclaimd door ${member.user.tag}. Niemand van het staff-team mar hier nog in praten zonder de toestemming van ${member.user.tag}`)
        .setColor("#7bb54e")
        .setFooter('Created by Tweeli.#5298')
    message.channel.send(avatarEmbed)   
    

}

module.exports.help = {
    name: "claim",
    aliases: ["Claim."]
}
