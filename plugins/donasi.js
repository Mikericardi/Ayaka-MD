let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 DONASI 𝐁𝐎𝐓 』––––––❏*

⏣ ᴛᴇʟᴋᴏᴍsᴇʟ: [ - ]
⏣ ɪɴᴅᴏsᴀᴛ: [ 085749543572 ]

⫹⫺ ᴅᴏɴᴀsɪ • ɴᴏɴ ᴘᴜʟsᴀ ⫹⫺
⏣ ᴅᴀɴᴀ: [ - ] 
⏣ ᴏᴠᴏ: [ - ]
⏣ ɢᴏᴘᴀʏ: [ 085749543572 ]

𝚃𝚛𝚒𝚖𝚊𝚔𝚊𝚜𝚒𝚑 𝙱𝚊𝚐𝚒 𝚈𝚐 𝙱𝚎𝚛𝚍𝚘𝚗𝚊𝚜𝚒 😁

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
         ❨ ${namebot} ❩

${botdate}
`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/e0f16596f8876fdb28cb2.jpg', null, caption, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(donasi|dns)$/i;

handler.register = false
export default handler