import fetch from 'node-fetch'

let arr = []
fetch('https://api.zeeoneofc.my.id/api/cecan/indonesia?apikey=ZGNClC5usCIn9LD')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© nih cecan random nya ', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['cecanrandom']
handler.tags = ['internet']
handler.limit = false
handler.command = /^(cecanrandom)$/i

export default handler
