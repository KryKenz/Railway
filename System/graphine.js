("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../global.js");

var moment = require("moment-timezone");
module.exports = async (νℓкуяє, νℓcнαт, update, store) => {
  νℓкуяє.body =
    νℓcнαт.mtype === "conversation"
      ? νℓcнαт.message.conversation
      : νℓcнαт.mtype == "imageMessage"
      ? νℓcнαт.message.imageMessage.caption
      : νℓcнαт.mtype == "videoMessage"
      ? νℓcнαт.message.videoMessage.caption
      : νℓcнαт.mtype == "extendedTextMessage"
      ? νℓcнαт.message.extendedTextMessage.text
      : νℓcнαт.mtype == "buttonsResponseMessage"
      ? νℓcнαт.message.buttonsResponseMessage.selectedButtonId
      : νℓcнαт.mtype == "listResponseMessage"
      ? νℓcнαт.message.listResponseMessage.singleSelectReply.selectedRowId
      : νℓcнαт.mtype == "templateButtonReplyMessage"
      ? νℓcнαт.message.templateButtonReplyMessage.selectedId
      : νℓcнαт.mtype === "messageContextInfo"
      ? νℓcнαт.message.buttonsResponseMessage?.selectedButtonId ||
        νℓcнαт.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        νℓcнαт.text
      : "";
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  νℓкуяє.budy = typeof νℓcнαт.text == "string" ? νℓcнαт.text : "";
  νℓкуяє.icmd = νℓкуяє.body.startsWith(prefix);
  νℓкуяє.isCmd =
    prefix.includes(νℓкуяє.body != "" && νℓкуяє.body.slice(0, 1)) &&
    νℓкуяє.body.slice(1) != "";
  νℓкуяє.command = νℓкуяє.isCmd
    ? νℓкуяє.body.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  νℓкуяє.args = νℓкуяє.body.trim().split(/ +/).slice(1);
  νℓкуяє.pushname = νℓcнαт.pushName || "No Name";
  νℓкуяє.botNumber = await νℓкуяє.decodeJid(νℓкуяє.user.id);
  νℓкуяє.frome = νℓcнαт.sender == νℓкуяє.botNumber ? true : false;
  νℓкуяє.Fullarg = νℓкуяє.args.join(" ");
  νℓкуяє.contant = q = νℓкуяє.args.join(" ");
  νℓкуяє.quoted = νℓcнαт.quoted ? νℓcнαт.quoted : νℓcнαт;
  νℓкуяє.mime = (νℓкуяє.quoted.msg || νℓкуяє.quoted).mimetype || "";
  νℓкуяє.isMedia = /image|video|sticker|audio/.test(νℓкуяє.mime);
  νℓкуяє.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
  νℓкуяє.isCreator = [νℓкуяє.botNumber, ...global.mods]
    .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
    .includes(νℓcнαт.sender);
  νℓкуяє.mentionByTag =
    νℓcнαт.mtype == "extendedTextMessage" &&
    νℓcнαт.message.extendedTextMessage.contextInfo != null
      ? νℓcнαт.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  νℓкуяє.mentionByReply =
    νℓcнαт.mtype == "extendedTextMessage" &&
    νℓcнαт.message.extendedTextMessage.contextInfo != null
      ? νℓcнαт.message.extendedTextMessage.contextInfo.participant || ""
      : "";
  modString =
    process.env.mods === undefined
      ? "918436686758,917430922909"
      : process.env.mods;
  νℓкуяє.isModerator = modString.includes(
    νℓcнαт.sender.substring(0, νℓcнαт.sender.indexOf("@"))
  );
  return νℓкуяє;
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
