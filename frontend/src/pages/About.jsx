import { useEffect } from 'react';
import Background from '../components/Background';

function About () {

	useEffect( () => {
		const currentPage = document.getElementById("nav-about");
		const otherPages = [document.getElementById("nav-home"),document.getElementById("nav-works"),document.getElementById("nav-resume")]
		if (currentPage) {currentPage.classList.add("selected")};
		if (otherPages) {otherPages.map((nav) => (nav.classList.remove("selected")))};
	});

	return(
		<Background>
		<div>
			<h1>About</h1>
		</div>
		</Background>
	);
}

export default About;