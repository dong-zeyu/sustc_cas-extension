if(document.URL.indexOf("https://cas.sustc.edu.cn/cas/login") >= 0 )   
{
	chrome.runtime.sendMessage({storage: "all"}, function(response) {
		var user = response.username;
		var pass = response.password;
		var auto = response.auto;
		if(auto=='true'){
			document.getElementById('username').value = response.username;
			document.getElementById('password').value = response.password;
			document.getElementsByName('submit')[0].click();
		}
	});
} else if(document.URL.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/transfer.jsp") >= 0 ) {
	document.getElementsByTagName('input')[0].click();
} else if(document.URL.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/index.jsp") >=0 ){
	window.location.href="https://www.baidu.com/";
	window.close();
}