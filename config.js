const fs = require('fs')
//~~~~~~~~~SETTING BOT~~~~~~~~~~//
global.owner = "6282278097863"
global.nama = "⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳"
global.namaowner = "⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳"
global.namaBot = "⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳"
global.ch = '_'
global.status = true
global.owneroff = true
global.nobot = "6283137133540"
global.title = "⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳"
global.foother = '⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳'
global.namach = '⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳'
global.idch = '_'
global.namafile = '⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳'
global.yt = 'https://youtube.com/@slnckyami'
global.themeemoji = '金'
global.packname = "𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘉𝘺"
global.author = "\n\n\n\n\n𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘋𝘌𝘕𝘡𝘠 𝘖𝘍𝘍𝘊"
global.creator = "6282278097863@s.whatsapp.net"
//====== [ THEME URL & URL ] ========//
global.thumb = fs.readFileSync('./denzy.jpg'); // Buffer Image
global.thumbnail = 'https://c.termai.cc/i28/FaQ'
global.Url = '-'
global.logodana = "_"
global.logoovo = "_"
//~~~~~~~~~ Settings reply ~~~~~~~~~//
global.mess = {
    owner: "\`KHUSUS OWNER KAK😈`\`",
    prem: "\`KHUSUS PREMIUM KAK🥺\`",
    group: "\`ONLY GROUO KAK🥳\`"
    private: "\`ONLY PRIVATE CHAT KAK☺\`"
}

global.packname = '⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳'



//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//
global.pairing = "" //jangan di isi
global.pairing2 = "" // Jangan Di Apa Apain
global.qrcode = "120363366790950043@newsletter" // Jangan Di Apa Apain

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
