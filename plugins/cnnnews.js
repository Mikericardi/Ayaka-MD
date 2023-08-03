import fetch from 'node-fetch'
import bo from 'dhn-api'

let handler = async (m, { conn }) => {
  try {
    const news = await bo.CNNNews()
    const article = news[Math.floor(Math.random() * news.length)]
    const { berita, berita_url, berita_thumb } = article

    const message = `📺 *CNN News*\n📢 *Berita:* ${berita}\n🛰 *Source Url:* ${berita_url}`

    const thumb = await fetch(berita_thumb)
    conn.sendFile(m.chat, thumb.body, 'thumbnail.jpg', message, m, {
      thumbnail: thumb.body,
      mimetype: 'image/jpeg'
    })
  } catch (err) {
    console.error(err)
    conn.reply(m.chat, 'Terjadi kesalahan saat memuat berita', m)
  }
}

handler.help = ['cnnnews']
handler.tags = ['berita']
handler.command = /^cnn(news)?$/i
handler.limit = true

export default handler
