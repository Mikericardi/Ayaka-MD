import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.sekha.me/api/wallpaper/onepiece?apikey=apirey'
	conn.sendFile(m.chat, url, null, 'nih onepiece', m)
}
handler.command = /^(onepiece)$/i
handler.tags = ['internet','anime']
handler.help = ['onepiece']
handler.premium = false
handler.limit = true

export default handler