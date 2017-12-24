chrome.runtime.sendMessage({command: "storage"}, function(response) {
	if(response.auto=='true'){
		if(document.URL.indexOf("https://cas.sustc.edu.cn/cas/login") >= 0 && document.getElementById('fm1') != null)
		{
			if(document.getElementById('fm1').firstElementChild.tagName!="DIV"){
				console.log('login...');
				document.getElementById('username').value = response.username;
				document.getElementById('password').value = response.password;
				document.getElementsByName('submit')[0].click();
			}
			else{
				document.getElementById('fm1').firstElementChild.innerText += "    请从插件中更新用户名和密码并从地址栏刷新页面"
			}
		} else if(document.URL.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/transfer.jsp") >= 0 ) {
			document.getElementsByTagName('input')[0].click();
		} else if(document.URL.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/index.jsp") >=0 ){
			chrome.runtime.sendMessage({command: "close"});
		} else if(document.URL.indexOf("http://jwxt.sustc.edu.cn/jsxsd/") >=0 ) {
			var table =  document.getElementById('dataList');
			if(table != null) {
				var a = table.getElementsByTagName('a');
				for(var i = 0; i < a.length; i++) {
					a.item(i).setAttribute('href', a.item(i).getAttribute('href').replace(/javascript:JsMod\('(.*)',.*/, "javascript:open('$1');"));
				}
			}

		}
	}
});