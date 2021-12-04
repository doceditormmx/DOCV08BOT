let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.isGroup) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "id" }, ''))
        //let res = await fetch(global.API('rey', '/api/fun/simisimi-ind2?', { text: encodeURIComponent(m.text) }, 'apikey'))
        if (!res.ok) return m.reply(eror)
        let json = await res.json()
        if (json.success == 'maksdnya kak?') await m.reply('hah?\naku gk paham')
        else await m.reply(`${json.success}`)
        return !0
    }
    return true
}
module.exports = handler
