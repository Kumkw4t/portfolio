import '../styles/Header.css';
import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import MenuBurger from './MenuBurger'

function Header () {

	const [menuOpen, setMenuOpen] = useState(false);
	const menuUserOpen = useRef(false);

 	const userToggleMenu = () => {
    	menuUserOpen.current = !menuOpen;
    	setMenuOpen(!menuOpen);
  	};

 	const handleScroll = () => {
	    const scrollPosition = window.scrollY;

	    if ( scrollPosition > 0 && !(menuUserOpen.current) ) {
	    	setMenuOpen(false);
	    	return;
	    }

	    if ( scrollPosition === 0 && !(menuUserOpen.current) ) {
	    	setMenuOpen(true);
	    	return;
	    }

	    return;
	};

	useEffect(() => {
	  		// window.addEventListener("scroll", handleScroll);
	  	return () => {
	    	// window.removeEventListener("scroll", handleScroll);
	  	};
	 });

	return (
		<div>
		<MenuBurger menuState={menuOpen} onPress={userToggleMenu} />
		<div className={menuOpen ? "header-wrapper" : "header-wrapper header-hidden-desktop"}>
			<nav className="nav-wrapper">
				<Link to={`/`} className="nav-element" id="nav-home"><p className="nav-text">Home</p></Link>
				<Link to={`/works`} className="nav-element" id="nav-works"><p className="nav-text">Works</p></Link>
				<Link to={`/resume`} className="nav-element" id="nav-resume"><p className="nav-text">Resume</p></Link>
				<Link to={`/about`} className="nav-element" id="nav-about"><p className="nav-text">About</p></Link>
			</nav>
		</div>
		</div>
	);
}

export default Header;