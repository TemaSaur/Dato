const header = document.querySelector('header')

window.onscroll = () => {
	if (document.querySelector('nav .list').classList.contains('active'))
		return header.classList.add('scrolled')

	updateHeader()
}

const scrolled = () => document.documentElement.scrollTop > 50

const updateHeader = () => scrolled() ?
	header.classList.add('scrolled')
	: header.classList.remove('scrolled')