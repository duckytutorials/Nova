module.exports = {
    name: "$alwaysExecute",
  $if: "v4",
    code: `
      <@$authorID>, Welcome back! I removed your afk status for you.
      $setUserVar[afk;;$authorID]
      $onlyIf[$getUserVar[afk]!=;]
      $onlyIf[$checkContains[$message;afk]==false;]
    `
  }