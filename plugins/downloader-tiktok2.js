//APIKEY
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = conn.parseMention(tag)
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktok.com/xxxx`
try {
let res = await fetch(`https://api.erdwpe.com/api/dowloader/tikok?url=${text}`)
let data = await res.json()
let json = data.result

await m.reply(`*_${global.md}_*`)
let cap = `${ucapan()}\n\nNih ${name}`
//conn.reply(m.chat, 'Proses', m)

conn.sendFile(m.chat, json.video, 'tiktok.m4', cap, m) 

} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt2|tiktok2)$/i

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}