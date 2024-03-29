function SkillLine ({ skillName, skillValue }) {

	const skillValueArray = Array(5);
	let i = 0;
	while (i < 5) {
		i < skillValue ? skillValueArray.push(1) : skillValueArray.push(0);
		i++;
	}

	const skillNameFormatted = skillName.split(' ').join('-');

	return (
		<div className="skill-line">
			<h4 className="skill-name">{skillName}</h4>
			<div className="skill-value-case">
				{skillValueArray.map( (val,i) => (
					val === 1 ?
					(<div key={`${skillName}${skillValue}full${i}`} className="skill-circle full">
						<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						 	<defs>
						    <linearGradient id={`grad${skillNameFormatted}`} x1="0%" y1="0%" x2="100%" y2="100%">
						      	<stop offset="0" stop-color="#5699e9" />
						       	<stop offset="0.8" stop-color="#5699e9" />
						    </linearGradient>
						  	</defs>

						<circle cx="50" cy="50" r="45" fill={`url('#grad${skillNameFormatted}')`} stroke-width="10"/>
						</svg>
					</div>)
					:
					(<div key={`${skillName}${skillValue}empty${i}`} className="skill-circle empty">
						<svg width="100" height="100" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
						<circle cx="60" cy="60" r="50" fill="none" stroke={`url('#grad${skillNameFormatted}')`} stroke-width="15"/>
						</svg>
					</div>)))}
			</div>
		</div>
	);
}

export default SkillLine;