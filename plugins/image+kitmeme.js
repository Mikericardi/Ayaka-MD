import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} tema|teks

*List tema:*
• kucing
• senyum
• monyet
`
let res = `https://ik.imagekit.io/aygemuy/tr:ot-${text1},ots-400,otc-ffff00,or-50/${thm}.jpg`
conn.sendFile(m.chat, res, null, `Nih ${name}`, m)

}
handler.help = ['imagekit'].map(v => v + ' <query>')
handler.tags = ['tools']
handler.command = /^(imagekit)$/i

export default handler