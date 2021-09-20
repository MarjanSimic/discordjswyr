require('dotenv').config()

const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if(message.content.startsWith('ping')){
      const exampleEmbed = new MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Would you rather?')
      .addFields(
		  { name: 'Choices:', value: ':red_square: Eat shit \n \n **OR** \n \n :blue_square: DIE' })
    
      message.channel.send({ embeds: [exampleEmbed] }).then(poll_message => {
          poll_message.react('🟥'); // +1
          poll_message.react('🟦'); // -1

      });
    }
})

client.login(process.env.TOKEN);