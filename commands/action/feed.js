const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'feed',
  aliases: [],
  guildOnly: true,
  clientPermissions: [
    'EMBED_LINKS',
    'ADD_REACTIONS'
  ],
  group: 'action',
  description: 'Yummy!',
  examples: [ 'feed @user' ],
  parameters: [ 'User Mention' ],
  run: async ( client, message, args ) => {

    // Filter out args so that args are only user-mention formats.
    args = args.filter(x => /<@!?\d{17,19}>/.test(x))

    const url = client.images.feed();
    const embed = new MessageEmbed()
    .setColor('GREY')
    .setImage(url)
    .setFooter(`Action Commands | \©️${new Date().getFullYear()} Kei`);

    if (!message.mentions.members.size){

      return message.channel.send(embed);

    } else if (new RegExp(`<@!?${client.user.id}>`).test(args[0])){

      return message.channel.send(embed.setDescription('*Nom Nom Nom* Arigatoo~'));

    } else if (new RegExp(`<@!?${message.author.id}>`).test(args[0])){

      return message.channel.send(embed);

    } else {

      return message.channel.send(
        embed.setDescription(`${message.author} feeds ${args[0]}!`)
      );

    };
  }
};
