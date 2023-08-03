import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/tsunade?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Random tsunade (≧ω≦)', m)
}
handler.command = /^(tsunade)$/i
handler.tags = ['anime']
handler.help = ['tsunade']
handler.premium = false
handler.limit = true

export default handler