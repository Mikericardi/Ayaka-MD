let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let thumbListpc = `https://telegra.ph/file/e463a1d694657c67c5125.jpg`
let txt = ''
    for (let [jid] of niorg)
txt += `${htjava} ${await conn.getName(jid)}\n${dmenub} ${'@' + jid.replace(/@.+/, '')}\n${cmenua}\n\n`
return conn.reply(m.chat, htki + ' *CHAT PRIVATE* ' + htka + '\n' + '*Total:* ' + niorg.length + '\n\n' + txt.trim(), m, { mentions: conn.parseMention(txt) })
}
handler.help = ['listpc']
handler.tags = ['owner']
handler.command = /^listpc|pclist|daftarpc|pc$/i
handler.owner = true

export default handler
