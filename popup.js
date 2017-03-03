function change(){
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	if(user!=''&&pass!=''){
		console.log(user + "\n" + pass);
		localStorage.setItem('username', user);
		localStorage.setItem('password', pass);
	}
	document.getElementById('username').value = '';
	document.getElementById('password').value = '';
	document.getElementById('ok').setAttribute('style', 'color:#00EC00;');
}
function auto(){
	console.log(this.checked);
	localStorage.setItem('autologin', this.checked);
}
function load(){
	if(localStorage.getItem('autologin')=='true')
		document.getElementById('auto').checked = true;
	else if(localStorage.getItem('autologin')=='false')
		document.getElementById('auto').checked = false;
	else
		localStorage.setItem('autologin', false);
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('change').addEventListener('click', change);
  document.getElementById('auto').addEventListener('change', auto);
  load();
});