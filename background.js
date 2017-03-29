chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.command == "storage")
			sendResponse({username: localStorage.getItem('username'), 
						password: localStorage.getItem('password'), 
						auto: localStorage.getItem('autologin')});
		else if(request.command == "close")
			chrome.tabs.getAllInWindow(function(tab) {
				var target_tab;
				for (var i=0; i<tab.length; i++) {
					if(tab[i].url.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/index.jsp") >= 0)
						target_tab = tab[i];
				}
				if(tab != null) {
					if(tab.length > 1) {
						chrome.tabs.remove(target_tab.id);
					}
					else {
						chrome.tabs.update(target_tab.id, {
							url: "chrome://newtab"
						});
					}			
				}
			});
	}
);
if(localStorage.length!=3){
	console.log('init...');
	localStorage.setItem('autologin', false);
	localStorage.setItem('username', '');
	localStorage.setItem('password', '');
}