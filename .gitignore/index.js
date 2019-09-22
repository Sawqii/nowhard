const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NjI1MzIxODE5NzI5Mjk3NDI4.XYd22w.eWk01utdVj_s3Sn7s80kR9omb2I");

client.on("guildMemberAdd", user =>{
    user.guild.channels.get("602592899393388617").send("Bienvenue **" + user + "** sur le serveur **" + user.guild.name + "** !")
})
