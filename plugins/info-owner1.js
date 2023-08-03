// Hilih
"use strict"
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `Jangan Lupa Save`, `zyyyzeus@gmail.com`, `🇮🇩 Indonesia`, `📍 ${sig}`, `👤𝙾𝚠𝚗𝚎𝚛 ${namabot}`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢`, `ɴᴏᴛʜɪɴɢ`, `🇮🇩 Indonesia`, `📍 ${sgh}`, `Jangan Lupa Donasi Kak ☺`]
  ], m)
 
  
let caption = `
👋 Hai *@${m.sender.split`@`[0]}*, 
Nih Nomor Creator Saya
Jangan Spam Ya Kak ☺
`

await conn.reply(m.chat, caption, sentMsg, { mentions: conn.parseMention(caption) })
  }

handler.help = ['creator', 'own']
handler.tags = ['info']
handler.command = /^(leon)$/i

export default handler