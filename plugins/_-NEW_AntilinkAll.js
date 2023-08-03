const isLinkGc = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendi
const isLinkHttp = /http|https/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let name = conn.getName(m.sender)
    
   
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkGc = isLinkGc.exec(m.text)
    const isAntiLinkTik = isLinkTik.exec(m.text)
    const isAntiLinkYt = isLinkYt.exec(m.text)
    const isAntiLinkTel = isLinkTel.exec(m.text)
    const isAntiLinkFb = isLinkFb.exec(m.text)
    const isAntiLinkIg = isLinkIg.exec(m.text)
    const isAntiLinkHttp = isLinkHttp.exec(m.text)
    let hapus = m.key.participant
    let bang = m.key.id

    if (chat.antiLinkGc && isAntiLinkGc) {
    if (isBotAdmin) {
    const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Group Lain!! ${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!isBotAdmin) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkTik && isAntiLinkTik) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Tiktok!! ${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkYt && isAntiLinkYt) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Youtube!!${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkTel && isAntiLinkTel) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Telegram!!${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkFb && isAntiLinkFb) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Facebook!!*${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkIg && isAntiLinkIg) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Instagram!!${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    
    if (chat.antiLinkHttp && isAntiLinkHttp) {
        m.reply(`Terdeteksi *${name}* Telah Mengirim Link Http!! ${isBotAdmin ? '' : '\n\n_Jadikan Bot Atmin Terlebih dahulu_'}`)
        if (isBotAdmin && bot.restrict) {
        return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
    //    return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('*Anda Atmin Anda Aman :v!*')
    }
    return !0
}