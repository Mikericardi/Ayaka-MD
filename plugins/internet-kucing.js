import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/kucing?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Nih Kucing', m)
}
handler.command = /^(kucing)$/i
handler.tags = ['quetes', 'internet']
handler.help = ['kucing']
handler.premium = false
handler.limit = true

export default handler