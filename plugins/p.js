let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`Gapunya Agama Ya?`)
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp
export default handler

