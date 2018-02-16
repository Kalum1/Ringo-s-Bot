
    const Discord = require('discord.js');
    const economy = require('discord-eco');
    const fs = require("fs");




    const client = new Discord.Client();


    client.on('message', message => {


        let prefix = '!';




        if (message.content.toUpperCase() === `${prefix}BALANCE`) {

            economy.fetchBalance(message.author.id).then((i) => {
                message.channel.send(`**Balance:** ${i.money}`);
            })


        }

        if (message.content.toUpperCase() === `${prefix}HELP`) {
          message.channel.send("Type !shop for to get started!")
        }

        // Example: Adding Money To A User
        if (message.content.toUpperCase() === `${prefix}ADD 500`) {

            economy.updateBalance(message.author.id, 500).then((i) => {
                message.channel.send(`**You got ¥500!**\n**New Balance:** ${i.money}`);
            })

        }
        if (message.content.toUpperCase() === `${prefix}ADD 100`) {

            economy.updateBalance(message.author.id, 100).then((i) => {
                message.channel.send(`**You got ¥100!**\n**New Balance:** ${i.money}`);
            })

        }
        if (message.content.toUpperCase() === `${prefix}ADD 5123`) {

            economy.updateBalance(message.author.id, 5123).then((i) => {
                message.channel.send(`**You got ¥5123!**\n**New Balance:** ${i.money}`);
            })

        }

        // Example: Removing Money From A User
        if (message.content.toUpperCase() === `${prefix}PITEM1`) {

            economy.updateBalance(message.author.id, -20).then((i) => {
                message.channel.send(`**You paid ¥20 for pitem1!**\n**New Balance:** ${i.money}`);
            })

        }
        if (message.content.toUpperCase() === `${prefix}PITEM2`) {

            economy.updateBalance(message.author.id, -35).then((i) => {
                message.channel.send(`**You paid ¥35 for pitem2!**\n**New Balance:** ${i.money}`);
            })

        }
        if (message.content.toUpperCase() === `${prefix}PITEM3`) {

            economy.updateBalance(message.author.id, -40).then((i) => {
                message.channel.send(`**You paid ¥40 for pitem3!**\n**New Balance:** ${i.money}`);
            })

        }
        if (message.content.toUpperCase() === `${prefix}PITEM4`) {

            economy.updateBalance(message.author.id, -45).then((i) => {
                message.channel.send(`**You paid ¥45 for pitem4!**\n**New Balance:** ${i.money}`);
            })

        }
        if (message.content.toUpperCase() === `${prefix}PITEM5`) {

            economy.updateBalance(message.author.id, -50).then((i) => {
                message.channel.send(`**You paid ¥50 for pitem5!**\n**New Balance:** ${i.money}`);
            })

        }


        if (message.content.toUpperCase() === `${prefix}SHOP`) {
          var embed = new Discord.RichEmbed()
              .setTitle("Shop:")
              .setDescription("To buy and item type !pitem<number> in our server!\nYou can currently choose from 4 items, all costing a different price.")
              .setColor(0x00ffff)
          message.channel.sendMessage("I have Private Messaged you what is in the shop.")
          message.author.send({embed})
        }

        if (message.content.toUpperCase() === `${prefix}INVENTORY`) {
          message.channel.sendMessage("Test")
        }


        if (message.content.toUpperCase() === `${prefix}SAVEINV`)
        {
          var string = "{id: 4, name:'Volley'}"
          var parseObject = JSON.parse(string)
          console.log(parseObject.id); //4
          console.log(parseObject.name); //Volley
          var inv = JSON.parse(fs.readFileSync("./points.json", "utf8"));
          message.channel.sendMessage("Done!")
        }







    });




        client.login('NDEzODA4Njg1Mzk2MTMxODQz.DWeORA.TFhptVcpfgfRvz9fu8Cpji8ytow')
