import '../styles/MenuBurger.css';

function MenuBurger ( {menuState, onPress}) {
	return (
		<div className="nav-burger" onClick={onPress}>
			<div className="burger-svg-wrapper">
				<svg className={menuState ? "burger-svg menu-open" : "burger-svg"} width="70" height="50" viewBox="0 0 70 50">
					<path d="M 10 10 L 60 10" stroke-width="5" stroke-linecap="round" />
					<path d="M 10 25 L 60 25" stroke-width="5" stroke-linecap="round" />
					<path d="M 10 40 L 60 40" stroke-width="5" stroke-linecap="round" />
				</svg>
			</div>
		</div>
	);
}

export default MenuBurger;