chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.command == "storage")
			sendResponse({username: localStorage.getItem('username'), 
						password: localStorage.getItem('password'), 
						auto: localStorage.getItem('autologin')});
		else if(request.command == "close")
			chrome.tabs.getSelected(function(tab) {
				chrome.tabs.getAllInWindow(function(tab2) {
					if(tab2.length > 1) {
						chrome.tabs.remove(tab.id);
					}
					else {
						chrome.tabs.update(tab.id, {
							url: "https://www.baidu.com/"
						});
					}
				});
			});
	}
);
if(localStorage.length!=3){
	console.log('init...');
	localStorage.setItem('autologin', false);
	localStorage.setItem('username', '');
	localStorage.setItem('password', '');
}