const discord = require("discord.js");

module.exports.run = async(discordBot, message, args) => {

    var member = message.guild.member(message.mentions.users.first() || discordBot.users.cache.get(args[0]));
    if(!member) member = message.member;

    var avatarEmbed = new discord.MessageEmbed()
        .setTitle(`Profielfoto van ${member.user.tag}`)
        .setImage(member.user.displayAvatarURL({dynamic : true, size: 4096}))
        .setColor("#7bb54e")
    message.channel.send(avatarEmbed)   

}

module.exports.help = {
    name: "av",
    aliases: ["av", "pf", "profielfoto", "pfp"]
}