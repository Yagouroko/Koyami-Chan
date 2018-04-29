const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
	client.user.setGame(" -help https://discord.gg/xTR66sm ")
    console.log('I am ready!');
});

var prefix = "-";

client.login(process.env.TOKEN);

client.on('message', message => {
    if (message.content === '-createur') {
    	message.reply('Yagouroko!');
  	}
});
