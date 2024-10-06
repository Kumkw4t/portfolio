import '../styles/Home.css'
import {useEffect} from 'react';
import Background from '../components/Background';

function Home () {

	useEffect( () => {
		const currentPage = document.getElementById("nav-home");
		const otherPages = [document.getElementById("nav-resume"),document.getElementById("nav-works"),document.getElementById("nav-about")]
		if (currentPage != null) {currentPage.classList.add("selected")};
		if (otherPages != null) {otherPages.map((nav) => (nav.classList.remove("selected")))};
	});

	return (
		<Background>
		<div className="home-global-container">
		<div className="home-root-case">
		{/*	<div className="home-portrait-container">
				<div className="portrait-image">Portrait</div>
			</div>*/}
			<div className="home-content-container">
				{//<div className="home-title">}
				}
					<h1 className="home-title"><span>B</span><span>o</span><span>n</span><span>j</span><span>o</span><span>u</span><span>r</span><span>,</span></h1>
				{//</div>}
				}
				<div className="home-content-text">
					<p>I'm <span className="home-highlighted-text">Mathilde Ollivier</span>,</p>
					<p>a <span className="home-highlighted-text">software developer</span> looking for business opportunities</p>
				</div>
			</div>
		</div>
		</div>
		</Background>
	);
}

export default Home;
