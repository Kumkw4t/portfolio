import '../styles/Home.css'
import {useState} from 'react';

function Home () {
	return (
		<div className="home-global-container">
		<div className="home-root-case">
			<div className="home-portrait-container">
				<div className="portrait-image">Portrait</div>
			</div>
			<div className="home-content-container">
				<div className="home-title">
					<h1>Bonjour,</h1>
				</div>
				<div className="home-content-text">
					<p>I'm <span className="home-highlighted-text">Mathilde Ollivier</span>,</p>
					<p>a <span className="home-highlighted-text">web developer</span> looking for business opportunities</p>
				</div>
			</div>
		</div>
		</div>
	);
}

export default Home;