import fetch from 'node-fetch'

import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadizombie'
await m.reply(md)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.zahwazein.xyz/photoeditor/jadizombie?url=${url}&apikey=60475cf54e5c`)).buffer()
//m.reply(url)
conn.sendFile(m.chat, hasil, null, `Done @${m.sender.split`@`[0]}`, m)
}
handler.help = ['jadizombie']
handler.tags = ['fun', 'internet']
handler.command = /^(jadizombie)$/i
handler.limit = true

export default handler