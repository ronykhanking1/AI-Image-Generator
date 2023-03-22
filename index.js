const Discord = require('discord.js');
const Canvas = require('canvas');
const client = new Discord.Client();

// Set up the bot's API token
const token = 'MTA4Nzc4NTE3MTY4MTU2MjY0NQ.GLEzk5.SBWqIQ6BcCJC_-p5wvrKb8GSFM8ns-G0mJIcZM';

// Define a command that generates an image
client.on('message', async message => {
  if (message.content === '!generate') {
    // Create a new Canvas image
    const canvas = Canvas.createCanvas(500, 500);
    const ctx = canvas.getContext('2d');

    // Draw a red square on the canvas
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(0, 0, 500, 500);

    // Convert the canvas to a Discord attachment
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'image.png');

    // Send the image back to the user
    message.channel.send(attachment);
  }
});

// Log in to the Discord bot account
client.login(token);
