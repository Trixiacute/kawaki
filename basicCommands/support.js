const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.gg/FcpVsPweRm';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\nWe will be there for you anytime ❤️`)
            .setThumbnail(`https://images-ext-1.discordapp.net/external/QjpTm0VMT3oiKtG1eyon7jinTPCaSWu-3j41HltFAik/%3Fcid%3D73b8f7b1nn2y44dd53rdohlr7cunwsys6gp1kyj093flu9ke%26ep%3Dv1_gifs_gifId%26rid%3Dgiphy.mp4%26ct%3Dg/https/media4.giphy.com/media/UP0SMU6rX1utSOcgDs/giphy.mp4`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};


