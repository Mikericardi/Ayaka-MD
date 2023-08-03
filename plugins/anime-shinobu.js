// Hilih
import fetch from 'node-fetch'
let handler = async (m, { conn, command: _q, usedPrefix: _p }) => {
await m.reply(md)
let res = await fetch('https://api.waifu.pics/sfw/shinobu')
if (!res.ok) throw res.text()
let json = await res.json()
if (!json.url) throw `Error, Mungkin Api Mati`
await conn.sendButton(m.chat, `${bottime}\n\nDone @${m.sender.split`@`[0]}\n\nCommand: ${_q}\n\nUrl: ${json.url}`, wm, json.url, [['𝐍 𝐄 𝐗 𝐓', `${_p + _q}`], ['𝐌 𝐄 𝐍 𝐔', '.menu'], ['𝐃 𝐎 𝐍 𝐀 𝐒 𝐈', '.donasi']], m)
}
handler.help = ['animeshinobu']
handler.tags = ['anime']
handler.command = /^(animeshinobu|shinobu)$/i
handler.limit = 15

export default handler