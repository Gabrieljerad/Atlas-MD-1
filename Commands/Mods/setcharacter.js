const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mkchar } = require("../../Database/dataschema.js");



module.exports = { 

    name: "setcharacter", 
    alias: ["setchar","setbotcharater","changechar","changecharacter","botchar","botcharacter"], 
    desc: "Ban a member", 
    category: "core", 
    usage: "setchar 0/1/2/3/4/5/6/7", 
    react: "🎀", 
    start: async ( 
      Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator,modStatus} 
    ) => { 

      if (modStatus=="false"&&!isCreator)  return m.reply('ꜱᴏʀʀʏ, ᴏɴʟʏ ᴍʏ *ᴅᴇᴠꜱ* ᴀɴᴅ *ᴍᴏᴅꜱ* ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ !');
      if (!text) return m.reply(`ᴘʟᴇᴀꜱᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴄʜᴀʀᴀᴄᴛᴇʀ ɴᴜᴍʙᴇʀ ᴛᴏ ꜱᴇᴛ (0/1/2/3/4/5/6/7).\n\nᴇxᴀᴍᴘʟᴇ: ${prefix}ꜱᴇᴛᴄʜᴀʀ 0`);

      let charNum = text;

      await mkchar.create({id:'1', seletedCharacter: "0"});

      let botNames = ['ᴀᴛʟᴀꜱ', 'ᴘᴏᴡᴇʀ', 'ᴍᴀᴋɪᴍᴀ', 'ʀɪᴀꜱ ɢʀᴇᴍᴏʀʏ', 'ᴢᴇʀᴏ ᴛᴡᴏ', 'ᴄʜɪᴋᴀ' , 'ᴍɪᴋᴜ ɴᴀᴋᴀɴᴏ', 'ᴍᴀʀɪɴ ᴋɪᴛᴀɢᴀᴡᴀ']
      let botLogos =[
        'https://c4.wallpaperflare.com/wallpaper/523/235/790/anime-anime-girls-red-eyes-wallpaper-preview.jpg',
        'https://wallpapercave.com/wp/wp11253614.jpg',
        'https://images5.alphacoders.com/126/1264439.jpg',
        'https://c4.wallpaperflare.com/wallpaper/280/659/612/highschool-dxd-gremory-rias-wallpaper-preview.jpg',
        'https://images3.alphacoders.com/949/949253.jpg',
        'https://images4.alphacoders.com/100/1002134.png',
        'https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp10524620.jpg',
        'https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/uwp/uwp1895868.png'
      ]

      await mkchar.findOne({id:'1'}).then(async (charInfo) => {

        
        if (charInfo.seletedCharacter == charNum) {
           
                await mkchar.findOne({id:'1'}).then(async(res) => {
                    console.log(res.seletedCharacter)
                    //console.log(animeCharacter)
                })
            
          return m.reply(`Character number ${charNum} - ${botName} is already set as the default character.`);
        }
        else if (charNum == '0') {
            await mkchar.findOneAndUpdate({ id: '1'}, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '1') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '2') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '3') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '4') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '5') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '6') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '7') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}

        else {
            return m.reply(`Character number ${charNum} is not added.\n\ntype *${prefix}charlist* to see the list of added characters.`);
        }
    })

        /*if (charNum == '0') {
            await mkchar.findOneAndUpdate({ id: '1'}, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "0";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `Character number ${charNum} - ${botName} ɪꜱ ɴᴏᴡ ᴛʜᴇ ᴅᴇғᴀᴜʟᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ.\n` }, { quoted: m });
            
        }
        else if (charNum == '1') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "1";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `ᴄʜᴀʀᴀᴄᴛᴇʀ ɴᴜᴍʙᴇʀ ${charNum} - ${botName} ɪꜱ ɴᴏᴡ ᴛʜᴇ ᴅᴇғᴀᴜʟᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ.\n` }, { quoted: m });
        }
        else if (charNum == '2') {
            await await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "2";
            return Miku.sendMessage(m.from, { image: {url:botImage1},caption: `ᴄʜᴀʀᴀᴄᴛᴇʀ ɴᴜᴍʙᴇʀ ${charNum} - ${botName} ɪꜱ ɴᴏᴡ ᴛʜᴇ ᴅᴇғᴀᴜʟᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ.\n` }, { quoted: m });
    
        }
        else if (charNum == '3') {
            await await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "3";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `ᴄʜᴀʀᴀᴄᴛᴇʀ ɴᴜᴍʙᴇʀ ${charNum} - ${botName} ɪꜱ ɴᴏᴡ ᴛʜᴇ ᴅᴇғᴀᴜʟᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ.\n` }, { quoted: m });
    
        }
        else if (charNum == '4') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "4";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `ᴄʜᴀʀᴀᴄᴛᴇʀ ɴᴜᴍʙᴇʀ ${charNum} - ${botName} ɪꜱ ɴᴏᴡ ᴛʜᴇ ᴅᴇғᴀᴜʟᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ.\n` }, { quoted: m });
            
        }
        else if (charNum == '5') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "5";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `ᴄʜᴀʀᴀᴄᴛᴇʀ ɴᴜᴍʙᴇʀ ${charNum} - ${botName} ɪꜱ ɴᴏᴡ ᴛʜᴇ ᴅᴇғᴀᴜʟᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ.\n` }, { quoted: m });
            
        }
        else if (charNum == '7') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "0";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `ᴄʜᴀʀᴀᴄᴛᴇʀ ɴᴜᴍʙᴇʀ ${charNum} - ${botName} ɪꜱ ɴᴏᴡ ᴛʜᴇ ᴅᴇғᴀᴜʟᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ.\n` }, { quoted: m });
        }
        else {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "7";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `ᴄʜᴀʀᴀᴄᴛᴇʀ ɴᴜᴍʙᴇʀ ${charNum} - ${botName} ɪꜱ ɴᴏᴡ ᴛʜᴇ ᴅᴇғᴀᴜʟᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ.\n` }, { quoted: m });
        }
        */

    }
}       
