const {
	MessageType,
    WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
prefix = setting.prefix

module.exports = welcome = async (devan, anu) => {
		try {
           const mdata = await devan.groupMetadata(anu.jid)
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await devan.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await devan.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            hehe = await getBuffer(pp_user)
            if (anu.action == 'add' && mem.includes(devan.user.jid)) {
            devan.sendMessage(anu.jid, `hello bro I am A Bot 😎🌹 To use ${prefix}menu`, 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(devan.user.jid)) {
             const mdata = await devan.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await devan.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const devan1 = await devan.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const devan2 = devan1.message["ephemeralMessage"] ? devan1.message.ephemeralMessage : devan1
                let v = devan.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `▢ *Hɪ* @${num.split('@')[0]}\n▢ *Bɪᴏ* : *${thu.status}*\n▢ *Mᴇᴍʙᴇʀs : ${memeg}*\n▢ *Wᴇʟᴄᴏᴍᴇ Tᴏ* \n *${mdata.subject}*\n▢ *Dᴏɴᴛ Fᴏʀɢᴇᴛ Dɪsᴄʀɪᴘᴛɪᴏɴ*\n ${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`${prefix}getdeskgc`,buttonText:{displayText:'DISCRIPTION'},type:1}]
                welcomeButt = { contentText: ` `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: devan2.message.locationMessage}
                devan.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(devan.user.jid)) {
                const mdata = await devan.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const devan3 = await devan.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const devan4 = devan3.message["ephemeralMessage"] ? devan3.message.ephemeralMessage : devan3
                let w = devan.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Gᴏᴏᴅ Bʏᴇ Bʀᴏᴛʜᴇʀ* 👋\n@${num.split('@')[0]}\n *Rᴇsᴛ Nᴏᴡ Pᴇᴀᴄᴇ* ▢\n${time_wel} -  ${time_welc}`
                goodbyeBut = [{buttonId:`${prefix}h`,buttonText:{displayText:'GET OUT 🚪'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'SC'}, type:1}]
                goodbyeButt = { contentText: ` `, footerText: `${out}`, buttons: goodbyeBut, headerType: 6, locationMessage: devan3.message.locationMessage}
                devan.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
