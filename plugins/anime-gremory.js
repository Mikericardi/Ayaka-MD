import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.ibeng.tech/api/wallpaper/gremory?apikey=tamvan'
	conn.sendFile(m.chat, await(await fetch(url)).buffer(), null, null, m)
}
handler.command = /^(gremory)$/i
handler.tags = ['anime']
handler.help = ['gremory']
handler.premium = false
handler.limit = true

export default handler