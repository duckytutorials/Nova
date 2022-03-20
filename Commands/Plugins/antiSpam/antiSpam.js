module.exports = (
name: "$alwaysExecute",
code: `$setUserVar[warn;$sum[1;$getUserVar[warn]];$authorId;$guildId]
$description[Don't say badwords]
$color[RED]
$deleteCommand
$onlyIf[$checkContains[$message;a;b;c;d;e;f;g;h;i;j;k;l;m;n;o;p;q;r;s;t;u;v;w;x;y;z;A;B;C;D;E;F;G;H;I;J;K;L;M;N;O;P;Q;R;S;T;U;V;W;X;Y;Z]==true;]
`
}