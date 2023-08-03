import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
if (!text) throw "[!] Masukkan teks."
const configuration = new Configuration({
    apiKey: ""
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            m.reply(response.data.choices[0].text)
    }
handler.help = ['ai2', 'openai2']
handler.tags = ['info', 'fun']
handler.command = /^(ai2|openai2)$/i
export default handler


// BY ZYKO MD 

/*
import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
m.reply(md)
let zykomd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkey}&text=${text}&user=user-unique-id`)
let hasil = await zykomd.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(ai|openai)$/i
export default handler
*/
