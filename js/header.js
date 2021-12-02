const header = document.querySelector('header')

window.onscroll = () => {
	
	if (document.documentElement.scrollTop > 50) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled')
	}
}