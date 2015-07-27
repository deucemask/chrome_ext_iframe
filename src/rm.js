var removalScript = "var i, nodes = [], frames, count = 0;"
+ "frames = document.getElementsByTagName('iframe');"
+ "count = frames.length;"
+ "for (i = 0; i < frames.length; i++) { nodes[i] = frames.item(i); }; "
+ "for (i = 0; i < nodes.length; i++) { nodes[i].parentNode.removeChild(nodes[i]); };";

var msgDone = "console.log(count + ' elements were removed.');";

chrome.browserAction.onClicked.addListener(function(tab) {
  var msg = "console.log('Removing DOM elements from " +  tab.url + "'); ";
  chrome.tabs.executeScript({
    code: msg + removalScript + msgDone
  });
});
