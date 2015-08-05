console.log('Removing DOM elements from ' +  window.location.href);

var i, nodes = [], frames, count = 0;
frames = document.getElementsByTagName('iframe');
count = frames.length;
for (i = 0; i < frames.length; i++) { nodes[i] = frames.item(i); };
for (i = 0; i < nodes.length; i++) { nodes[i].parentNode.removeChild(nodes[i]); };

console.log(count + ' elements were removed.');
