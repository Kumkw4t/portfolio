import '../styles/Works.css'
import WorkPanel from '../components/WorkPanel';
import workList from '../data/works.json'

function Works () {
	return(
		<div className="works-global-container">
			<div className="svg-circle-top">
				<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="4"/>
				</svg>
			</div>
			<ul className="workpanel-global-container">
				{
					workList.map( (work, index) => (
						<WorkPanel key={work.id} workId={work.id} isEven={index%2 === 0 ? false : true} />
					))
				}
			</ul>
		</div>
	);
}

export default Works;