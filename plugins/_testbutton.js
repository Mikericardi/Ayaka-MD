// Hilih
// Test Button
//import { generateWAMessageFromContent } from '@adiwajshing/baileys'
const {
    default: _makeWaSocket,
    makeWALegacySocket,
    proto,
    downloadContentFromMessage,
    jidDecode,
    areJidsSameUser,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    WAMessageStubType,
    extractMessageContent,
    jidNormalizedUser, 
    MessageType,
    Mimetype
} = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {

/*const sections = [
{
	title: `Anu Ehehehe`,
	rows: [
	{ title: "Hura", rowId: "PuluPulu"}
	]}
	]

const listMessage = {
	text: "Huraaaa",
	footer: "Mati Aja Lu",
	title: "Anu",
	buttonText: "Click Tod",
	sections
}

conn.sendMessage(m.chat, listMessage, { ephemeralExpiration: 84600, m})
*/

let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Welcome 💐'}, type: 1}
]

await conn.send3ButtonDoc(m.chat, wm, wm, '𝐀ʟʟ 𝐌ᴇɴᴜ','.? all', '𝐋ɪsᴛ 𝐌ᴇɴᴜ', '.menulist', '𝐃ᴏɴᴀsɪ', '.donasi', m, { contextInfo: { externalAdReply :{ showAdAttribution: true, mediaUrl: sig, mediaType: "VIDEO", description: ``, title: `👋 Hay Kak :> `, body: '⫹⫺ 𝐑𝐏𝐆 𝐁𝐎𝐓 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏', thumbnail: fp, sourceUrl: ''} } } ) 

let buttonMessage = {
document: { url: "https://wa.me/6285731947500" },
mimetype: doc,
jpegThumbnail: fp,
mentions: '',
fileName: ucapan,
fileLength: 99999999999999,
caption: 'kan',
footer: `kwm`,
buttons: buttons,
headerType: 4,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaUrl: sig, 
mediaType: "VIDEO",
description: ``,
title: `👋 Hay Kak :> `,
body: '⫹⫺ 𝐑𝐏𝐆 𝐁𝐎𝐓 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏',
thumbnail: fp,
sourceUrl: ''
}}
}

conn.sendMessage(m.chat, buttonMessage, {quoted: m})

await conn.send3ButtonImg(m.chat, fp, wm, 'haha', '𝐎ᴡɴᴇʀ', '.owner', '𝐑ᴜʟᴇs', '.rules', '𝐃ᴏɴᴀsɪ', '.donasi', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2, 
    description: sig,
    title: `👋 Hay Kak :> `,
    body: 'Folow Ig Saya Kak ×͜×',
    thumbnail: fp,
    sourceUrl: sig
} } } )
}

handler.command = /^(tebe)/i

export default handler


/*const buttons = [
  {buttonId: '.? all', buttonText: {displayText: '𝐀ʟʟ 𝐌ᴇɴᴜ'}, type: 1},
  {buttonId: '.menulist', buttonText: {displayText: '𝐋ɪsᴛ 𝐌ᴇɴᴜ'}, type: 1},
  {buttonId: '.donasi', buttonText: {displayText: '𝐃ᴏɴᴀsɪ'}, type: 1}
]

const templateMessage = {
    image: fp,
    caption: mn, 
    footer: mii,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)
*/

