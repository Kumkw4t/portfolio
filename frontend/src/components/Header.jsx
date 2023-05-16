import '../styles/Header.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import MenuBurger from './MenuBurger'

function Header () {

	const [menuOpen, setMenuOpen] = useState(true);
 	const toggleMenu = () => {
    	setMenuOpen(!menuOpen);
  	};

	return (
		<div>
		<MenuBurger menuState={menuOpen} onPress={toggleMenu} />
		<div className={menuOpen ? "header-wrapper" : "header-wrapper header-hidden-desktop"}>
			<p className="header-logo mobile">Hi.</p>
			<nav className="nav-wrapper">
				<Link to={`/`} className="nav-element"><p className="nav-text">Home</p></Link>
				<Link to={`/works`} className="nav-element"><p className="nav-text">Works</p></Link>
				<Link to={`/resume`} className="nav-element"><p className="nav-text">Resume</p></Link>
				<Link to={`/about`} className="nav-element"><p className="nav-text">About</p></Link>
			</nav>
		</div>
		</div>
	);
}

export default Header;