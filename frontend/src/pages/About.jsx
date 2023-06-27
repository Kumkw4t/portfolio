import '../styles/About.css';
import { useEffect} from 'react';
import Background from '../components/Background';
import InterestItem from '../components/InterestItem';
import interestsList from '../data/interests.json';

function About () {

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
			I hope, over the years I'll be able to work on plenty amazing projects. Let's start together !</p>
			</div>
			<div className="interests-root-case">
				<InterestItem item={interestsList[0]} isActive={false} />
				<div className="interest-case illustration active">
					<h2 className="interest-case-title" className="interest-case-title">Illustration</h2>
				</div>
				<div className="interest-case">
					<h2 className="interest-case-title">Manual Activities</h2>
				</div>
			</div>
		</div>
		</Background>
	);
}

export default About;