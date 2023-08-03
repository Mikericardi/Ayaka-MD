import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/montor?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Random Montor', m)
}
handler.command = /^(montor)$/i
handler.tags = ['random']
handler.help = ['montor']
handler.premium = false
handler.limit = true

export default handler