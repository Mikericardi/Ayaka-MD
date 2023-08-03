import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
conn.sendFile(m.chat, res, null, `Dark ga si adick adick`, m)
}
handler.help = ['darkjoke']
handler.tags = ['internet', 'fun']
handler.command = /^(darkjoke)$/i
handler.limit = true

export default handler