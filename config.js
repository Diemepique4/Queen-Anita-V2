//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9EaEZTcE8zbjhsaGtHQ0NIeSs3b1Y2ZGVzclJ5dTRBbmxGUkMyVFJraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDhsenpWRVhCMkxOT2YxQ2g1SGJEdXZKU0Z1YmxiaDd1dWErbzdST2pBaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTmovcG5kbC9qYVR5YjA5bGlOazR4bGp6cjRtMHZFc1Z1S2lJRzhlczN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0S0RudkVYSzR6bFhyYVNpand3N3JGMDBiUUUzVm1oN3FJenc3SlZTdENVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHVTBQN0l2ZG4vdUkxZno0eS9VWVBjb1lsbTdHcHh6RHB4OThQQklyRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpqM3laMnloVGdpREd0bUp5UXkzTTdvMmFHMFZyRG5takhHb2lzeFQ5UTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExRUVU0aWJ1QnRmazBoVUZIenYzbmoyWGNTaXJtcGxlM0FiL0UvMXpIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2xPdTJvMkZXaDNZK2dVdzc5SzJYejh5Nlc3eEw3SG45MENTWE11eXBSRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5KNlkvM2d2RFlpeFppZXJ1TVJxc1c5TGdtMnZNbE95cE9RK1kvWnNCOUJyeDdvZGZKMG1xVEt5OFdaSFYybW9VU09zWHhwRXFkM2xJN1VmYjlPSEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJUWXo0TjlvaWZXbkZqQ0txTU8zSDd4MUZSZmhxcHBTN0xjSmppbjBSZ2M0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzdW9MNHoyWlRwaXJTUzBibjhZeUt3IiwicGhvbmVJZCI6IjNhOThmYmI3LWJmYzctNGE3My1iOTcxLTgzZTY4ZmI2MWExNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjeGZsR2N3YTUzSi9jZENJUmtWRVJFMVc1MjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFFnRWpkQ0tHdzhYTERjNGpGY1k2dEhnVUpNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldYMjZaNFEyIiwibWUiOnsiaWQiOiIyMjE3ODY3NzQ2MjI6ODVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCO76O/IPCdkIPwnZqw76O/8J2QhvCdmrTigqwg76O/8J2auOKCrPCdkIPwnZqq8J2asO+jvyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSU9Kc2FFRkVJWFJ6TFlHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYTc1K3FiV1MyellEL3VxcXkza0VHeTdQcDNBdG13Q2RWVzNUb1hrMVFnZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNFZlN2Z5NU55VElXT3EvYnhtYlBPWUVPbG1ncjBJV09nSFowTTMzSnBTcWVUei9XRmJPRldJV21YckVteXNuNVRqT0k1OXhieXZHdllKQkV0TTdZZ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InhObVF0MjR0R3owSFNaTXd4TUJ3eDBQWjE3RnpSWXo4dnNtWHJ6YjhnRFdkVFA1bjJyQVQza2dHZjg0bUp1bFduSDhER3VhT2VzSTFTejRyY0tOU0JBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzg2Nzc0NjIyOjg1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQld1K2ZxbTFrdHMyQS83cXFzdDVCQnN1ejZkd0xac0FuVlZ0MDZGNU5VSUkifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTExNDUxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMZTkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
