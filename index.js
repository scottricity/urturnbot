import { Client , IntentsBitField } from "discord.js";
import {SlashCreator , GatewayServer} from "slash-create";
import path from "path";
import {fileURLToPath} from "url";
import fs from "fs";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Dev Functions
import {config} from "dotenv";
config()

const client = new Client({
    intents: new IntentsBitField(3276799).toArray()
})

const creator = new SlashCreator({
    applicationID: process.env.APP_ID,
    publicKey: process.env.PUBLIC_KEY,
    token: process.env.TOKEN,
    client
})

creator
    .withServer(
        new GatewayServer(
            (handler) => client.ws.on("INTERACTION_CREATE", handler)
        )
    )
    .registerCommandsIn(path.join(__dirname, "commands"))
    .syncGlobalCommands()

client.login(process.env.TOKEN).then(success => {
    if (success) {
        console.log("Bot online.")
    }
})