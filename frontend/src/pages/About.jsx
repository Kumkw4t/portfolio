import { useEffect } from 'react';

function About () {

	// const currentPage = document.getElementById("nav-about");
	// const otherPages = [document.getElementById("nav-home"),document.getElementById("nav-works"),document.getElementById("nav-resume")]

	// useEffect( () => {
	// 	if (currentPage) {currentPage.classList.add("selected")};
	// 	if (otherPages) {otherPages.map((nav) => (nav.classList.remove("selected")))};
	// }, [currentPage, otherPages]);

	return(
		<div>
			<h1>About</h1>
		</div>
	);
}

export default About;