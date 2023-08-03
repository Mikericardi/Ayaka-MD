import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/shizuka?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Waifu nya om (≧ω≦)', m)
}
handler.command = /^(shizuka)$/i
handler.tags = ['anime']
handler.help = ['shizuka']
handler.premium = false
handler.limit = true

export default handler