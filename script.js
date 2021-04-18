const $regionLinks = document.querySelectorAll('.region a'),
	$mapLinks = document.querySelectorAll('.map a');
const standStyle=`fill:#c2f8ff;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;paint-order:markers stroke fill`;
const chosenColor="#63edff";

$mapLinks.forEach(el => {
	el.addEventListener('mouseenter', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let color = self.dataset.color;
		let currentElement = document.querySelector(`.region a[href="${selfClass}"]`);
		let currentPath = self.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${chosenColor}; stroke:#000000;stroke-width: 3px;`);
		currentElement.classList.add('active');
	});

	el.addEventListener('mouseleave', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.region a[href="${selfClass}"]`);
		let currentPath = self.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => el.style.cssText = standStyle);
		currentElement.classList.remove('active');
	});

	el.addEventListener('click', (e) => {
		e.preventDefault();
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		
	});
});


$regionLinks.forEach(el => {
	el.addEventListener('mouseenter', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
		let currentPath = currentElement.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${chosenColor}; stroke:#000000;stroke-width: 3px;`);
		self.classList.add('active');
	});

	el.addEventListener('mouseleave', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
		let currentPath = currentElement.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => el.style.cssText = standStyle);
		self.classList.remove('active');
	});
});