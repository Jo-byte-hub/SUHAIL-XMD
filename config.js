const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="okoyejoshi@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Jo-byte-hub/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH";
global.website=process.env.GURL || "https://chat.whatsapp.com/Ek55y9kQcFTKO8BtUT0RfH" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Josh Tech" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349115983460";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "image" // set Image/video urls here
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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_13_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDYsXG4gICAgICAgIDEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicVpyei9nMVlSYXB1SGVKdCtFS25DNG94VG5ZT2RLYjZCWFQxRVMxZGdpaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMmJhQXptbjlScEt4QXhnbmstM3JSQVwiLFxuICBcInBob25lSWRcIjogXCI5N2QyODVmNy1jODgyLTQxMWYtYjVhNi04ODgxYTM5NzFhY2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAyNCxcbiAgICAgIDE4MSxcbiAgICAgIDE2NixcbiAgICAgIDE0MCxcbiAgICAgIDU0LFxuICAgICAgMTUxLFxuICAgICAgNjEsXG4gICAgICAxNTQsXG4gICAgICAzNyxcbiAgICAgIDEwNixcbiAgICAgIDE2MSxcbiAgICAgIDExNyxcbiAgICAgIDEwMCxcbiAgICAgIDEzNyxcbiAgICAgIDMsXG4gICAgICAyNixcbiAgICAgIDIwMixcbiAgICAgIDUxLFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDIxNixcbiAgICAgIDE3MyxcbiAgICAgIDE2OSxcbiAgICAgIDIzMixcbiAgICAgIDEzMixcbiAgICAgIDE1MyxcbiAgICAgIDIyMyxcbiAgICAgIDE4MixcbiAgICAgIDM1LFxuICAgICAgMjA5LFxuICAgICAgMjI4LFxuICAgICAgMjYsXG4gICAgICAzNixcbiAgICAgIDE4MyxcbiAgICAgIDE2NCxcbiAgICAgIDc2LFxuICAgICAgMTMxLFxuICAgICAgOTYsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkExVlhYRDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTU5ODM0NjA6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPa295ZSBKb3NodWFcIixcbiAgICBcImxpZFwiOiBcIjIxNTUwNDc5OTE5MTI1NTo1N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOeWd6Y1FHRUx1TGxMZ0dHQXNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQ1N1dROW5nUmkzdnRRenhqYW5uZm4xTnpqbkZRUXhXY3BrTVF0WVBkd3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieEp1SWtJZ1hrY0pJeFZLRHVjTlBvNlFkblBwTTBOTFNHNDI2OVlxbzR3VTZIdi9uSU5wNkFlVGRNRWpJNW9wQXM5bHAzOXUrcVA0VXhOMDBmLzJMQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRHA4RDlOMmdYVERGMzlBeUhuaVdWNmRreDNmTDBnY0dHQkpmbGhTT0dOZEEvbnJwK2VmK1BkR2VqaEtZQXpyVTdTZ0NEYytaV3B2SHZwNkFIWXFnZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExNTk4MzQ2MDo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MzgyNDAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVlFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNWUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoMXVFZmN5MGRTVVExSXlMb2M5L1lia3NQeFR0TmczU3NCV3dnNzZPVFRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTQ0ODQ4MjgsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgxNjc4NDE1ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "Josh BOT", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "Josh Tech" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Josh BOT",
  ownername:process.env.OWNER_NAME|| "Joshua",
  ErrorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "JOSH ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = PROCESs.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094
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
