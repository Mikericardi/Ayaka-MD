/*
By : 𝗧𝗮𝗮𝗢𝗳𝗰
*/

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix: _p, command: _q}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan, premiumTime } = global.db.data.users[who]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(who)
//let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || 'No Bio'
let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact')
let math = max - xp
let tag = await conn.getName(m.sender)
let mot = pickRandom(["⌬", "⏣", "❐", "❑", "❇", "✡", "✯", "✨", "⛾", "⛐", "♨", "☫", "☘", "◳", "☣", "✎"])

let mii = `☰⟥⟝⟞⟝❨ *Rᴜʟᴇs Mʏ Bᴏᴛ* ❩⟞⟝⟞⟤☰

➯ *Tɪᴅᴀᴋ Sᴘᴀᴍ Bᴏᴛ*
 _Kebijakan privasi atau Private without being in public_

• *Kebijakan Privasi:*
1. ${wm2} tidak akan merekam data riwayat chat user.
2. ${wm2} tidak akan menyebarkan nomor users.
3. ${wm2} tidak akan menyimpan media yang dikirimkan oleh users.
4. ${wm2} tidak akan menyalah gunakan data data users.
5. Owner ${wm2} berhak melihat data riwayat chat users.
6. Owner ${wm2} berhak melihat status users.
7. Owner ${wm2} dapat melihat riwayat chat, dan media yang dikirimkan users.

• Jika ada bug/eror di website kami saya mohon untuk Report nya, tanpa biaya dan aman

_Cara penggunaan ${wm2} Agar terhindar dari Suspand_

• *Peraturan ${wm2}:*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin donasi bisa langsung aja ya social payment Dana 
3. 𝗕𝗢𝗧 𝗧𝗜𝗗𝗔𝗞 𝗗𝗜𝗣𝗘𝗥𝗝𝗨𝗔𝗟 𝗕𝗘𝗟𝗜𝗞𝗔𝗡
3. Ketik .sewa Jika Ingin SewaBot 

•Agar terhindar dari Suspand/Ban kalian bisa membaca juga di Peraturan kami.

•Perlu kalian tahu bahwa kami menjaga Privasi dari data-data anda!

• *Syarat Ketentuan ${wm2}:*

1. ${wm2} akan keluar dari group jika ada salah satu member melanggar peraturan.
2. ${wm2} dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. ${wm2} tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. ${wm2} akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. ${wm2} bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
❏┳━━◩
┍┛
┆⟥⟤ ➠ ${global.bottime}
└─┈⟅
${global.botdate}`
await conn.sendFile(m.chat, pu, 'menu.jpg', mii, false, m, adReply)
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(rules)$/i
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]  
}
function ucapp() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat Malam"
    if (time >= 4) {
        res = "Selamat Pagi"
    }
    if (time > 10) {
        res = "Selamat Siang"
    }
    if (time >= 15) {
        res = "Selamat Sore"
    }
    if (time >= 18) {
        res = "Selamat Malam"
    }
    return res
}