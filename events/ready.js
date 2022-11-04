module.exports = async (client) => {
    const Server1 = client.guilds.cache.get('981160271160701049')
    await client.user.setPresence({ activities: [{ name: `${Server1.memberCount} Members`, type: 'WATCHING' }] })

    setInterval(async () => {
        const Server = client.guilds.cache.get('981160271160701049')
        await client.user.setPresence({ activities: [{ name: `${Server.memberCount} Members`, type: 'WATCHING' }] })
    }, 60000)

    console.log(`${client.user.tag} is online!`)
};
