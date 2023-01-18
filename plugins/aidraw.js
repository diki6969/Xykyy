import axios from "axios"
let handler = async (m, {command, text, conn}) => {
m.reply('Sedang Digambar Oleh AI')
if (command == 'aidraw') {
let haha = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${global.lol}&text=${text}`)
conn.sendButton(m.chat, `*${text}*`.trim(), author, haha.data, [[' Next', `.${command} ${text}`]], m)}
}
handler.command = handler.help = ['aidraw']
handler.tags = ['internet', 'tools']
handler.limit = true
export default handler