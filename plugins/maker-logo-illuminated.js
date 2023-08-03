import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.erdwpe.com/api/photooxy/illuminated-metallic?text=${response[0]}`
  conn.sendFile(m.chat, res, 'illuminated.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logo-naruto'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(logo-illuminated)$/i
handler.limit = false
//buatan zyko-md, jgn hapus atuh 😊
export default handler