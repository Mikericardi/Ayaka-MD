import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api-fgmods.ddns.net/api/asupan-la?apikey=6sotNhAL'
	conn.sendFile(m.chat, url, null, 'ASUPAN LATINO', m)
}
handler.command = /^(asupanlatino)$/i
handler.tags = ['asupan']
handler.help = ['asupanlatino']
handler.premium = false
handler.limit = true

export default handler