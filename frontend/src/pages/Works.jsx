import '../styles/Works.css'
import WorkPanel from '../components/WorkPanel';
import Background from '../components/Background';
import workList from '../data/works.json'

import { useEffect } from 'react';

function Works () {

	useEffect( () => {
		const currentPage = document.getElementById("nav-works");
		const otherPages = [document.getElementById("nav-home"),document.getElementById("nav-resume"),document.getElementById("nav-about")]
		if (currentPage) {currentPage.classList.add("selected")};
		if (otherPages) {otherPages.map((nav) => (nav.classList.remove("selected")))};
	});

	return(
		<Background>
		<div className="works-global-container">
		<div className="works-root-container">
			<div className="svg-circle-top">
				<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="4"/>
				</svg>
			</div>
			<ul className="workpanel-global-container">
				{
					workList.map( (work, index) => (
						<WorkPanel key={work.id} workId={work.id} isEven={index%2 === 0 ? false : true} />
					))
				}
			</ul>
		</div>
		</div>
		</Background>
	);
}

export default Works;