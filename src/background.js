chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // We don't care about chrome:/// , devtools:/// etc. return if not http/https.
  if (tab.url.substr(0, 4) !== "http") {
    return;
  }

  let func = `
  function showRelativeLines(cm) {
    console.log("CALLED");
    const lineNum = cm.getCursor().line + 1;
    if (cm.state.curLineNum === lineNum) {
      return;
    }
    cm.state.curLineNum = lineNum;
    cm.setOption('lineNumberFormatter', l => 
      l === lineNum ? lineNum : Math.abs(lineNum - l));
  }
  `
  chrome.tabs.executeScript({
    code: `
      if (!window.__vim_relative_executed) {
        var elt = document.createElement("script");
        elt.innerHTML = \`${func}; document.querySelectorAll('.CodeMirror').forEach(function(f) { try { f.CodeMirror.on('cursorActivity', window.showRelativeLines); } catch (ex) {} });\`
        document.head.appendChild(elt);
      }
      window.__vim_relative_executed = true;
    `
})
});