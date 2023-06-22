import {useEffect} from 'react';
import Background from '../components/Background';

function NotFound () {

	useEffect( () => {
		const otherPages = [document.getElementById("nav-home"),document.getElementById("nav-works"),document.getElementById("nav-about"),document.getElementById("nav-resume")]
		if (otherPages != null) {otherPages.map((nav) => (nav.classList.remove("selected")))};
	});

	return(
		<Background>
		<div>
			<h1>404 Not Found</h1>
		</div>
		</Background>
	);
}

export default NotFound;