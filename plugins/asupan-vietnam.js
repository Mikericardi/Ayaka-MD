import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://violetics.pw/api/asupan/vietnam?apikey=0a5f-75fe-5ea4'
	conn.sendFile(m.chat, url, null, 'Random Asupan vietnam', m))
}
handler.command = /^(vietnam)$/i
handler.tags = ['asupan']
handler.help = ['vietnam']
handler.premium = false
handler.limit = true

export default handler