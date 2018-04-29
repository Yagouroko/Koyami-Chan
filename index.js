const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-"

client.on('ready', () => {
	client.user.setGame(" -help https://discord.gg/xTR66sm ")
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login("NDM5ODc5NTk0NTc3NzU2MTcw.DcaQ7g.9yK4pgKXI5Ycuu9OCMSakEJc7z8");
