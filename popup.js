function change(){
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	if(user!=''&&pass!=''){
		localStorage.setItem('username', user);
		localStorage.setItem('password', pass);
	}
	document.getElementById('ok').setAttribute('style', 'color:#00EC00;');
}
function auto(){
	localStorage.setItem('autologin', this.checked);
}
function load(){
	document.getElementById('username').value = localStorage.getItem('username');
	document.getElementById('password').value = localStorage.getItem('password');
	if(localStorage.getItem('autologin')=='true')
		document.getElementById('auto').checked = true;
	else
		document.getElementById('auto').checked = false;
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('change').addEventListener('click', change);
  document.getElementById('auto').addEventListener('change', auto);
  load();
});