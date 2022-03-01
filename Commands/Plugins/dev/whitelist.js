module.exports = [{
    name: "whitelist",
    code: `
$author[1;$userTag[$authorID];$authorAvatar]
$description[1;$getVar[yes] Your whitelisting is now being sent to the developer. Please wait until it process]
$color[1;GREEN]
$sendDM[$botOwnerId;{title:Whitelisting}{description:User and tag: \`$userTag[$authorID]\`

ID: \`$authorID\`

Author's notes: \`$replaceText[$replaceText[$checkCondition[$message==];true;Undefined];false;$message]\`}{color:ORANGE}
]
$addTimestamp[1]
$cooldown[$replaceText[$replaceText[$checkCondition[$authorID==$botOwnerID];true;1s];false;24h];]
`,
}, {
    name: "acceptWhitelist",
    code: `
$updateCommands
$sendDM[$findUser[$message[1]];{newEmbed:{author:$usertag[$authorID]:$authorAvatar}{description:$getVar[yes] Your whitelisting has been accepted.

Author's notes:
\`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Undefined];false;$messageSlice[1]]\`}{color:GREEN}}]
$addTimestamp[1]
$onlyIf[$message[1]!=;]
`,
}, {
    name: "declineWhitelist",
    code: `
$sendDM[$findUser[$message[1]];{newEmbed:{author:$usertag[$authorID]:$authorAvatar}{description:$getVar[no] Your whitelisting has been declined.

Author's notes:
\`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Undefined];false;$messageSlice[1]]\`}{color:RED}}]
$addTimestamp[1]
$onlyIf[$message[1]!=;]
`
}]