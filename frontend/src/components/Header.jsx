import '../styles/Header.css';

import MenuBurger from './MenuBurger'

function Header () {
	return (
		<div className="header-wrapper">
			<p className="header-logo">Hi.</p>
			<nav className="nav-wrapper">
				<div className="nav-element"><p className="nav-text">Works</p></div>
				<div className="nav-element"><p className="nav-text">Resume</p></div>
				<div className="nav-element"><p className="nav-text">About</p></div>
				<div className="nav-element"><p className="nav-text">Contact</p></div>
				<MenuBurger />
			</nav>
		</div>
	);
}

export default Header;