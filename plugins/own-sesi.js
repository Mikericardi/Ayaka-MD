import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Sedang mengambil file sesi bot')
    let sesi = await fs.readFileSync(sesinya)
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/zip', fileName: 'Session.zip' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['owner']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.rowner = true

export default handler
