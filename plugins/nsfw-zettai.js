let handler = async (m, { conn, command }) => {
let nyenye = `https://web-production-3ae2.up.railway.app/api/nsfw/zettai?apikey=APIKEY`
    conn.sendFile(m.chat, nyenye, null, 'Nih', m) 
}
handler.help = ['zettai']
handler.tags = ['nsfw']
handler.command = /^(zettai)$/i
handler.premium = true
//buatan ZYKO-MD, jgn hapus atuh 😊
export default handler
