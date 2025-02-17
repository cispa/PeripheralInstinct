console.log('Injecting sdk.js');
let script = document.createElement('script');
script.src = chrome.runtime.getURL('sdk.js');
(document.head || document.documentElement).appendChild(script);
console.log('Script injected', script.src);