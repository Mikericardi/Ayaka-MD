import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
    let res = await fetch('https://api.lolhuman.xyz/api/random/husbu?apikey=2da1fcd209f20ae428d8482f')
    let buffer = await res.buffer()
    conn.sendFile(m.chat, buffer, 'husbu.jpg', 'Bojone Gepenk🐦')
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.limit = true
export default handler