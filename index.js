const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '-createur') {
    	message.reply('Yagouroko!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
