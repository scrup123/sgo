const { readdirSync } = require('fs');
const { Collection } = require('discord.js');

client.MessageCommands = new Collection();

console.log(`Loading Events...`);
const events = readdirSync(`./events/`).filter(file => file.endsWith('.js'));
for (const file of events) {
  const event = require(`./events/${file}`);
  client.on(file.split('.')[0], event.bind(null, client));
  delete require.cache[require.resolve(`./events/${file}`)];
};

console.log(`Loading Message Commands...`);
const commands = readdirSync(`./commands/`).filter(files => files.endsWith('.js'));
for (const file of commands) {
  const command = require(`./commands/${file}`);
  client.MessageCommands.set(command.name.toLowerCase(), command);
  delete require.cache[require.resolve(`./commands/${file}`)];
};