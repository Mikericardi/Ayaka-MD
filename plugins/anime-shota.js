import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/shota?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Waifu nya om (≧ω≦)', m)
}
handler.command = /^(shota)$/i
handler.tags = ['anime']
handler.help = ['shota']
handler.premium = false
handler.limit = true

export default handler