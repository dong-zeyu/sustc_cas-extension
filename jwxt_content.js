if (document.URL.indexOf("http://jwxt.sustc.edu.cn/jsxsd/") >= 0) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.text = "JsMod = function(url,width,height){\
        window.open(url,'','width=' + width + ',height=' + height)\
    }"
    document.body.appendChild(script);
}
