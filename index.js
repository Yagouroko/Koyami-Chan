const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "-";

client.login(process.env.TOKEN);

client.on('message', message => {
    if (message.content === '-createur') {
    	message.reply('Yagouroko!');
  	}
});
