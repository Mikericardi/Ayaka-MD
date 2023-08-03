import fetch from "node-fetch"
let handler = async (m, { text, usedPrefix, command }) => {

if (!text) throw `Mau Cari Apa?\nContoh: ${usedPrefix}${command} Bengkulu`

let res = await fetch(`https://api.zahwazein.xyz/information/wikipedia?query=${text}&apikey=85345ee3d9de`)

let data = await res.json()

let json = data.result

const capt = `
            ⏤͟͟͞͞★ 𝐖 𝐈 𝐊 𝐈 𝐏 𝐄 𝐃 𝐈 𝐀 ꗄ➺

𝐉𝐮𝐝𝐮𝐥: ${json.judul}

𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${json.isi}

${wm}

${botdate}`.trim()

await m.reply(capt)
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i

export default handler
