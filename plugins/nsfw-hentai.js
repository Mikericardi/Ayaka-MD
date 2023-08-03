import fetch from 'node-fetch'

let handler = async (m, { command, conn }) => {
  let cap = `
Silakan Aktifkan`
   if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.reply(m.chat, `❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ\nketik *.on nsfw*`)
    let anu = await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${global.lolkey}`)

 //  let fimgb = Buffer.from(await anu.arrayBuffer())

    conn.sendButton(m.chat, anu, null, 'nih', m)
}
handler.help = ['hentai2']
handler.tags = ['nsfw']
handler.command = /^(hentai2)$/i
handler.limit = true
handler.premium = true

export default handler