module.exports = ({
name: "$alwaysExecute",
code: `$setUserVar[warn;$sum[1;$getUserVar[warn]];$authorId;$guildId]
$description[Don't say badwords]
$color[RED]
$deleteCommand
$deleteMessage[$channelId;$messageID;3s]
$onlyIf[$checkContains[$message;fuck;shit;bitch;dick;cock;cunt;dick head;fuck you;fucked;ass;hore;hoe;Fuck;Shit;Bitch;Dick;Cock;Cunt;Dick Head;Fuck You;Fucked;Ass;Hore;Hoe;FUCK;SHIT;BITCH;DICK;COCK;CUNT;DICK HEAD;FUCK YOU;FUCKED;ASS;HORE;HOE;FuCk;sHiT;BiTcH;DiCk;cOcK;CuNt;dIcK HeAd;fUcK YoU;FuCkEd;aSs;hOrE;HoE;FuCk;sHiT;BiTcH;DiCk;cOcK;CuNt;dIcK HeAd;fUcK YoU;FuCkEd;aSs;hOrE;HoE]==true;]
$onlyIf[$hasAnyPerm[admin;manageserver;managechannels;manageroles]==false;]
 $onlyIf[$getServerVar[antiSwear]==true;] `
}) 