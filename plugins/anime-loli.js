import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api-fgmods.ddns.net/api/img/loli?apikey=3b407ca7'
		conn.sendFile(m.chat, url, null, 'Random loli', m)
		}
handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
handler.limit = true
export default handler
