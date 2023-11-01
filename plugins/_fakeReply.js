
import fetch from 'node-fetch'
export async function before(m,{conn }) {
	
	let who = m.sender ? m.sender : conn.user.jid && conn.user.jid ? conn.user.jid : '0@s.whatsapp.net'
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
	
	//reply link wa
   global.rpl = { contextInfo: { externalAdReply: { mediaUrl: dygp, mediaType: 'VIDEO', description: 'support group', title: packname, body: 'grupo de soporte', thumbnailUrl: pp, sourceUrl: dygp }}} 
	
	//reply link PayPal
    global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: alexapyp, mediaType: 'VIDEO', description: 'Donate', title: 'PayPal', body: 'ayuda a mantener el bot activo', thumbnailUrl: pp, sourceUrl: fgpyp }}}
    
    //reply Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: alexaig, mediaType: 'VIDEO', description: 'Sigueme por Instagram', title: 'Alexa', body: 'sigueme por Instagram', thumbnailUrl: pp, sourceUrl: fgig }}} 
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: alexayt, mediaType: 'VIDEO', description: 'Suscribete : ' + alexayt, title: 'Alexa YouTube', body: 'learn to create your own bots.', thumbnailUrl: pp, sourceUrl: fgyt }}}

}
