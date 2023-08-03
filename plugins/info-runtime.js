

import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

const handler = async (m, { conn, args, command }) => {
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let pp = hwaifu.getRandom()
const muptime = clockString(_muptime)
let greeting = `${ucapan()}`
let pesan = `*${greeting} ${m.sender.split("@")[0]}*\n\n 🕰️ Bot Uptime: ${muptime}\n\nSilahkan ketik .menu untuk melihat menu bot.`

conn.sendFile(m.chat, pu, 'eror.jpg', pesan, m)
}

handler.help = ['runtime']
handler.tags = ['info']
handler.command = ['runtime', 'rt']

export default handler

function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Pagi Lord 🌄"
}
if (time >= 10) {
res = "Selamat Siang Kak ☀️"
}
if (time >= 15) {
res = "Selamat Sore Kak 🌇"
}
if (time >= 18) {
res = "Malam Kak 🌙"
}
return res
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}