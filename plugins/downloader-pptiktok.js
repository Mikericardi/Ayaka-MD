import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*[❗INFO❗] Masukan Nama User Tiktok Yang Ingin Diambil Fotonya*\n\nContoh : .lisaamelia09_'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkey}`
await conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] Sukses Mengambil Foto User ${text}*`, m, false)
}
handler.help = ['tiktokfoto', 'pptiktok'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|pptiktok)$/i
export default handler
