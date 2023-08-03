import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/yumeko?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Yumeko', m)
}
handler.command = /^(yumeko)$/i
handler.tags = ['anime']
handler.help = ['yumeko']
handler.premium = false
handler.limit = true

export default handler