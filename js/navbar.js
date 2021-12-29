window.onload = () => {
	const burger = document.querySelector(".burger")
	const list = document.querySelector("nav .list")

	const header = document.querySelector('header')

	burger.onclick = () => {
		burger.classList.toggle("active");
		list.classList.toggle("active");

		if (list.classList.contains('active'))
			header.classList.add('scrolled')
		else
			updateHeader()
	}

	const links = list.children
	for (let i = 0; i < links.length; ++i) {
		links[i].onclick = () => {
			list.classList.remove('active')
			burger.classList.remove('active')
		}
	}
}

// const isBurgered = () => list.classList.contains('active')