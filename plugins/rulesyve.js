let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  //await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
╭─˗ˏˋ Rules ${namabot}  ´ˎ˗
│
│✎ *Mohon untuk tidak Spam Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi Pengguna Bot yang Spam*
│
│✎ *Mohon untuk tidak Menelpon Bot karena Bot ini sudah memiliki Otomatis Blokir Bagi orang yang nelpon Bot*
│
│✎ *Kami tidak bertanggung jawab atas penyalahgunaan bot*
│
│✎ *Kami tidak bertanggung jawab atas kebocoran data pribadi anda*
│
│
│✎ *Ping:* ${neww - old} *ms*
│✎ *Total user:* ${totalreg} *user*
│✎ *Uptime:* ${uptime}
│
╭─˗ˏˋ *Donasi*  ´ˎ˗
│✎ Pulsa : 089677763976
│✎ Dana & OVO: 089677763976
│
│✎Official Grup :
│${gc1}
│
│©2021 ${namabot}
│ Script original by Nurutomo
╰‿‿‿‿‿${namabot}‿‿‿‿‿‿ 
`.trim(), m)
}

handler.help = ['main']
handler.tags = ['infobot', 'rules']
handler.command = handler.command = /^(infobot|rules)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
