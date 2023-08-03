import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/gaming?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'nih', m)
}
handler.command = /^(gaming)$/i
handler.tags = ['maker', 'logo']
handler.help = ['gaming']
handler.premium = false
handler.limit = true

export default handler