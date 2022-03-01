module.exports = ({
    name:"rank",
    $if: "v4",
    aliases:"level",
    category:"Levelling",
    description:"Check the rank of a user.",
    usage:"rank <optional user>",
    code:`$if[$message==]
    $attachment[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=89CFF0&isboosting=false]
    $let[user;$authorid]
    $else
    $suppresserrors
    $color[1;RANDOM]
    $author[1;Rank of $usertag[$get[user]];$authoravatar]
    $image[1;https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=#89CFF0 &isboosting=false]
    $let[user;$replacetext[$replacetext[$checkcondition[$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]==undefined];true;$findmember[$message;yes]];false;$findMember[$djseval[message.guild.members.fetch().then(a => a.find(x =>x.user.username.toLowerCase().includes('$message'.toLowerCase())).user.id);yes];no]]]
    $endif
    $onlyif[$getservervar[levelling]==true;The levelling system is disabled!]`})
    