import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://oni-chan.my.id/api/canvas/kaneki?name=${response[0]}&apikey=`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <text>')
handler.tags = ['maker','logo']
handler.command = /^(logokaneki)$/i

handler.limit = true

export default handler