import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;XynaBotz\nNICKNAME:ð Owner Xynaaâ\nORG:NexEp\nTITLE:soft\nitem1.TEL;waid=6285718828566:+62 857-1882-8566\nitem1.X-ABLabel:ð Nomor Owner\nitem2.URL:https://chat.whatsapp.com/DYDvWcAnMwQC5XO1c2AZ9E\nitem2.X-ABLabel:ð¬ More\nitem3.EMAIL;type=INTERNET: xynabotz@gmail.com\nitem3.X-ABLabel:ð Mail Owner XynaBotz\nitem4.ADR:;;ð®ð© Indonesia;;;;\nitem4.X-ABADR:ð¬ More\nitem4.X-ABLabel:ð Lokasi Saya\nBDAY;value=date:ð 03 Febuari 2003\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `ð Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler