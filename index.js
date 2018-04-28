const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "-";

client.login("NDM5ODc5NTk0NTc3NzU2MTcw.DcaQ7g.9yK4pgKXI5Ycuu9OCMSakEJc7z8");

client.on('message', message => {
    if (message.content === '-createur') {
    	message.reply('Yagouroko!');
  	}
});