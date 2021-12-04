let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *Informasi Owner* ´ˎ˗
│ ✎ Nama : Kyura 
│    Kelas : 11 DKV 2,SMK N 1 SAWAN
│    Umur : 16
│    Asal : Bali 
│    Status : gatau mw isi apa anj
│    Suka : Jepang, Coding (dikit), B.Inggris
│ ✎ _Official Grup_ :
│    bit.ly/officialgrupkanaobot
│ ✎ _Instagram_ :
│    bit.ly/instagramkyura
│ ✎ _YouTube_ : 
│    bit.ly/Youtubekyura
│ ✎ _FaceBook_ :
│    bit.ly/facebookkyura
│ ✎ _WhatsApp_ :
│    bit.ly/whatsappkyura
╰‿‿‿‿‿‿‿‿
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main']
handler.command = /^(infoowner)$/i

handler.exp = 150

module.exports = handler
