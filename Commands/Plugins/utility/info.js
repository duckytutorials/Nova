module.exports = [{
    name: "info",
    $if: "v4",
    aliases: ['i', 'whois', 'userinfo', 'useri', 'ui'],
    code: `
$if[$findMembers[$message;10;{position}]!=1]
$author[1;$userTag[$authorID];$authorAvatar]
$description[1;Please choose the following...
$findMembers[$message;10;**{position}.)** [{tag}](https://discord.gg/vDt8yhyWe6)]]
$color[1;BLUE]
$awaitMessages[$authorID;1m;everything;userinfo;$getVar[no] Cancelled]
$setUserVar[userinf;$findMembers[$message;10;{id}]]
$elseIf[$findMembers[$message;10;{position}]==1]
$author[1;$userTag[$get[id]];$userAvatar[$get[id]]]
$thumbnail[1;$userAvatar[$get[id]]]
$description[1;
$addField[Roles[$userRoleCount[$get[id]]];$replaceText[$replaceText[$checkCondition[$userRoleCount[$get[id]]==0];true;Undefined];false;$userRoles[$get[id];mentions;, ]];yes]
$addField[1;Creation Date:;$creationDate[$get[id]]
\`$creationDate[$get[id];time]\`;yes]
$addField[1;Join Date:;$memberJoinedDate[$get[id]]
\`$memberJoinedDate[$get[id];time]\`;yes]
$addField[Nickname:;$replaceText[$replaceText[$checkCondition[$djsEval[guild.members.fetch("$get[id]").then(d=>d.nickname);yes]==null];true;Undefined];false;$djsEval[guild.members.fetch("$get[id]").then(d=>d.nickname);yes]];yes]
$addField[1;Tag:;$discriminator[$get[id]];yes]
$addField[1;Username:;$username[$get[id]];yes]
$addField[1;ID:;\`$get[id]\`;yes]
]
$color[1;BLUE]
$let[id;$findMembers[$message;10;{id}]]
$endElseIf
$endIf
$onlyIf[$message!=;$get[err]]
$onlyIf[$findMembers[$message;10;{id}]!=;$get[err]]
$let[err;{author:$userTag[$get[idb]]:$userAvatar[$get[idb]]}{thumbnail:$userAvatar[$get[idb]]}
{field:ID#COLON#:\`$get[idb]\`:yes}
{field:Username#COLON#:$username[$get[idb]]:yes}
{field:Tag#COLON#:$discriminator[$get[idb]]:yes}
{field:Nickname#COLON#:$replaceText[$replaceText[$checkCondition[$djsEval[guild.members.fetch("$get[idb]").then(d=>d.nickname);yes]==null];true;Undefined];false;$djsEval[guild.members.fetch("$get[idb]").then(d=>d.nickname);yes]]:yes}
{field:Join Date#COLON#:$memberJoinedDate[$get[idb]]
\`$memberJoinedDate[$get[idb];time]\`:yes}
{field:Creation Date#COLON#:$creationDate[$get[idb]]
\`$creationDate[$get[idb];time]\`:yes}
{field:Roles[$userRoleCount[$get[idb]]]:$replaceText[$replaceText[$checkCondition[$userRoleCount[$get[idb]]==0];true;Undefined];false;$userRoles[$get[idb];mentions;, ]]:yes}
{color:BLUE}]
$let[idb;$findUser[$message]]
$suppressErrors[{newEmbed:{author:$userTag[$authorID]:$authorAvatar}{description:$getVar[no] An error occurred, please try again}{color:RED}}]
`,
}, {
    type: "awaitedCommand",
    name: "userinfo",
    code: `
$if[$isNumber[$message[1]]==true]
$author[1;$userTag[$get[st]];$userAvatar[$get[st]]]
$thumbnail[1;$userAvatar[$get[st]]]
$description[1;
$addField[1;Roles[$userRoleCount[$get[st]]];$replaceText[$replaceText[$checkCondition[$userRoleCount[$get[st]]==0];true;Undefined];false;$userRoles[$get[st];mentions;, ]];yes]
$addField[1;Creation Date:;$creationDate[$get[st]]
\`$creationDate[$get[st];time]\`;yes]
$addField[1;Joined Date:;$memberJoinedDate[$get[st]]
\`$memberJoinedDate[$get[st];time]\`;yes]
$addField[Nickname:;$replaceText[$replaceText[$checkCondition[$djsEval[guild.members.fetch("$get[st]").then(d=>d.nickname);yes]==null];true;Undefined];false;$djsEval[guild.members.fetch("$get[st]").then(d=>d.nickname);yes]];yes]
$addField[1;Tag:;$discriminator[$get[st]];yes]
$addField[1;Username:;$username[$get[st]];yes]
$addField[1;ID;\`$get[st]\`;yes]
]
$color[1;BLUE]
$let[st;$splitText[$message[1]]]
$textSplit[$getUserVar[userinf];\n]
$elseIf[$toLowercase[$message[1]]==cancel]
$getVar[no] Cancelled
$endElseIf
$else
$getVar[no] Cancelled
$endIf
$suppressErrors[$getVar[no] Cancelled]
`
}]
