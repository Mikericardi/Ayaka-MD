import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

export async function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Level ${user. level} 📊
*${user.exp - min} / ${xp}*
Less *${max - user.exp}* more! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Selamat ${this.getName(m.sender)} naik 🧬level\n.             ${user.role}`
        let str = `${this.getName(m.sender)} naik 🧬level\n.             ${user.role}

*🎉 C O N G R A T S 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]

• 🧬Previous Level : ${before}
• 🧬New Level : ${user.level}
• At Time : ${new Date().toLocaleString('id-ID')}

*Note:* The more frequently you interact with bots, the higher your level
`.trim()
            let data = 'src/lvlup_template.jpg'
            try {
            let img = await levelup(teks, user.level)
            this.sendFile(m.chat, img, 'image.jpg', str, m)
            } catch (e) {
            this.sendFile(m.chat, data, 'image.jpg', str, m)
            }

    }
}
export const disabled = true;