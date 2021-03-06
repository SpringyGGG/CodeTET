const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');

class BotInfo extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'util',
            memberName: 'info',
            description: 'Info about the bot.'
        });
    }

    async run(message, args)
    {
        var myInfo = new Discord.RichEmbed()
            .setTitle("CodeTET Bot")
            .setDescription("CodeTET is a multiconstructual bot that allows you to have fun, listen to music, play games, and more!")
            .setColor(0x04FF9B)
            .setURL("")

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = BotInfo;