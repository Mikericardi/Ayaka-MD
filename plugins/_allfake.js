//By Papah-Chan

import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://telegra.ph/file/7f9631ca7b0d198b7694c.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
   global.pu = pp
	global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
		
	// Module 
	global.fetch = import('node-fetch')
	global.bochil = import('@bochilteam/scraper')
		
	const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
	global.kontak2 = [
	[owner[0], await conn.getName(owner[0] + '6283861760785@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'shendy1908@gmail.com', true],
	[owner[1], await conn.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'shendy1908@gmail.com', true], ]
        
		// ucapan ini mah
		
		//global.ucapans = ucapan()
		global.name = name
		global.flaA = pickRandom(flaaa2)
// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                    showAdAttribution: true,
					title: global.ucapan,
					body: "Hallo " + name,
					mediaUrl: sgc,
					description: `Rpg Bot Whatsapp`,
					previewType: "PHOTO",
					thumbnail: await (await fetch(pp)).buffer(),
					sourceUrl: sig,
					
				}
			}
		}
				global.fakeig = {
				contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sig,
						mediaType: "VIDEO",
						description: "Follow: " + sig,
						title: "👋 Hay Kak :> " + name,
						body: botdate,
						thumbnailUrl: await (await fetch(pp)).buffer(),
						sourceUrl: sgc
					}
				}
			}
				global.fakefb = {
			contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sfb,
						mediaType: "VIDEO",
						description: "Follow: " + sfb,
					     title: "👋 Hay Kak :> " + name,
						body: botdate,
						thumbnailUrl: await (await fetch(pp)).buffer(),
						sourceUrl: sgc
                 	}
				}
			}
			// Fake 🤥
		global.fpayment = {
				"key": {
					"remoteJid": "0@s.whatsapp.net",
					"fromMe": false,
					"id": "BAE595C600522C9C",
					"participant": "0@s.whatsapp.net"
				},
				"message": {
					"requestPaymentMessage": {
						"currencyCodeIso4217": "USD",
						"amount1000": fsizedoc,
						"requestFrom": "0@s.whatsapp.net",
						"noteMessage": {
							"extendedTextMessage": {
								"text": "👋 Hay Kak :> " + name
							}
						},
						"expiryTimestamp": fsizedoc,
						"amount": {
							"value": fsizedoc,
							"offset": fsizedoc,
							"currencyCode": "USD"
						}
					}
				}
			}
			// Fake 🤥
		global.ftroli = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				orderMessage: {
					itemCount: fsizedoc,
					status: 1,
					surface: 1,
					message: botdate,
					orderTitle: wm,
					sellerJid: '0@s.whatsapp.net'
				}
			}
		}
		global.fkontak = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				'contactMessage': {
					'displayName': wm,
					'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},
		;;;\nFN:${wm},
		\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
					'jpegThumbnail': fp,
					thumbnail: fp,
					sendEphemeral: true
				}
			}
		}
		global.fvn = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				"audioMessage": {
					"mimetype": "audio/ogg; codecs=opus",
					"seconds": fsizedoc,
					"ptt": "true"
				}
			}
		}
		global.fvid = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				"videoMessage": {
					"title": wm,
					"h": `Hmm`,
					'seconds': fsizedoc,
					'caption': "👋 Hay Kak :> " + name,
					'jpegThumbnail': fp
				}
			}
		}
		global.ftextt = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				"extendedTextMessage": {
					"text": "👋 Hay Kak :> " + name,
					"title": bottime,
					'jpegThumbnail': fp
				}
			}
		}
		global.fliveLoc = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				"liveLocationMessage": {
					"caption": "👋 Hay Kak :> " + name,
					"h": `${bottime}`,
					'jpegThumbnail': fp
				}
			}
		}
		global.fliveLoc2 = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				"liveLocationMessage": {
					"title": "👋 Hay Kak :> " + name,
					"h": bottime,
					'jpegThumbnail': fp
				}
			}
		}
		global.ftoko = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				"productMessage": {
					"product": {
						"productImage": {
							"mimetype": "image/jpeg",
							"jpegThumbnail": fp //Gambarnye
						},
						"title": "👋 Hay Kak :> " + name, //Kasih namalu 
						"description": bottime,
						"currencyCode": "IDR",
						"priceAmount1000": fsizedoc,
						"retailerId": "Ghost",
						"productImageCount": 1
					},
					"businessOwnerJid": `0@s.whatsapp.net`
				}
			}
		}
		global.fdocs = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				documentMessage: {
					title: wm,
					jpegThumbnail: fp
				}
			}
		}
		global.fgclink = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				groupInviteMessage: {
					groupJid: "17608914335-1625305606@g.us",
					inviteCode: null,
					groupName: wm,
					caption: "👋 Hay Kak :> " + name,
					jpegThumbnail: fp
				}
			}
		}
		global.fgif = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				"videoMessage": {
					"title": "👋 Hay Kak :> " + name,
					"h": `Hmm`,
					'seconds': fsizedoc,
					'gifPlayback': 'true',
					'caption': bottime,
					'jpegThumbnail': fp
				}
			}
		}
		global.fimg = {
			key: {
				participant: '0@s.whatsapp.net'
			},
			message: {
				imageMessage: {
					url: logo,
					mimetype: 'image/jpeg',
					fileLength: fsizedoc,
					height: 306,
					width: 366,
					jpegThumbnail: fp
				}
			}
		}
		global.fimgv = {
				key: {
					participant: '0@s.whatsapp.net'
				},
				message: {
					imageMessage: {
						url: logo,
						mimetype: 'image/jpeg',
						fileLength: fsizedoc,
						height: 306,
						width: 366,
						jpegThumbnail: fp,
						viewOnce: true
					}
				}
			}
			// Random Pick Fake
                             let pft = [global.fimg, global.fimgv, global.fpayment, global.ftroli, global.fkontak, global.fvn, global.fvid, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif]
			                   // Pick Random
		                     global.fakes = pft.getRandom()
		let rfake = [global.fpayment, global.ftroli, global.fkontak, global.fvn, global.fvid, global.ftextt, global.fliveLoc, global.fliveLoc2, global.ftoko, global.fdocs, global.fgclink, global.fgif]
		   global.rfakes = rfake.getRandom()
			}}
export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)