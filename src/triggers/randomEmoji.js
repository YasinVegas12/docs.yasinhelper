const Guild = require("../structures/GuildSchema.js");

module.exports = async (client, message) => {

    if(message.channel.type === "DM") return;
    if(message.author.bot) return;

    try {
        
        let data = await Guild.findOne({
            guildID: message.guild.id
        });
    
        if(!data) return;
    
        if(data.randomemoji === false) return;
    
        if(!message.guild.me.permissions.has(["ADD_REACTIONS"])) return;
    
        const random = Math.floor(Math.random() * 15) + 1;
    
        let reaact = ["🛡️","😳","❤️","🤔","😀","😃","😄","😁","😆","😅","😂","🤣","☺️","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🥱","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","💫","🔥","⚡","🎆","✈️","⌚"]
        
        if(random > 10) { 
            return message.react(reaact[Math.floor(Math.random () * reaact.length)]).catch(err => {})
        }
    } catch (e) {
        console.log(e)
    }
}