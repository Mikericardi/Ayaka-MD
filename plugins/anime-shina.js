import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/shina?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Waifu nya om (≧ω≦)', m)
}
handler.command = /^(shina)$/i
handler.tags = ['anime']
handler.help = ['shina']
handler.premium = false
handler.limit = true

export default handler