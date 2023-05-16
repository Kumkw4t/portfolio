import '../styles/MenuBurger.css';
import {useState} from 'react';

function MenuBurger () {

	const [menuOpen, setMenuOpen] = useState(false);
 	const toggleMenu = () => {
    	setMenuOpen(!menuOpen);
  	};

	return (
		<div className="nav-burger" onClick={toggleMenu}>
			<svg className={menuOpen ? "burger-svg menu-open" : "burger-svg"} width="70" height="50" viewBox="0 0 70 50">
				<path d="M 10 10 L 60 10" stroke-width="5" stroke-linecap="round" />
				<path d="M 10 25 L 60 25" stroke-width="5" stroke-linecap="round" />
				<path d="M 10 40 L 60 40" stroke-width="5" stroke-linecap="round" />
			</svg>
		</div>
	);
}

export default MenuBurger;