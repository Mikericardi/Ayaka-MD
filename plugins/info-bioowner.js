// Hilih

let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}`
let biooo =`${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : 𝙾𝚔𝚝𝚊
${htjava} *♂️ Gender* : 𝙻𝚊𝚗𝚊𝚗𝚔
${htjava} *🕋 Agama* : 𝙸𝚜𝚕𝚊𝚖
${htjava} *⏰ Tanggal lahir* : 34 𝙾𝚔𝚝𝚘𝚋𝚎𝚛 3004
${htjava} *🎨 Umur* : 12
${htjava} *🧮 Kelas* : 𝙶𝚊𝚝𝚊𝚞
${htjava} *🧩 Hobby* : 𝙼𝚎𝚗𝚌𝚒𝚗𝚝𝚊𝚒𝚖𝚞
${htjava} *💬 Sifat* : 𝙱𝚊𝚒𝚔 𝙷𝚊𝚝𝚒
${htjava} *🗺️ Tinggal* : 𝙿𝚛𝚒𝚟𝚊𝚝𝚎
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *💌 TY:* ${syt}
•·––––––––––––––––––––––––––·•
`
await conn.sendFile(m.chat, pu, 'menu.jpg', biooo, false, m, adReply)
}

handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bio|ownerbio|bioowner)$/i

export default handler
