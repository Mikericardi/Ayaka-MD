import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api-fgmods.ddns.net/api/girl?apikey=6sotNhAL'
	await conn.sendButton(m.chat, '© nih gril random nya', botdate, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(girlrandom)$/i
handler.tags = ['internet']
handler.help = ['girlrandom']
handler.premium = false
handler.limit = true

export default handler