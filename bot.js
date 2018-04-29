const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = ("-")

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("```Liste des commandes: \n !burgerbot \n !fabriquant \n !burgermusic```");
    }

    if (message.content === prefix + "burgerbot"){
        message.channel.sendMessage("```Création du bot le _11/12/2017_ à _13h57_```");
        console.log("Commande effectué");
    }

    if (message.content === prefix + "fabriquant"){
        message.channel.sendMessage("```Ce bot a été crée par MhBurgerKing```");
        console.log("Commande effectué");
    }
    
    if (message.content === prefix + "burgermusic play"){
        message.channel.sendMessage("```BurgerMusic bientôt disponible !```");
        console.log("Commande effectué");
    }
    
    if (message.content === prefix + "burgermusic stop"){
        message.channel.sendMessage("```BurgerMusic bientôt disponible !```");
        console.log("Commande effectué");
    }
    
    if (message.content === prefix + "burgermusic next"){
        message.channel.sendMessage("```BurgerMusic bientôt disponible !```");
        console.log("Commande effectué");
    }
    
    if (message.content === prefix + "burgermusic"){
        message.channel.sendMessage("```BurgerMusic:\n !burgermusic play\n !burgermusic next\n !burgermusic stop```");
        console.log("Commande effectué");
    }
});
client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame("Test")
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
