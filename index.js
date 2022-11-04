const { Client, Collection } = require('discord.js');

global.client = new Client({ intents: [32767] });

client.MessageCommands = new Collection();
require('./loader');
require('./server');

process.on('unhandledRejection', (reason, p) => {
    console.log('[antiCrash] :: Unhandled Rejection/Catch');
    console.log(reason?.stack, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log('[antiCrash] :: Uncaught Exception/Catch');
    console.log(err?.stack, origin);
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('[antiCrash] :: Uncaught Exception/Catch (MONITOR)');
    console.log(err?.stack, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
    console.log('[antiCrash] :: Multiple Resolves');
    console.log(type?.stack, promise, reason);
});

client.login("MTAwMDgyMzkwMzc2NzI0MDgxNQ.G9aY3y.ZL8jhpGjfgOP5ohSI_showwV-im7hL67xDNu9c");


