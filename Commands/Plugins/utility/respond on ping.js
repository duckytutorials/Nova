module.exports = ({
name: "$alwaysExecute",
code: `$title[Hi i am nova]
$description[Hi am nova my prefix is `\`\>\`\`; I curently have $commandsCount]
$thumbnail[$userAvatar[$clientID]]
$onlyIf[$checkContains[$message;<@896303947311104041>;<@!896303947311104041>]==true;]`
})