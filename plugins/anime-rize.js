import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/rize?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'rize', m)
}
handler.command = /^(rize)$/i
handler.tags = ['anime']
handler.help = ['rize']
handler.premium = false
handler.limit = true

export default handler


