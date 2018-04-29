const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("-")

bot.on('ready', function() {
    bot.user.setGame("Command: !help");
    console.log("Connected");
});

client.on('message', message => {
    if (message.content === '-ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === '-bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === '-createur') {
    	message.reply('Yagouroko!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
