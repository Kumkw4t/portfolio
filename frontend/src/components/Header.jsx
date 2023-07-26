import '../styles/Header.css';
import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

// import MenuBurger from './MenuBurger'

function Header () {

	// const [menuOpen, setMenuOpen] = useState(false);
	const [contact, setContact] = useState(false);
	// const menuUserOpen = useRef(false);

 	// const userToggleMenu = () => {
    // 	menuUserOpen.current = !menuOpen;
    // 	setMenuOpen(!menuOpen);
  	// };

	function handleContact () {
		console.log("clicked");
		navigator.clipboard.writeText("mathilde1.ollivier@gmail.com");
		setContact(true);
		// setTimeout(setContact(false),5000);
	}

	useEffect(() => {
		const timer = setTimeout(() => {setContact(false);},5000);

		return () => {
			clearTimeout(timer);
		};
	 }, [contact]);

	return (
		<div>
		{/*<MenuBurger menuState={menuOpen} onPress={userToggleMenu} />*/}
		<div className="header-wrapper">
		{/*<div className={menuOpen ? "header-wrapper" : "header-wrapper header-hidden-desktop"}>*/}
			<div className="nav-name"><p>Mathilde <span className="blue-color">Ollivier</span></p></div>
			<nav className="nav-wrapper">
				<Link to={`/`} className="nav-element" id="nav-home"><p className="nav-text">Home</p></Link>
				<Link to={`/works`} className="nav-element" id="nav-works"><p className="nav-text">Works</p></Link>
				<Link to={`/resume`} className="nav-element" id="nav-resume"><p className="nav-text">Resume</p></Link>
				<Link to={`/about`} className="nav-element" id="nav-about"><p className="nav-text">About</p></Link>
			</nav>
			<div className="nav-contact" onClick={handleContact}><p>Contact</p></div>
			<div className={contact ? "email-clicked" : "email-clicked hidden"}>
			<p className="email-text">email copied</p>
			<svg viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<linearGradient id={`gradstars`} x1="0%" y1="0%" x2="100%" y2="100%">
				      	<stop offset="0" stop-color="#5699e9" />
				       	<stop offset="0.8" stop-color="#cf59e6" />
				    </linearGradient>
			  	</defs>
				<g>
					<path d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z M 27 10 L 28.4302 15.3118 C 28.6047 15.96 28.692 16.2841 28.8642 16.549 C 29.0166 16.7835 29.2165 16.9834 29.451 17.1358 C 29.7159 17.308 30.04 17.3953 30.6882 17.5698 L 36 19 L 30.6882 20.4302 C 30.04 20.6047 29.7159 20.692 29.451 20.8642 C 29.2165 21.0166 29.0166 21.2165 28.8642 21.451 C 28.692 21.7159 28.6047 22.04 28.4302 22.6882 L 27 28 L 25.5698 22.6882 C 25.3953 22.04 25.308 21.7159 25.1358 21.451 C 24.9834 21.2165 24.7835 21.0166 24.549 20.8642 C 24.2841 20.692 23.96 20.6047 23.3118 20.4302 L 18 19 L 23.3118 17.5698 C 23.96 17.3953 24.2841 17.308 24.549 17.1358 C 24.7835 16.9834 24.9834 16.7835 25.1358 16.549 C 25.308 16.2841 25.3953 15.96 25.5698 15.3118 L 27 10 Z" fill="url('#gradstars')"></path>
				</g>
			</svg>
			</div>
		</div>
		</div>
	);
}

export default Header;