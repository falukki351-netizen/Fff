var discord = require("discord.js");
var http = require("http");
var client = new discord.Client({
  intents: [
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildMessages
  ]
});
client.once("ready", function(c) {
  console.log("Bot online: " + c.user.tag);
});
client.on("error", function(err) {
  console.error("Fehler:", err);
});
client.login(process.env.DISCORD_TOKEN);
var port = process.env.PORT || 3000;
http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("OK");
}).listen(port);
