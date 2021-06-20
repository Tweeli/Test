const discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
 
 
                    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":x:**Sorry, jij kan dit niet.**");
 
                    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Ik heb hier geen permissions voor.");
 
                    if (!args[1]) return message.reply("Geen gebruiker opgegeven.");
 
                    if (!args[2]) return message.reply("Gelieve een redenen op te geven.");
 
                    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
 
                    var reason = args.slice(2).join(" ");
 
                    if (!banUser) return message.reply("Kan de gebruiker niet vinden.");
 
 
 
                            banUser.ban(reason).catch(err => {
                                if (err) return message.channel.send(`Er is iets foutgegaan.`);
 
 
                            });  
                            return message.channel.send("Ik heb de gebruiker gebanned!");
}
 
module.exports.help = {
    name: "ban",
    aliases: ["stout"]
}
