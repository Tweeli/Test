const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

return message.channel.send("Deze ticket is door Tweeli. geclaimd. Dus niemand anders mag hier niet aan dit ticket mengen anders komen er gevolgen.");

}

module.exports.help = {
    name: "hallo",
    description: "",
    category: ""
}