import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
  let cap = `
Silakan Aktifkan`
   if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.reply(m.chat, `❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ\nketik *.on nsfw*`)
    let anu = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=${global.lolkey}`)
//   let fimgb = Buffer.from(await anu.arrayBuffer())
    conn.sendFile(m.chat, anu, null, 'Random Pict feets', m)
}
handler.help = ['feets']
handler.tags = ['nsfw']
handler.command = /^(feets)$/i
handler.limit = true
handler.premium = true

export default handler