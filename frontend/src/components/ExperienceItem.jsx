function ExperienceItem ({exDate, exName, exDescription, exLinks = []}) {

	console.log(exLinks);

	return(
		<div className="exp-case">
			<h3 className="exp-title">{`${exDate} - ${exName}`}</h3>
			<p className="exp-description">{exDescription}</p>
			<div className="exp-links-case">
			{exLinks ? (exLinks.map( el => (<a href={el.url}>{el.title}</a>))) : ""}
			</div>
		</div>
	);
}

export default ExperienceItem;