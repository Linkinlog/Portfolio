const navList = document.getElementById('navList')

navList.addEventListener('click', () => {
	const nav = document.getElementById('navbarNavAltMarkup')
	nav.classList.contains('show') && nav.classList.remove('show')
})