import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.sekha.me/api/wallpaper/keneki?apikey=apirey'
	conn.sendFile(m.chat, url, null, 'Waifu nya om (≧ω≦)', m)
}
handler.command = /^(keneki)$/i
handler.tags = ['anime']
handler.help = ['kaguya']
handler.premium = false
handler.limit = true

export default handler