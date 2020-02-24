chrome.runtime.sendMessage({
    command: "mail"
}, function(response) {
    if (response.auto != 'true') {
		return;
	}

	if (document.URL.indexOf("exmail.qq.com") >= 0) {
		if((usr = document.getElementById('inputuin')) == null
			|| (pwd = document.getElementById('pp')) == null
			|| (btn = document.getElementById('btlogin')) == null)
		{
			console.error("Login form not found");
			return;
		}

		console.log('login...');
		usr.value = response.username;
		pwd.value = response.password;
		btn.click();
	} else if (document.URL.indexOf("mail.sustech.edu.cn") >= 0) {
		if ( (form = document.getElementsByName("form1")).length == 0
			|| (uin = document.getElementsByName("uin")).length == 0 
			|| (domain = document.getElementsByName("domain")).length == 0
			|| (pwd = document.getElementsByName("pwd")).length == 0)
		{
			console.error("Login form not found");
			return;
		}
		form = form[0];
		uin = uin[0];
		domain = domain[0];
		pwd = pwd[0];
		usr = response.username.split("@");
		
		if (usr[1].indexOf("mail") >= 0) domain.selectedIndex = 1;

		uin.value = usr[0];
		pwd.value = response.password;
		form.submit();
	}
});
