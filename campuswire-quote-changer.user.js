// ==UserScript==
// @name         campuswire quote changer
// @namespace    https://github.com/a11ce/
// @downloadURL  https://github.com/a11ce/campuswire-quote-changer/raw/main/campuswire-quote-changer.user.js
// @version      1.0
// @description  Replace campuswire quote with a cat.
// @author       a11ce
// @match        *://campuswire.com/*
// ==/UserScript==

function replaceQuote() {
  var quote = document.evaluate(
    '//div[@class="app-loader"]/blockquote[contains(text(),"Kobe Bryant")]',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  if (quote) {
    quote.innerText = "meow\n— a cat";
  }
}

var eye = new MutationObserver(function(muts) {
  replaceQuote();
});
eye.observe(document.body, { childList: true, subtree: true });
