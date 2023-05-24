import '../styles/ExperienceItem.css';

function ExperienceItem ({exItem}) {

	console.log(exItem);

	return(
		<div className="exp-case">
			<h3 className="exp-title">{`${exItem.date} | ${exItem.name}`}</h3>
			<p className="exp-description">{exItem.description}</p>
			<div className="exp-links-case">
			{exItem.links ? (exItem.links.map( el => (<a href={el.url}>{el.title}</a>))) : ""}
			</div>
		</div>
	);
}

export default ExperienceItem;