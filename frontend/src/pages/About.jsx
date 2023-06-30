import '../styles/About.css';
import {useEffect, useState } from 'react';
import InterestItem from '../components/InterestItem';
import Background from '../components/Background';
import interestsList from '../data/interests.json';

function About () {

	const [defActive,setDefActive] = useState(true);

	useEffect( () => {
		const currentPage = document.getElementById("nav-about");
		const otherPages = [document.getElementById("nav-home"),document.getElementById("nav-works"),document.getElementById("nav-resume")]
		if (currentPage) {currentPage.classList.add("selected")};
		if (otherPages) {otherPages.map((nav) => (nav.classList.remove("selected")))};
	});

	return(
		<Background>
		<div className="about-root-case">
			<h1>About Me</h1>
			<div className="about-description">
			<p>I've been in cybersecurity for a few years after getting my diploma in 2017 from the french engineering school CentraleSupélec.
			However I chose to move field to web development because I love learning new things and challenge myself.
			Creative web development nourish my love for graphic design and offers numerous opportunities to create innovative things.
			I hope over the years I'll be able to work on plenty amazing projects. Let's start together !</p>
			</div>
			<div className="interests-root-case">
				<InterestItem key="interest1" item={interestsList[0]} handleActive={setDefActive} />
				<InterestItem key="interest2" item={interestsList[1]} isActive={defActive} handleActive={setDefActive} />
				<InterestItem key="interest3" item={interestsList[2]} handleActive={setDefActive} />
			</div>
		</div>
		</Background>
	);
}

export default About;