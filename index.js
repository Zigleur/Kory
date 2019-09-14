const Discord = require("discord.js");
const cient = newDiscord.Client();

clientInformation.login(process.inv.TOKEN);

var prefix = ("k!");

clientInformation.onLine("message", (message) => {

    if(message.content === "bonjour") {
        message.channel.send("Salutation!")
    }

    if(message.content === prefix + "help"){
        message.content.send("Veux-tu de l'aide ?")
    }


});
