import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.sekha.me/api/wallpaper/korea?apikey=apirey'
	conn.sendFile(m.chat, url, null, `Nih ${command}`, m)
}
handler.command = /^(cecankorea)$/i
handler.tags = ['internet']
handler.help = ['cecankorea']
handler.premium = false
handler.limit = 3 
export default handler