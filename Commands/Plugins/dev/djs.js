module.exports = {
name: "djs",
  code: `
$title[1;Discord.js Evaluation]
$author[1;$userTag[$authorID];$authorAvatar]
$description[1;
$addField[1;📤 Output:;\`\`\`js
$djsEval[(async () => {
try {
    return $message
} catch (error) {
    return error
}})();yes]\`\`\`;yes]
$addField[📥 Input:;\`\`\`js
$message\`\`\`;yes]
]
$color[1;BLUE]
$addTimestamp[1]
$onlyForIDs[$botOwnerID;870441674525012018;]
$suppressErrors
`}