if(document.URL.indexOf("https://cas.sustc.edu.cn/cas/login") >= 0 )   
{
	chrome.runtime.sendMessage({storage: "all"}, function(response) {
		if(document.getElementById('msg')==null){
			if(response.auto=='true'){
				document.getElementById('username').value = response.username;
				document.getElementById('password').value = response.password;
				document.getElementsByName('submit')[0].click();
			}
		}
		else{
			if(document.getElementById('msg').getAttribute('class')=='errors'&&response.auto=='true'){
				document.getElementById('msg').innerText = '用户名密码错误！请在插件中更新信息并从地址栏刷新页面';
				
			}
		}
	});
} else if(document.URL.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/transfer.jsp") >= 0 ) {
	document.getElementsByTagName('input')[0].click();
} else if(document.URL.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/index.jsp") >=0 ){
	window.location.href="https://www.baidu.com/";
	window.close();
}