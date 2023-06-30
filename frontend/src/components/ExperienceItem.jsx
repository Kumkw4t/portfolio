import '../styles/ExperienceItem.css';

function ExperienceItem ({exItem}) {
	return(
		<div className="exp-case">
			<h3 className="exp-title">{`${exItem.date} | ${exItem.name}`}</h3>
			<h4 className="exp-location">{exItem.location}</h4>
			<p className="exp-description">{exItem.description}</p>
			{exItem.links &&
				<div className="exp-links-case">
				 {exItem.links.map( (el,index) => (<a key={`${el.title}-${index}`} target="_blank" rel="noreferrer" className="exp-link" href={el.url}>{el.title}</a>))}
				</div>
			}
		</div>
	);
}

export default ExperienceItem;