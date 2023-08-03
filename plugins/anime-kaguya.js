import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.sekha.me/api/wallpaper/shinomiya?apikey=apirey'
	conn.sendFile(m.chat, url, null, 'Random kaguya', m)
}
handler.command = /^(shinomiya|kaguya)$/i
handler.tags = ['anime']
handler.help = ['kaguya']
handler.premium = false
handler.limit = true

export default handler