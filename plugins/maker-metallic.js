import fetch from 'node-fetch'
let handler = async (m, { conn, text, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.shinoa.xyz/api/photooxy/metallic?text=${text}&apikey=ab58ea34`
  conn.sendFile(m.chat, res, 'naruto.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logo-naruto'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(metallic)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler