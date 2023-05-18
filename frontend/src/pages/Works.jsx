import '../styles/Works.css'
import {useEffect} from 'react';
import WorkPanel from '../components/WorkPanel';
import workList from '../data/works.json'

function Works () {

	const formattedWorkList = [];

	workList.map( (work, index) => {
		if (index%2 === 1) {
			formattedWorkList.push({"isWork": false, "isEven": false, "id": null, "year": work.year});
			formattedWorkList.push({"isWork": true, "isEven": true, "id": work.id, "year": null});
		} else {
			formattedWorkList.push({"isWork": true, "isEven": false, "id": work.id, "year": null});
			formattedWorkList.push({"isWork": false, "isEven": true, "id": null, "year": work.year});
		}
	});

	return(
		<div className="works-global-container">
			<div className="works-background-container">
			<div className="svg-circle-top">
				<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle cx="50" cy="50" r="45" fill="none" stroke="black" stroke-width="4"/>
				</svg>
			</div>
			<div className="background-line">
			</div>
			</div>
			<div className="workpanel-global-container">
				{console.log(formattedWorkList)}
				{
					formattedWorkList.map( (element) => (
						element.isWork ? (<WorkPanel workId={element.id} isEven={element.isEven} />)
						:
						(<div className={`work-year-container work-container-child work-year-container-${element.isEven ? "even" : "odd"}`}><p>{element.year}</p></div>)
					))
				}
			</div>
		</div>
	);
}

export default Works;