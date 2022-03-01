module.exports = {
  name: "afk",
  code: `
    $title[1;Set your status to afk!]
    $description[1;Reason: $noMentionMessage]
    $color[1;#206694]
    $setUserVar[afk;AFK;$authorID]
    $setUserVar[reason;$noMentionMessage]
  `
}