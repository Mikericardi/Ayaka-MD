/*import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, args, command, text }) => {

if (!args[0]) throw `Linknya?\nContoh: ${usedPrefix}fb https://www.facebook.com/watch?/`

await m.reply(md)

let res = await fetch(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${args[0]}&apikey=${botcahx}`)

let x = await res.json()

let cap = `⏤͟͟͞͞★𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 ꗄ➺

Done @${m.sender.split`@`[0]}

${wm}

${botdate}
`

await conn.sendFile(m.chat, x.result.audio, 'fb.mp3', cap, m)
}
//handler.help = ['facebookaudio'].map(v => v + ' <url>')
handler.help = ['facebookaudio']
handler.tags = ['downloader']
handler.command = /^(fbaud)$/i

handler.limit = true

export default handler
*/