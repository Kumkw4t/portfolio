import '../styles/Works.css'
import WorkPanel from '../components/WorkPanel';

function Works () {
	return(
		<div className="works-global-container">
			<div className="svg-circle-top">
				<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="4"/>
				</svg>
			</div>
			<div className="workpanel-global-container">
				<div className="workpanel-grid-filler workpanel-grid-filler-topbot"></div>
				<div className="workpanel-grid-filler workpanel-grid-filler-topbot"></div>
				<div className="workpanel-grid-filler"></div>
				<WorkPanel workId="1" />
				<WorkPanel workId="2" />
				<div className="workpanel-grid-filler"></div>
				<div className="workpanel-grid-filler"></div>
				<WorkPanel workId="3" />
				<WorkPanel workId="4" />
				<div className="workpanel-grid-filler"></div>
				<div className="workpanel-grid-filler"></div>
				<WorkPanel workId="5" />
				<div className="workpanel-grid-filler workpanel-grid-filler-topbot"></div>
				<div className="workpanel-grid-filler workpanel-grid-filler-topbot"></div>
			</div>
		</div>
	);
}

export default Works;