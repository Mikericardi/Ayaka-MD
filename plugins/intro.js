import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const name = conn.getName(m.sender);
    const age = '18';
    const address = 'Indonesia';
    const hobby = 'Coding';
    const partner = 'Single';

    const introText = `✨🌟 *${name}'s Introduction* 🌟✨\n\n`
      + `👤 *Name:* ${name}\n`
      + `🎂 *Age:* ${age}\n`
      + `🏠 *Address:* ${address}\n`
      + `🎨 *Hobby:* ${hobby}\n`
      + `💑 *Partner:* ${partner}\n`;

    const wibuApiUrl = hwaifu.getRandom()
    const thumbnail = await (await fetch(wibuApiUrl)).buffer();

    conn.sendFile(m.chat, thumbnail, 'intro.jpg', introText, m);
  } catch (err) {
    console.log(err);
    conn.reply(m.chat, 'Error!', m);
  }
};

handler.command = /^(intro)$/i;

export default handler;
