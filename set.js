/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || '';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'FALSE;
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝗝𝗔𝗣𝗛𝗘𝗧-𝗫𝗠𝗗';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗝𝗔𝗣𝗛𝗘𝗧𝗧𝗘𝗖𝗛';
const packname = process.env.STICKER_PACKNAME || '𝗝𝗔𝗣𝗛𝗘𝗧𝗧𝗘𝗖𝗛';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '255613914546';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/d0s1op.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'FALSE';
const admin = process.env.ADMIN_MSG || '𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗶𝘀 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗥𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗢𝗻𝗹𝘆 𝗙𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀 𝗼𝗳 𝗚𝗿𝗼𝘂𝗽!';
const group = process.env.GROUP_ONLY_MSG || '𝗦𝗼𝗿𝗿𝘆 𝗧𝗵𝗶𝘀 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗢𝗻𝗹𝘆 𝗨𝘀𝗲𝗱 𝗜𝗻 𝗚𝗿𝗼𝘂𝗽𝘀😋😉!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗡𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗣𝗿𝗶𝘃𝗮𝗹𝗮𝗴𝗲!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗢𝗡𝗟𝗬 𝗙𝗢𝗥 𝗢𝗪𝗡𝗘𝗥 𝗢𝗙 𝗝𝗔𝗣𝗛𝗘𝗧-𝗫𝗠𝗗!';
const wapresence = process.env.WA_PRESENCE || 'typing';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '255';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'FALSE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
