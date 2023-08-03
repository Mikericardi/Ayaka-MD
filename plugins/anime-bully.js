// Hilih
import fetch from 'node-fetch'
let handler = async (m, { conn, command: _q, usedPrefix: _p }) => {
await m.reply(md)
let res = await fetch('https://api.waifu.pics/sfw/bully')
if (!res.ok) throw res.text()
let json = await res.json()
if (!json.url) throw `Error, Mungkin Api Mati`
conn.sendFile(m.chat, res, null, 'Random Bully', m)
}
handler.help = ['bully']
handler.tags = ['anime']
handler.command = /^(bully)$/i
handler.register = true
handler.limit = 15

export default handler