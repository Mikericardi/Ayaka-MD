import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomanime/v2/ayuzawa?apikey=zenzkey_ab72cdd5af82'
		conn.sendFile(m.chat, url, null, 'Random Ayuzawa', m)m)
		}
		handler.command = /^(ayuzawa)$/i
		handler.tags = ['anine']
		handler.help = ['ayuzawa']
		handler.limit = true
		export default handler
