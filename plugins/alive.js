import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───────────────────
• مرحبا بك { n } انا إسمي ليندا انا اريد فقط التبليغ بي بعض الاوامر فقط
•البوت فيه ميزاة كتيرا وانا انهي على بعظ اميزاة او الكلاماة غير مرغوب فيها
•اتمنا ان تستعملو البوت بطريق جيدة 
•اتمنا منكم دعم صاحب البوت
instagram.com/alinafis0
•بالمناسب لربح المال بطريق امنة أدهلا إلى هاد اربط التالي
https://sweatco.in/hi/aliali35338755803 Check out this free app — It Pays to Walk 🚶
╰───────────────────
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['infobot']
handler.command = /^(alive)$/i


export default handler
