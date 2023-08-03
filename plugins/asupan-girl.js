import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api-fgmods.ddns.net/api/girl?apikey=6sotNhAL'
	conn.sendFile(m.chat, url, null, 'Asupan Gril', m)
}
handler.command = /^(girl)$/i
handler.tags = ['asupan']
handler.help = ['girl']
handler.premium = false
handler.limit = true

export default handler