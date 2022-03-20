module.exports = {
  name: "stats",
  aliases: ["stats","clientinfo"],
  code: `$thumbnail[$userAvatar[$clientID]]
  $color[#03c39a]
  $addTimestamp
  $footer[Requested by $userTag[$authorID]]
  $addField[CLIENT;\`\`\`Ram usage: $truncate[$ram]MB / 1GB \nCPU usage: $cpu% / UNLIMETED \nNode.js version: $nodeVersion\nPackage version: v$packageVersion\`\`\`;no]
  $addField[STATS;\`\`\`Uptime: $uptime\nPing: $pingms\nServers: $serverCount\nUsers: $allMembersCount\nChannels: $allChannelsCount\`\`\`]
$title[$userTag[$clientID] - \`(5.6.7)\`]`
}