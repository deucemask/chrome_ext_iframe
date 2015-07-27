var removalScript = "var i, frames = document.getElementsByTagName('iframe'), nodes = []; "
+ "for (i = 0; i < frames.length; i++) { nodes[i] = frames.item(i); }; "
+ "for (i = 0; i < nodes.length; i++) { nodes[i].parentNode.removeChild(nodes[i]); };";

chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'console.log("Removing iframes from ' +  tab.url + '"); ' + removalScript
  });
});


//chrome.browserAction.onClicked.addListener(function(tab) {
//  chrome.tabs.executeScript({
//    code: "console.log('removing iframes')"
//  });
//});


