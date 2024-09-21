const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_00_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQxLFxuICAgICAgICAzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTY2LFxuICAgICAgICA5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDUzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICAzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4LFxuICAgICAgICA5NixcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSFBSWE1ibGsyT2xvRzVkTy9UdnNKTDdLMk1BR2tYdTVjcTNBR1hxUmZqMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMEN5R1FMNDBUeU83NC0ySk1RbVFOQVwiLFxuICBcInBob25lSWRcIjogXCJjZjY3ZjY0Ni1lZDA0LTRjZWQtYjE2MS01MWM1MGI2NThkNDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICA4NCxcbiAgICAgIDE3MCxcbiAgICAgIDIzNyxcbiAgICAgIDIwMyxcbiAgICAgIDEwNCxcbiAgICAgIDUxLFxuICAgICAgNzAsXG4gICAgICAyNDQsXG4gICAgICA4NixcbiAgICAgIDI0NCxcbiAgICAgIDY5LFxuICAgICAgMTQsXG4gICAgICAxMzUsXG4gICAgICAzOCxcbiAgICAgIDY0LFxuICAgICAgMjUsXG4gICAgICAxMTcsXG4gICAgICAxMzgsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDE2OSxcbiAgICAgIDQ3LFxuICAgICAgMjM2LFxuICAgICAgMTExLFxuICAgICAgNjksXG4gICAgICAxNSxcbiAgICAgIDI4LFxuICAgICAgMjQsXG4gICAgICAyMzgsXG4gICAgICAzMCxcbiAgICAgIDIzMixcbiAgICAgIDU3LFxuICAgICAgNTMsXG4gICAgICAxMDEsXG4gICAgICAxNyxcbiAgICAgIDIzNSxcbiAgICAgIDEwMCxcbiAgICAgIDE1NCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKRkU4U0xTOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0NTYxMzQzOTo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIyMzA4MzAzNzk0MzUxOjY0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tLQ3Evc0hFSkt5dXJjR0dCRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWDJUanhHaWJpcS9QY3lPYWhzUVY3Q3o3ZTFsNkFQa1h4MWp4R1k0c3cxdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrcVFjdjlzOTZVeVFjeWZvTVdycWx4Z1hoN2VYMWhEVVkrWm1Pbm1VUDNmWGpzZlpkdWRiOUJCa2RRUWRUbWxYU2NVeko1L1Brd0tvaUVUSkdyNnJBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1NjYwK0gyVVVmMkNtMmwwVE5NczVCK3UxZmo1SFhGR0p4SkxaKzhVdCtQN3A2U0wzdDNHOGNXQmFKVUwyczRmQktQOU4wS2dmWUpLbWhUM0xHa3VBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ1NjEzNDM5OjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2OTEyNzkyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
