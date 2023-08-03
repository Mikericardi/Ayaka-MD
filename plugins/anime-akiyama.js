import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomanime/v2/akiyama?apikey=zenzkey_ab72cdd5af82'
	conn.sendFile(m.chat, url, null, 'Random akiyama', m)
}
handler.command = /^(akiyama)$/i
handler.tags = ['anime']
handler.help = ['akiyama']
handler.limit = true
export default handler
