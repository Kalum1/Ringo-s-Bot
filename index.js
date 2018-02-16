const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "NDEzODA4Njg1Mzk2MTMxODQz.DWeORA.TFhptVcpfgfRvz9fu8Cpji8ytow";
const PREFIX = "!";


var bot = new Discord.Client();
var servers = {};





bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name", "general").sendMessage(member.toString()+ "Welcome to our server!");

  member.addRole(member.guild.roles.find("name", "Member"));
});



var fortunes = [

"Option1",
"Option2",


]



var money = [
  "£10"


]

bot.on("ready", function() {
  console.log("Ready");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;



  if (!message.content.startsWith(PREFIX)) return;



  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0].toLowerCase()) {


    case "shop":
    var embed = new Discord.RichEmbed()
    .addField("Shop")
    .addField("Please choose an option...")
    .addField("To buy 'test' then type ```!test```")
    .setColor(0x00ffff)
      message.channel.sendEmbed(embed);
      break;

      case "test":
      var embed = new Discord.RichEmbed()
      .addField("You bought 'test' for ${money}")
      .setColor(0x00ffff)
      message.channel.sendEmbed(embed);
      break;



  ///    case "8ball":
  ///    if (args[1]) {
  ///      message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);

    ///        } else {
    ///          message.channel.sendMessage("")
    ///        }
    ///  break;





    default:
      message.channel.sendMessage("Invaild Command!")
   }

});


bot.login(TOKEN);
