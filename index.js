ient, GatewayIntentBits, Events } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.once(Events.ClientReady, c => console.log(`✅ Online: ${c.user.tag}`));
client.on(Events.MessageCreate, async msg => {
  if (msg.author.bot) return
