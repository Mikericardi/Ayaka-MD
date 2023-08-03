import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command: _q }) => {
if (!args[0]) return m.reply(`Teksnya Kak?\nContoh: ${_p + _q} Anos Voldigoad`)
await m.reply(md)
let res = await (await fetch(`https://api.zahwazein.xyz/creator/hartatahta?text=${args[0]}&apikey=${zahwazein}`)).buffer()
await conn.sendFile(m.chat, res, 'tahta.png', '', m)
}
handler.help = ['hartatahta', 'ht'].map(v => v + ' < Teks >')
handler.tags = ['tools', 'maker']
handler.command = /^(hartatahta|ht)/i
handler.limit = true
export default handler