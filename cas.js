function change() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    if (user != '' && pass != '') {
        localStorage.setItem('cas_usr', user);
        localStorage.setItem('cas_pwd', pass);
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
    localStorage.setItem('cas_enable', this.checked);
}

function load() {
    document.getElementById('username').value = localStorage.getItem('cas_usr');
    document.getElementById('password').value = localStorage.getItem('cas_pwd');
    if (localStorage.getItem('cas_enable') == 'true')
        document.getElementById('enable').checked = true;
    else
        document.getElementById('enable').checked = false;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('change').addEventListener('click', change);
    document.getElementById('enable').addEventListener('change', auto);
    document.getElementById('username').addEventListener('keydown', enterPress);
    document.getElementById('password').addEventListener('keydown', enterPress);
    load();
});
