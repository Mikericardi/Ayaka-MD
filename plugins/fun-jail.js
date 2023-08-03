import fetch from 'node-fetch'

import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `Kirim/Reply Gambar dengan caption .jail`
m.reply(md)
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.zahwazein.xyz/photoeditor/jail?url=${url}&apikey=${zahwazein}`)).buffer()
await conn.sendButton(m.chat, `Done @${m.sender.split`@`[0]}`, wm, hasil, [['Donasi', '.donasi']], m)
}
handler.help = ['jail']
handler.tags = ['anime','internet']
handler.command = /^(jail)$/i
handler.limit = true

export default handler