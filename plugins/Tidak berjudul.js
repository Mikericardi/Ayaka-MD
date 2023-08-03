let handler = async (m, { conn, usedPrefix: _p }) => {



await conn.sendBut(m.chat, wm, wm, 'jsj', 'iej', m, { ephemeralExpiration: 84600, awaitButtonsId: true})

}

handler.command = /^(tbuton)$/i

export default handler
