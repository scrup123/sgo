const Discord = require('discord.js')

module.exports = {
    name: "active",

    async execute(client, message, args, cmd) {
        if (!message.member.roles.cache.has('1000641360568791113')) return;
        const cChannel = client.channels.cache.get('990495944053252177')
        const mMember = message.mentions.members.first()
        const uUser = message.mentions.users.first()
        const trueArgs = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        const errEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle(`Wrong Usage`)
            .setDescription('bayad intori az command estefade koni:\n```\n+active <@mention> <number> <product number>\n```\n**Variables:**\n>>> 1: Nitro Boost 1 Mahe\n2: Nitro Boost 3 Mahe\n3: Nitro Boost 1 Sale\n4: Nitro Classic 1 Mahe\n5: Nitro Classic 1 Sale\n6: YouTube Premium\n7: Netflix Premium\n8: Spotify Premium\n9: SoundCloud Premium')
            .setTimestamp()
            .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 1024 }) });

        if (!mMember || !uUser || !args[2] || !trueArgs.includes(args[2])) return message.channel.send({ content: `${message.author}`, embeds: [errEmbed] }).then((msg) => {
            message.delete()
            setTimeout(() => { msg.delete() }, 10000)
        });

        await uUser.fetch(true)
        const product = {
            '1': 'Nitro Boost 1 Mahe',
            '2': 'Nitro Boost 3 Mahe',
            '3': 'Nitro Boost 1 Sale',
            '4': 'Nitro Classic 1 Mahe',
            '5': 'Nitro Classic 1 Sale',
            '6': 'YouTube Premium',
            '7': 'Netflix Premium',
            '8': 'Spotify Premium',
            '9': 'SoundCloud Premium'
        }

        const Embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`سفارش شماره ${args[1]} انجام شد`)
            .addFields(
                { name: '🛒 Customer:', value: `${mMember} | ${mMember.displayName}`, inline: false },
                { name: '👤 Admin:', value: `${message.member} | ${message.member.displayName}`, inline: false },
                { name: '🛍️ Product:', value: product[args[2]], inline: false },
            )
            .setTimestamp()
            .setThumbnail(mMember.displayAvatarURL({ dynamic: true, size: 1024 }))
            .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true, size: 1024 }) });

        if (uUser.bannerURL() !== null) {
            Embed.setImage(uUser.bannerURL({ dynamic: true, size: 1024 }))
        }

        const button = new Discord.MessageButton().setStyle('LINK').setURL('https://discord.gg/Rar9WwwWNG').setEmoji('🛍️').setLabel('Buy Now')
        const row = new Discord.MessageActionRow().addComponents([button])

        await cChannel.send({ embeds: [Embed], components: [row] }).catch(() => null).then(() => {
            message.delete().catch(() => null);
        })
        await mMember.send({ embeds: [Embed] }).catch(() => null);
        await mMember.roles.add('983324401078534174')
    },
};