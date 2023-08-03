import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/teknologi?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'teknologi', m)
}
handler.help = ['teknologi']
handler.tags = ['internet']
handler.command = /^(teknologi)$/i
handler.premium = false
handler.limit = 2
export default handler