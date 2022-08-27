Deno.writeTextFile(
  "errors.json",
  JSON.stringify(
    Object.fromEntries(
      [...(await (await fetch(
        "https://github.com/tdlib/telegram-bot-api/raw/master/telegram-bot-api/Client.cpp",
      )).text()).matchAll(/fail_query\([0-9]+, "([^"]+)",/g)].map((v) => v[1])
        .map(
          (v) => [v.split(":"), v],
        ).map((v) =>
          [v[0].length > 1 ? v[0][1] : v[0], v[1]] as [string, string]
        )
        .map(
          (v) => [v[0].trim(), v[1].trim()],
        ).map((
          v,
        ) => [
          (" " + v[0]).replace(/[ _]([A-z])/g, (_, g) => g.toUpperCase()),
          v[1],
        ]).sort((a, b) => a[0].localeCompare(b[0])),
    ),
    null,
    2,
  ) + "\n",
);
