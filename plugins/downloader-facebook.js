import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
//let imgr = flaaa2
  if (!args[0]) throw 'Linknya mana?\nContoh Format : .fb https://fb.watch/7B5KBCgdO3/'
let f = await fetch(`https://api.erdwpe.com/api/dowloader/fbdown?url=${text}`)
m.reply(md)
let data = await f.json()
let x = data.result
//let x = await f.json()
let cap = `${ucapan()}\n\nNih ${name}`
conn.sendFile(m.chat, x.sd, 'facebook.mp4', cap, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
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