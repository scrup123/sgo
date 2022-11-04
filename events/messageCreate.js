const prefix = '+';

module.exports = async (client, message) => {

  if (!message.channel.type === 'DM' || message.content.startsWith(prefix)) {

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.MessageCommands.get(cmd) || client.MessageCommands.find(a => a.aliases && a.aliases.includes(cmd));
    if (!command || !cmd || !args) return;
    await command.execute(client, message, args, cmd);
  }
};