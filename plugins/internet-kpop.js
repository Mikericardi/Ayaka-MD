import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://web-production-3ae2.up.railway.app/api/wallpaper/kpop?apikey=APIKEY'
	conn.sendFile(m.chat, url, null, 'kpop', m)
}
handler.command = /^(kpop)$/i
handler.tags = ['internet']
handler.help = ['kpop']
handler.premium = false
handler.limit = true

export default handler