import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/anime?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'anime wallpaper', m)
}
handler.help = ['anime']
handler.tags = ['anime', 'internet']
handler.command = /^(anime)$/i
handler.premium = false
handler.limit = 2
export default handler