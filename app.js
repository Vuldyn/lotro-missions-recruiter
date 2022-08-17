// Import necessary discord classes
const { Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// Create a client instance
const client = new Client({ intents:[GatewayIntentBits.Guilds] });

// When client is ready, run this code once
client.once("ready", () => {
    console.log("Ready!");
});

client.login(token);