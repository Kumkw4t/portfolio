import '../styles/WorkPanel.css';
import workList from '../data/works.json';

function WorkPanel ( {workId, isEven}) {

	const work = workList.find( (element) => element.id === workId);

	return(
		<li className={isEven ? "workpanel-root-case workpanel-element even" : "workpanel-root-case workpanel-element odd"}>
		<div className="workpanel-case-year"><p>{work.year}</p></div>
		<div className="workpanel-content-perspective">
		<div className="workpanel-content-case">
			<div className="workpanel-image">Image</div>
			<div className="wokpanel-content">
				<div className="workpanel-title">{workId}</div>
				<div className="workpanel-text">{work.title}</div>
			</div>
		</div>
		</div>
		</li>
	);
}

export default WorkPanel;