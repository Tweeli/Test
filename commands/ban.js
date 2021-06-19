const Discord = require('discord.js')

    async run (bot, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You cant use this command!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.ban <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "No reason given";

        const embed = new Discord.MessageEmbed()
        .setTitle(`You were banned from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("You need to specify a user to ban");

        if(!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

        if(!mentionMember.bannable) return message.channel.send("I was unable to ban this user!");

        await mentionMember.send(embed);
        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send("Successfully banned: " + mentionMember.user.tag));
    }
}

module.exports.help = {
    name: "ban",
    description: "ban members",
    category: ""
}
