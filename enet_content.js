if (document.URL.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/transfer.jsp") >= 0) {
    document.getElementsByTagName('input')[0].click();
} else if (document.URL.indexOf("http://enet.10000.gd.cn:10001/sz/sz112/index.jsp") >= 0) {
    chrome.runtime.sendMessage({
        command: "close"
    });
}
