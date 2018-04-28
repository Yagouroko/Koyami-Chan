const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "-";

client.on('message', message => {
    if (message.content === '-createur') {
    	message.reply('Yagouroko!');
  	}
});
