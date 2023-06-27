import {useState} from 'react';

function InterestItem ({item, isActive}) {

	const [isHover,setIsHover] = useState(isActive);
	function startHover () {
		setIsHover(true);
	}

	function endHover() {
		setIsHover(false);
	}

	return(
		<div className={isHover ? "interest-case active" : "interest-case"} onMouseEnter={startHover} onMouseLeave={endHover}>
			<h2 className="interest-case-title">{item.title}</h2>
			<p>{item.text}</p>
		</div>
	);
}

export default InterestItem;