chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command == "cas")
        sendResponse({
            username: localStorage.getItem('cas_usr'),
            password: localStorage.getItem('cas_pwd'),
            auto: localStorage.getItem('cas_enable')
        });
    else if (request.command == "mail")
        sendResponse({
            username: localStorage.getItem("mail_usr"),
            password: localStorage.getItem("mail_pwd"),
            auto: localStorage.getItem('mail_enable')
        })
    else if (request.command == "close")
        chrome.tabs.getAllInWindow(function(tab) {
            var target_tab;
            for (var i = 0; i < tab.length; i++) {
                if (tab[i].url.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/index.jsp") >= 0)
                    target_tab = tab[i];
            }
            if (tab != null) {
                if (tab.length > 1) {
                    chrome.tabs.remove(target_tab.id);
                } else {
                    chrome.tabs.update(target_tab.id, {
                        url: "chrome://newtab"
                    });
                }
            }
        });
});
if (localStorage.length != 6) {
    console.log('init...');
    localStorage.setItem('cas_enable', false);
    localStorage.setItem('cas_usr', '');
    localStorage.setItem('cas_pwd', '');

    localStorage.setItem('mail_enable', false);
    localStorage.setItem('mail_usr', '');
    localStorage.setItem('mail_pwd', '');
}
