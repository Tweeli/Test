const discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
        const arg = message.content.slice(prefix.length).split(/ +/);
 
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");
 
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Geen perms");
 
        if (!args[1]) return message.reply("Geen gebruiker opgegeven.");
 
        if (!args[2]) return message.reply("Gelieve een redenen op te geven.");
 
        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
 
        var reason = args.slice(2).join(" ");
 
        if (!kickUser) return message.reply("Kan de gebruiker niet vinden.");
 
        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(kickUser.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(`** Gekickt:** ${kickUser} (${kickUser.id})
            **Gekickt door:** ${message.author}
            **Redenen: ** ${reason}`);
 
        var embedPrompt = new discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor("Gelieve te reageren binnen 30 sec.")
            .setDescription(`Wil je ${kickUser} kicken?`);
 
 
        message.channel.send(embedPrompt).then(async msg => {
 
            var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);
 
 
            if (emoji === "✅") {
 
                msg.delete();
 
                kickUser.kick(reason).catch(err => {
                    if (err) return message.channel.send(`Er is iets foutgegaan.`);
                });
 
                message.reply(embed);
 
            } else if (emoji === "❌") {
 
                msg.delete();
 
                message.reply("Kick geanuleerd").then(m => m.delete(5000));
 
            }
 
        });
    }

}
 
module.exports.help = {
    name: "kick",
}
