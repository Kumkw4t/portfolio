import {useState} from 'react';

function InterestItem ({item,isActive = false,handleActive}) {

	const [isHover,setIsHover] = useState(false);

	function startHover () {
		setIsHover(true);
		handleActive(false);
	}

	function endHover() {
		setIsHover(false);
		handleActive(true);
	}

	return(
		<div className={(isHover || isActive) ? `interest-case active ${item.tag}` : `interest-case ${item.tag}`} onMouseEnter={startHover} onMouseLeave={endHover}>
			<h2 className="interest-case-title">{item.title}</h2>
			<p>{item.text}</p>
		</div>
	);
}

export default InterestItem;