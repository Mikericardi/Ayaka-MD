import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://violetics.pw/api/asupan/thailand?apikey=0a5f-75fe-5ea4'
	conn.sendFile(m.chat, url, null, 'Asupan Thailand', m))
}
handler.command = /^(thailand)$/i
handler.tags = ['asupan']
handler.help = ['thailand']
handler.premium = false
handler.limit = true

export default handler