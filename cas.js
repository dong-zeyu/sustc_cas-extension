function change() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    if (user != '' && pass != '') {
        localStorage.setItem('username', user);
        localStorage.setItem('password', pass);
        document.getElementById('ok').setAttribute('style', 'color:#00EC00;');
    }
}
function enterPress() {
    if (event.keyCode == 13) {
        change();
    } else {
        document.getElementById('ok').setAttribute('style', 'display: none;');
    }
}
function auto() {
    localStorage.setItem('autologin', this.checked);
}
function load() {
    document.getElementById('username').value = localStorage.getItem('username');
    document.getElementById('password').value = localStorage.getItem('password');
    if (localStorage.getItem('autologin') == 'true')
        document.getElementById('auto').checked = true;
    else
        document.getElementById('auto').checked = false;
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('change').addEventListener('click', change);
    document.getElementById('auto').addEventListener('change', auto);
    document.getElementById('username').addEventListener('keydown', enterPress);
    document.getElementById('password').addEventListener('keydown', enterPress);
    load();
});
