chrome.runtime.sendMessage({
    command: "storage"
}, function(response) {
    if (response.auto == 'true') {
        if (document.URL.indexOf("https://cas.sustc.edu.cn/cas/login") < 0 && document.URL.indexOf("https://cas.sustech.edu.cn/cas/login") < 0) {
            return;
        }
        if (document.getElementById('fm1') != null) {
            if (document.getElementById('fm1').firstElementChild.tagName != "DIV") {
                console.log('login...');
                document.getElementById('username').value = response.username;
                document.getElementById('password').value = response.password;
                document.getElementsByName('submit')[0].removeAttribute('disabled')
                document.getElementsByName('submit')[0].click();
            } else {
                document.getElementById('fm1').firstElementChild.innerText += "    请从插件中更新用户名和密码并从地址栏刷新页面"
            }
        }
    }
});
