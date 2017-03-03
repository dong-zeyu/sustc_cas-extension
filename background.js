chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.storage == "all")
			sendResponse({username: localStorage.getItem('username'), 
						password: localStorage.getItem('password'), 
						auto: localStorage.getItem('autologin')});
	}
);
if(localStorage.length!=3){
	console.log('init...');
	localStorage.setItem('autologin', false);
	localStorage.setItem('username', '');
	localStorage.setItem('password', '');
}