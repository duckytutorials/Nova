module.exports = {
    name: "math",
   $if: "v4",
    code: `
$title[1;Calculator]
$author[1;$userTag[$authorID];$authorAvatar]
$description[1;
$addField[1;📤 Output;\`\`\`$djsEval[
const m = require('mathjs')

m.evaluate('$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$toLowercase[$message];÷;/];x;*];';in];,;];π;pi]')
;yes]\`\`\`]

$addField[1;📥 Input; \`\`\`$message\`\`\`;yes]
]
$footer[1;Calculator made with Math.js]
$color[1;ORANGE]
$onlyForIDs[$botOwnerID;870441674525012018;]
$onlyIf[$checkContains[$toLowercase[$message];@;#;$;_;&;!;?]==false;]
$suppressErrors
`
}