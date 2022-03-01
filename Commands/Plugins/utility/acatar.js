module.exports = ({
name: "avatar",
$if: "v4",
code:`$if[$message!=server]
$title[1;$username[$findmember[$message;yes]]'s avatar]
$description[1;$addfield[Avatar links;[PNG]($replaceText[$userAvatar[$findmember[$message;yes]];webp;png]) | [WEBP]($replaceText[$userAvatar[$findmember[$message;yes]];png;webp]) | [JPEG]($replaceText[$replaceText[$userAvatar[$findmember[$message;yes]];webp;jpeg];png;jpeg]);no]]
$image[$userAvatar[$findmember[$message;yes]]]
$color[1;BLUE]
$elseif[$message==server]
$title[1;$servername's server icon]
$description[1;$addfield[Avatar links;[PNG]($replaceText[$servericon;webp;png]) | [WEBP]($replaceText[$servericon;png;webp]) | [JPEG]($replaceText[$replaceText[$servericon;webp;jpeg];png;jpeg]);no]]
$image[1;$servericon]
$color[1;BLUE]
$endelseif
$endif`})