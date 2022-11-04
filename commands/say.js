const Discord = require('discord.js');

module.exports = {
    name: "Say",

    async execute(client, message, args, cmd) {
        if (!message.member.roles.cache.has('1000641360568791113')) return;
        await message.channel.sendTyping();

        const Embed1 = new Discord.MessageEmbed()
        Embed1.setColor('RANDOM')
        Embed1.setDescription(`${args.join(" ")}`)

        const Embed2 = new Discord.MessageEmbed()
        Embed2.setColor('RED')
        Embed2.setDescription(`> There isn't any message to send`)

        if (!args[0]) {
            await message.reply({ embeds: [Embed2] })
        } else {
            await message.channel.send({ embeds: [Embed1] }).then(async () => { try { await message.delete() } catch { } })
        }
    },
};