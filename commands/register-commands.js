const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { clientID, guildID, token } = require("../config.json");

const commands = [
    new SlashCommandBuilder().setName("help").setDescription("Provides information about the use of the bot."),
    new SlashCommandBuilder().setName("weekly").setDescription("Sends you a list of the most efficient n missions to do this week."),
    new SlashCommandBuilder().setName("daily").setDescription("Sends you a breakdown of the missions available today, in efficiency order."),
]
    .map(command => command.toJSON());

const rest = new REST({ version: "10" }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);