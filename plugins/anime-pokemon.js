import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/pokemon?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'Nih Random Pokemon', m)
}
handler.command = /^(pokemon)$/i
handler.tags = ['anime']
handler.help = ['pokemon']
handler.premium = false
handler.limit = true

export default handler