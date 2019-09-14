const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready",function() {
    bot.user.setGame("Kory, k!help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NjAxNzMwMTk1OTkyNjA4NzY4.XXyyAw.hqfwfLf6oAhXrV5vQqzZDlF23ek");
