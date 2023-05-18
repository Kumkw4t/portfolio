import '../styles/WorkPanel.css'

function WorkPanel ( {workId, isEven}) {

	return(
		<div className="workpanel-root-container work-container-child">
		<div className={isEven ? "workpanel-content-container workpanel-content-container-even" : "workpanel-content-container workpanel-content-container-odd"}>
			<div className="workpanel-image">Image</div>
			<div className="wokpanel-content">
				<div className="workpanel-title">{workId}</div>
				<div className="workpanel-text">Texte ultra descriptif</div>
			</div>
		</div>
		</div>
	);
}

export default WorkPanel;