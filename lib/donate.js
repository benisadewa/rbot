exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `☣ -----[ *MENU DONASI ${BotName}* ]----- ☣
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? 

🗓 *${tampilTanggal}*
⏰ *${tampilWaktu}*

💰 Silahkan donasi dibawah ini :
   
🔱 *OVO*: 081271699856
🔱 *#DANA*: 081271699856
🔱 *#PULSA*: 088276463299
🔱 *#PULSA*: 081271699856
🔱 *#GOPAY*: 081271699856
TERIMA KASIH BUAT YANG SUDAH BERKENAN DONASI KE REUZ BOT

📺 *Iklan* : *Youtube REUZ*

✅ Follow akun instagram admin ${instagramlu}

📣 INFORMASI COVID-19 TERBARU!

🔊 POSITIF: *${corohelp.confirmed.value}*
🔊 SEMBUH: *${corohelp.recovered.value}*
🔊 MENINGGAL: *${corohelp.deaths.value}*
🔊 UPDATE: *${corohelp.lastUpdate}*

🔔 JASA PEMBUATAN BOT : *${whatsapplu}*
📢_TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

🖥 Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

💬 Official Grub [1] : ${grupch1}

💬 Official Grub [2] : ${grupch2}

  
☣ -----[ *POWERED BY ${BotName}* ]----- ☣`
}
