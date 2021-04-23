const Discord = require("discord.js");
const client = new Discord.Client();
const messageEmbed = require('./messageEmbed')

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('message', msg => {
    console.log(msg)
    if (msg.content.toLocaleLowerCase() === 'hola') {
      msg.reply('hola');
      msg.channel.send(messageEmbed)
      msg.react('👍')
    }
});  

client.on('message', msg => {
    console.log(msg)
    if (msg.content.toLocaleLowerCase() === 'xd') {
      msg.reply('xD');
    }
});  

client.on('ready', () =>{
    console.log(`Conectando ${client.user.tag}`);
});

client.login(DISCORD_TOKEN);


