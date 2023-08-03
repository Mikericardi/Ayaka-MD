import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomanime/anime?apikey=zenzkey_ab72cdd5af82'
	conn.sendFile(m.chat, url, null, 'Random Anime', m)
}
handler.command = /^(randomanimeanime)$/i
handler.tags = ['anime']
handler.help = ['randomanimeanime']
handler.premium = false
handler.limit = 3 
export default handler