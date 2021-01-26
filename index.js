const discord = require("discord.js");
const botConfig = require("./botconfig.json");


const fs = require("fs");
//client//
const client = new discord.Client();
client.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Kon geen files vinden.");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen.`);

        client.commands.set(fileGet.help.name, fileGet);


    })

})
client.login(botConfig.token);

client.on("ready", async () => {
    
console.log(`${client.user.username} Is online!`)
client.user.setActivity("Testen.", {type: "Playing"});

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);


});

client.login(process.env.token);