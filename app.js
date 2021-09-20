// Nav start
function openNav() {
	document.getElementById('mySidenav').style.width = '250px';
	document.getElementById('main').style.marginLeft = '250px';
	document.getElementById('fade').style.display = 'block';
}

function closeNav() {
	document.getElementById('mySidenav').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';
	document.getElementById('fade').style.display = 'none';
}
//   Nav End

const scrollToID = (id) => {
	document.getElementById(id).scrollIntoView();
}

