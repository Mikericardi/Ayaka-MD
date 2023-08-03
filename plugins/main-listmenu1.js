// Ara Ara ( WM )
"use strict"
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`

let tags = {} // Edit Sendiri:v
const defaultMenu = {
before: `
╭╌╌╌╌⟢ Aʏᴀᴋᴀ ⟣╌╌╌╌╌⟢
┊「 Hai Kak 👋 」
┊々 %name
┊々 %ucpn
┊々 Jangan Spam Ya Kak 😁
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈๛
  %wm 
╭╌╌╌╌⟢ 𝕎𝔸𝕂𝕋𝕌 ⟣╌╌╌╌╌⟢
┊⏣ 𝚃𝚊𝚗𝚐𝚐𝚊𝚕: %week %weton
┊⏣ 𝙳𝚊𝚝𝚎: %date
┊⏣ 𝚃𝚊𝚗𝚐𝚐𝚊𝚕 𝙸𝚜𝚕𝚊𝚖: %dateislamic
┊⏣ 𝚆𝚊𝚔𝚝𝚞: %time
╰╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌⟢
  %wm 
╭╌╌╌╌⟢ 𝕀ℕ𝔽𝕆 𝕌𝕊𝔼ℝ ⟣╌╌╌╌╌ 
┊⏣ 𝙽𝚊𝚖𝚊: %name
┊⏣ 𝚃𝚊𝚐: %tag
┊⏣ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖: %prems
┊⏣ 𝙻𝚒𝚖𝚒𝚝: %limit
┊⏣ 𝙼𝚘𝚗𝚎𝚢: %money
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈𖤍 %readmore
  %wm 

  ≼≽ 𝐃𝐀𝐅𝐓𝐀𝐑 𝐌𝐄𝐍𝐔 𝐁𝐎𝐓 
`.trimStart(),
  header: `╭┈┈┈┈╼ ▣ %category ▣▷`,
  body: `│${emot} %cmd %isPremium %islimit`,
  footer: `╰┄┄┄┄┄┄┄┄┄┄┄┄╼⋗\n`,
  after: `%c4`,
}

let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tex = `Hallo @${m.sender.split('@')[0]} 👋`
// Delete List Fitur
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2
// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua   
// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`  
let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)   
// List Button => Delete

let usrs = db.data.users[m.sender]
/**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
   let tagnya = `@${m.sender.split`@`[0]}`
// Tidak Penting 🗿
 
let hariRayaramadan = new Date('April 21, 2023 23:59:59') 
     let sekarangg = new Date().getTime() 
     let lebih = hariRayaramadan - sekarangg 
     let harii = Math.floor( lebih / (1000 * 60 * 60 * 24)); 
     let jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
     let menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60)) 
     let detikk = Math.floor( lebih % (1000 * 60) / 1000) 

 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender) 
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { day: 'numeric' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
        let help = Object.values(plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, wm, _p,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 //   const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')    
    //------------------< MENU >----------------
let mangkane25 = "mangkane25"
let mangkane26 = "mangkane26"
let mangkane27 = "mangkane27"
let mangkane28 = "mangkane28"
let mangkane29 = "mangkane29"
let mangkane30 = "mangkane30"
let mangkane31 = "mangkane31"
let mangkane32 = "mangkane32"
let mangkane33 = "mangkane33"
let mangkane34 = "mangkane34"
let mangkane35 = "mangkane35"
let mangkane36 = "mangkane36"
let mangkane37 = "mangkane37"
let mangkane38 = "mangkane38"
let mangkane39 = "mangkane39"
let mangkane40 = "mangkane40"
let snd = `${pickRandom([mangkane25,mangkane26,mangkane27,mangkane28,mangkane29,mangkane30,mangkane31,mangkane32,mangkane33,mangkane34,mangkane35,mangkane36,mangkane37,mangkane38,mangkane39,mangkane40])}`
let audio = `https://raw.githubusercontent.com/aisyah-rest/mangkane/main/Mangkanenya/${snd}.mp3`
//•••••••••••••• Menunya •••••••••••••••//
//let pp = await conn.profilePictureUrl[m.sender].catch(_ => './src/avatar_contact.png')
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
	externalAdReply: { showAdAttribution: true,
	mediaUrl: syt,
    mediaType: 2, 
    description: syt,
    title: "Folow Ig Saya Kak",
    body: bottime,
    thumbnail: fp,
    sourceUrl: syt
} } } ) 
/*await conn.send3ButtonImg(m.chat, pu, tex, text, '𝐎ᴡɴᴇʀ', '.owner', '𝐑ᴜʟᴇs', '.rules', '𝐃ᴏɴᴀsɪ', '.donasi', m, { ephemeralExpiration: 84600, contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2, 
    description: sig,
    title: `👋 Hay Kaaak :> ${name}`,
    body: 'Folow Ig Saya Kak ×͜×',
    thumbnail: fp,
    sourceUrl: sig
} } } )*/
/*await conn.sendButton(m.chat, tex, text, pu, [['𝐎ᴡɴᴇʀ', '.creator'], ['𝐑ᴜʟᴇs', '.rules'], ['𝐃ᴏɴᴀsɪ', '.donasi']], m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2, 
    description: sig,
    title: `👋 Hay Kak :> ${name}`,
    body: 'Folow Ig Saya Kak ×͜×',
    thumbnail: fp,
    sourceUrl: sig 
} } } ))*/

conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: date,
body: 'bodynya',
thumbnailUrl: "https://telegra.ph/file/0884db641072a3d40d5cd.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})

//await m.reply(tex + text)  
} catch (e) { 
conn.reply(m.chat, 'Maaf, menu sedang error', m) 
throw e 
} } 

handler.command = /^(allmenu?)$/i   
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}




