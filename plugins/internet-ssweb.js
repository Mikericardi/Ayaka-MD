import fetch from 'node-fetch'

let handler = async (m, { conn, command, args }) => {
   
if (!args[0]) return conn.reply(m.chat, 'Masukkan Linknya Kak', m)

  await m.reply('_𝚃𝚞𝚗𝚐𝚐𝚞 𝚂𝚎𝚋𝚎𝚗𝚝𝚊𝚛⏲️_')
  
//let img = await (await fetch(`https://shot.screenshotapi.net/screenshot?url=${args[0]}&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load`)).buffer()
let img = await (await fetch(`https://api.botcahx.biz.id/api/tools/ssweb?link=${args[0]}&apikey=${botcahx}`)).buffer()
  
   conn.sendMessage(m.chat, { image: img, caption: 'Here' }, { quoted: m })
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i

handler.limit = true
handler.fail = null

export default handler
