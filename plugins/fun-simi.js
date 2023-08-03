/*
import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .simi halo`
  let api = await fetch(`https://simsimi.info/api/?text=${text}&lc=id`)
  let res = await api.json()
  m.reply(res.success)
}
handler.command = ['simi']
handler.tags = ['fun']
handler.help = ['simi']

export default handler
*/

import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "id" }, ''))
  let json = await res.json()
  if (json.success)
	await conn.reply(m.chat, json.success, m)
  else throw json
}
handler.help = ['simi'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

export default handler
