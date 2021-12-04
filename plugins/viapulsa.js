let fetch = require('node-fetch')
	let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭─˗ˏˋ *Pembayaran* ´ˎ˗
│ ✎ Untuk Pembayaran Via Pulsa
│ ✎ Ke Nomor = 081998903280
│ ✎ Bila Perlu hubungi owner 
│ 
╭─˗ˏˋ *Fitur Bot* ´ˎ˗
│
│ ✎ *FITUR DOWNLOADER 500++
│    YouTube, Twitter, 
│     Tiktok, Instagram, dll.
│    *FITUR STIKER*
│ ✎ *FITUR ADMIN*
│    *KICK ORANG*
│    *JADIIN ADMIN*
│ ✎ *FITUR ISLAM*
│   *QURAN*
│   *CEK JADWAL SHALAT*
│ ✎ *INTERNET*
│   *BRAINLY*
│   *GOOGLE*
│ ✎ *DAN 200 LEBIH*
│   *FITUR LAINNYA*
│ 
│ ✎ ©2021 Kyura Bot
│ ✎ Script original by Nurutomo
╰‿‿˗ˏˋ *${namabot}* ´ˎ˗
	`.trim(), footer, 'Owner', '.owner')
	handler.help = ['donasi']
	handler.tags = ['info']
	handler.command = /^viapulsa$/i
	
	module.exports = handler
