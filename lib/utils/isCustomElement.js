/* @flow */
"use strict"

const svgTags = require("svg-tags")
const htmlTags = require("html-tags")
const keywordSets = require("../reference/keywordSets")
const mathmlTagNames = require("mathml-tag-names")

/**
 * Check whether a type selector is a custom element
 */
module.exports = function (selector/*: string*/)/*: boolean*/ {
  const startWithALowercaseASCII = (/^[a-z]/m).test(selector)
  const notContainAnyUppercaseASCII = selector.toLowerCase() === selector
  const containAHyphen = selector.indexOf("-") > -1
  const isNotSvgTag = svgTags.indexOf(selector.toLowerCase()) === -1
  const isNotHtmlTag = htmlTags.indexOf(selector.toLowerCase()) === -1
    && !keywordSets.nonStandardHtmlTags.has(selector.toLowerCase())
  const isNotMathmlTag = mathmlTagNames.indexOf(selector.toLowerCase()) === -1

  return startWithALowercaseASCII
    && notContainAnyUppercaseASCII
    && containAHyphen
    && isNotSvgTag
    && isNotHtmlTag
    && isNotMathmlTag
}
