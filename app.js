// Import necessary discord classes
const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// Create a client instance
const client = new Client({ intents:[GatewayIntentBits.Guilds] });

// When client is ready, run this code once
client.once("ready", () => {
    console.log("Ready!");
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName == "help") {
        await interaction.reply("You used the help command!");
    }
    else if (commandName == "weekly") {
        await interaction.reply("You used the weekly command!");
    }
    else if (commandName == "daily") {
        await interaction.reply("You used the daily command!");
    }
});

client.login(token);