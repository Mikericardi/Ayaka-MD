import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomanime/v2/asuna?apikey=zenzkey_ab72cdd5af82'
		conn.sendFile(m.chat, url, null, 'Random asuna', m)m)
		}
		handler.command = /^(asuna)$/i
		handler.tags = ['anine']
		handler.help = ['asuna']
		handler.limit = true
		export default handler
