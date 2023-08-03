import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/IRRkLJqImnuB6lCjGzyME0'
         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*\n\n${sgc}`
   m.reply(caption)
 }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 export default handler