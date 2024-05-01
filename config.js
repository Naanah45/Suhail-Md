const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://ayanokoji:ayanokoji12@ayanokoji.ngizodh.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://delvinn1_user:KqgS44YixgEcENTQaccxgqekNlhtoXkz@dpg-coc4e7m3e1ms73augtq0-a.oregon-postgres.render.com/delvinn1"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Accra";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233505796541";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 7
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


      global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_03_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODMsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICAzOCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTEsXG4gICAgICAgIDY5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnRXE2WUllNlM1L2Z1RDVPMzF2RWwrNnllMEFEa2VJQkl6YVdpWWFFZVU0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE1NjcyMDk2MTMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTIxRTc1MTIzQzZEQjg5M0FDRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ1NjEzODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZjFVaHluc1pUTmFRSGc4OWhpbTJHQVwiLFxuICBcInBob25lSWRcIjogXCI2NGI1YjYyZi1jOTBiLTQyMzItYTNkNy04NzdiNWM0ZTEwMjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICAxNzYsXG4gICAgICAyMTgsXG4gICAgICAyMDAsXG4gICAgICAyMjgsXG4gICAgICAyMzAsXG4gICAgICAxNTEsXG4gICAgICAxMjEsXG4gICAgICA2NCxcbiAgICAgIDg3LFxuICAgICAgMjQwLFxuICAgICAgMTE5LFxuICAgICAgMTY1LFxuICAgICAgMjIxLFxuICAgICAgMjgsXG4gICAgICAzMixcbiAgICAgIDE0OSxcbiAgICAgIDQzLFxuICAgICAgNTYsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OCxcbiAgICAgIDI3LFxuICAgICAgMTk1LFxuICAgICAgNDQsXG4gICAgICA4NyxcbiAgICAgIDQ1LFxuICAgICAgMTMyLFxuICAgICAgMTk4LFxuICAgICAgMjM3LFxuICAgICAgMzAsXG4gICAgICAxNDAsXG4gICAgICAyMTYsXG4gICAgICAyMTYsXG4gICAgICAyNDEsXG4gICAgICAzOSxcbiAgICAgIDE3NyxcbiAgICAgIDE3OSxcbiAgICAgIDcwLFxuICAgICAgMTM4LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRaRkxTTkxHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNTY3MjA5NjEzMjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGFzdCBzZXB0ZW1iZXJcIixcbiAgICBcImxpZFwiOiBcIjE2OTY4ODExODkwNzQ6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMamdvbzBHRU5uQ3lMRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJ6ZkVwcnl2bGJpVW5qR2xnLzVEaG0xM2hYUmVnL2ZRNUN0QWZaNDVhazQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUlpybDFVbHV1ajArTVRJTHFtMlhhTmhjajhrcFFEaHZYOHJUS3JST0ZQWHVpUXkrVmZ0K1R4ak50NDdCbGFGRlFHSzRaR0pBL3lCNS9sYXpTNmo4aXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOFVNdi9lYm1qN2dIOVFJUFl5Mzh6VFlHQUFNa3NrS0FaeDlRdlJubDkzUTg4TWxHb0dtTG8vd2IyTUJxNWgyYWRrVkxUbVVSL2hBb3NZMGowYUorQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTU2NzIwOTYxMzI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDU2MTM3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNIcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0hxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWWR1eGtYLzBENnRlcXdONjFuL1J4Rk1UUTJkQTR5S0hiVFdhRGdvVTJMbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjM4NDQ1MTEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQ1NjEzNzg4NzlcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "DENNIS",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
