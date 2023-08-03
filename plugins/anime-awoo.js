import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/awoo?apikey=SGWN'
		conn.sendFile(m.chat, url, null, 'Random awo', m)
		}
		handler.command = /^(awoo)$/i
		handler.tags = ['anime']
		handler.help = ['awoo']
		handler.limit = true
export default handler
