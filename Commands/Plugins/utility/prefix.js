module.exports = {
    name: "prefix",
    aliases: ['changeprefix' , 'setprefix' , 'change prefix'],
    code:`
    $title[1;Prefix change]
    $color[1;PURPLE]
    $footer[1;prefix changed by $username#$discriminator[$authorid]; $userAvatar[896303947311104041]]
    $thumbnail[1;$userAvatar[896303947311104041]]
    $description[1;I changed my prefix to **$message** if you think this is a mistake u can always change it back]
    $argscheck[>1;you're prefix can't be empty]
    $onlyPerms[manageserver;need manageserver perm]
    $setservervar[prefix;$message]
    $onlyIF[$memberscount>10;$servername must atleast have 10 members ]`} 