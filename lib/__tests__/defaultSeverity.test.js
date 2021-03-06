"use strict"

const postcssPlugin = require("../postcssPlugin")

it("`defaultSeverity` option set to warning", () => {
  const config = {
    defaultSeverity: "warning",
    rules: {
      "block-no-empty": true,
    },
  }
  return postcssPlugin.process("a {}", config).then(result => {
    const warnings = result.warnings()
    expect(warnings.length).toBe(1)
    expect(warnings[0].text.indexOf("block-no-empty")).not.toBe(-1)
    expect(warnings[0].severity).toBe("warning")
  })
})
