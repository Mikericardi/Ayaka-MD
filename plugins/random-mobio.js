import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/mobil?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Random mobio', m)
}
handler.command = /^(mobil)$/i
handler.tags = ['random']
handler.help = ['mobil']
handler.premium = false
handler.limit = true

export default handler