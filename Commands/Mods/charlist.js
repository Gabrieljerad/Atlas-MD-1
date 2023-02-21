module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1/2/3/4/5/6/7",
  react: "💫",
  start: async (Miku, m, { text, prefix ,modStatus}) => {
    let txt = `       『  *ʙᴏᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ ʟɪꜱᴛ*  』\n\n\n_0 - ᴀᴛʟᴀꜱ_\n\n_1 - ᴘᴏᴡᴇʀ_\n\n_2 - ᴍᴀᴋɪᴍᴀ_\n\n_3 - ʀɪᴀꜱ ɢʀᴇᴍᴏʀʏ_\n\n_4 - ᴢᴇʀᴏ ᴛᴡᴏ_\n\n_5 - ᴄʜɪᴋᴀ_\n\n_6 - ᴍɪᴋᴜ ɴᴀᴋᴀɴᴏ_\n\n_7 - ᴍᴀʀɪɴ ᴋɪᴛᴀɢᴀᴡᴀ_\n\n\nᴇxᴀᴍᴘʟᴇ: *${prefix}ꜱᴇᴛᴄʜᴀʀ 0*\n`;

    let botLogos = [
      "https://c4.wallpaperflare.com/wallpaper/523/235/790/anime-anime-girls-red-eyes-wallpaper-preview.jpg",
      "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp11253602.jpg",
      "https://images5.alphacoders.com/126/1264439.jpg",
      "https://c4.wallpaperflare.com/wallpaper/280/659/612/highschool-dxd-gremory-rias-wallpaper-preview.jpg",
      "https://images3.alphacoders.com/949/949253.jpg",
      "https://images4.alphacoders.com/100/1002134.png",
      "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp10524620.jpg",
      "https://wallpapercave.com/cdn-cgi/mirage/4060d9c58e8c34505929baac680386a213cfd243a199f1ff8f223c312de6c835/1280/https://wallpapercave.com/wp/wp10472416.png",
    ];

    let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];
   
    let sections = [] 
    let chars = [`ᴀᴛʟᴀꜱ`, `ᴘᴏᴡᴇʀ`, `ᴍᴀᴋɪᴍᴀ`, `ʀɪᴀꜱ ɢʀᴇᴍᴏʀʏ`, `ᴢᴇʀᴏ ᴛᴡᴏ`, `ᴄʜɪᴋᴀ`, `ᴍɪᴋᴜ ɴᴀᴋᴀɴᴏ`, `ᴍᴀʀɪɴ ᴋɪᴛᴀɢᴀᴡᴀ`]
    let buttonDesc =[`ꜱᴇᴛ ʙᴏᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛᴏ ᴀᴛʟᴀꜱ`, `ꜱᴇᴛ ʙᴏᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛᴏ ᴘᴏᴡᴇʀ`, `ꜱᴇᴛ ʙᴏᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛᴏ ᴍᴀᴋɪᴍᴀ`, `ꜱᴇᴛ ʙᴏᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛᴏ ʀɪᴀꜱ ɢʀᴇᴍᴏʀʏ`, `ꜱᴇᴛ ʙᴏᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛᴏ ᴢᴇʀᴏ ᴛᴡᴏ`, `ꜱᴇᴛ ʙᴏᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛᴏ ᴄʜɪᴋᴀ`, `ꜱᴇᴛ ʙᴏᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛᴏ ᴍɪᴋᴜ ɴᴀᴋᴀɴᴏ`, `ꜱᴇᴛ ʙᴏᴛ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛᴏ ᴍᴀʀɪɴ ᴋɪᴛᴀɢᴀᴡᴀ`]
    let buttonTexts = ['-ꜱᴇᴛᴄʜᴀʀ 0', '-ꜱᴇᴛᴄʜᴀʀ 1', '-ꜱᴇᴛᴄʜᴀʀ 2', '-ꜱᴇᴛᴄʜᴀʀ 3', '-ꜱᴇᴛᴄʜᴀʀ 4', '-ꜱᴇᴛᴄʜᴀʀ 5', '-ꜱᴇᴛᴄʜᴀʀ 6', '-ꜱᴇᴛᴄʜᴀʀ 7']
    
    for (let i = 0; i < chars.length; i++) {
        const list = {title: `${prefix}ꜱᴇᴛᴄʜᴀʀ ${i}`,
        rows: [
        
                {
                 title: `${chars[i]}`, 
                 rowId: `${buttonTexts[i]}`,
                 description: `${buttonDesc[i]}`
                }
                ]
             }
                sections.push(list)
            }


    let buttonMessage = {
      //image: { url: randomimage },
      text: txt,
      footer: `*${botName}*`,
      buttonText: "ᴄʜᴏᴏꜱᴇ ᴄʜᴀʀᴀᴄᴛᴇʀ",
      sections,
    };

    Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
