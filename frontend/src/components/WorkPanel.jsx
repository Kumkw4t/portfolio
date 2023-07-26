import '../styles/WorkPanel.css';
import '../styles/WorkDialog.css';
import workList from '../data/works.json';
import { useState, useEffect, useRef } from 'react';

function WorkPanel ( {workId, isEven}) {

	const [isHover, setIsHover] = useState(false);
	const work = workList.find( (element) => element.id === workId);
	const dialog = useRef(null);
	const [mousePosition, setMousePosition] = useState([0,0]);

	useEffect( () => {
		dialog.current = document.getElementById(`dialog${workId}`);
		const currentWorkPanel = document.getElementById(`${workId}-hover-case`);

		const getElementMousePos = (e) => {
			const rect = currentWorkPanel.getBoundingClientRect();
			if (e.clientX > rect.left && e.clientX < rect.right && e.clientY > rect.top && e.clientY < rect.bottom) {
	  		  	setMousePosition([e.clientX - rect.left,e.clientY - rect.top]);
			}
	    };

	   	currentWorkPanel.addEventListener('mousemove',getElementMousePos);

	    return () => {
			currentWorkPanel.removeEventListener('mousemove',getElementMousePos);
	    };
	}, mousePosition);

	useEffect( () => {
		const video = document.getElementById(`${workId}0`);
  			if (video) {
  				try {
  					video.play();
  				} catch (error)
  				{
  					console.error(error);
  				}
  			}
	},[]);

	function openModal () {
		dialog.current.showModal();
		document.body.style.overflow = "hidden";
	}

	function closeModal () {
		dialog.current.close("");
		document.body.style.overflow = "unset"
	}

	function startHover () {
		setIsHover(true);
	}

	function endHover () {
		setIsHover(false);
	}

	return(
		<li className={isEven ? "workpanel-root-case workpanel-element even" : "workpanel-root-case workpanel-element odd"}>
		<div className="workpanel-case-year"><p>{work.year}</p></div>
		<div className="workpanel-content-perspective" onClick={openModal}>
		<div className="workpanel-content-case" onMouseEnter={startHover} onMouseLeave={endHover} >
			<div id={`${workId}-hover-case`} className={isHover ? "workpanel-content-case-hover isHover" : "workpanel-content-case-hover"} 
			style={{'--x': mousePosition[0],'--y': mousePosition[1]}} >
				<img src={work.logo} alt=""/>
			</div>
			<img height="400" width="700" src={work.cover_img} alt=""/>
		</div>
		</div>

		<dialog id={`dialog${workId}`} className="work-dialog" close="true" onClick={closeModal}>
			<div className="inside-dialog" onClick={(event) => (event.stopPropagation())} >
			<div className="cross-modal" onClick={closeModal}>
				<svg className="cross-modal-svg" width="70" height="70" viewBox="0 0 70 50">
					<path d="M 20 40 L 50 10" stroke-width="5" stroke-linecap="round" />
					<path d="M 20 10 L 50 40" stroke-width="5" stroke-linecap="round" />
				</svg>
			</div>
			<div className="work-dialog-header">
				<div className="work-dialog-header-img">
					<img src={work.mockup} alt="mockup" height="400" width="320"/>
				</div>
				<div className="work-dialog-header-text">
					<h4 className="dialog-work-title">{work.title}</h4>
					<p className="dialog-work-year">{work.year}</p>
					{work.url !== "" ? (<a href={work.url} target="_blank" className="work-url"><span>Visit</span><img src="./arrow.png" className="dialog-link-arrow" alt="arrow" /></a>) : ''}
					<p className="dialog-work-description">{work.description}</p>
					<ul className="skill-tags">
					{work.skills.map( (skill) => (<li key={`${workId}-${skill}`}>{skill}</li>))}
					</ul>
				</div>
			</div>
			<div className="work-dialog-images-grid">
				{
					work.videos[0] !== "" &&
					<div key={`${workId}-video0`} className="work-dialog-images-grid-item images-grid-item__large">
						<video id={`${workId}0`} src={work.videos[0]} loop muted playsinline alt="WebM Animation" height="360" width="640" />
	  				</div>
  				}
				{work.pictures.map( (img, index) => (
					( index%4 === 2 || index%4 === 3) ? 
					(<div key={`${workId}-img${index}`} className="work-dialog-images-grid-item images-grid-item__large">
						{/*<p>Images supplémentaires {`${index+1}`}</p>*/}
						<img src={work.pictures[index]} alt="" />
  					</div>)
					:
					(<div key={`${workId}-img${index}`} className="work-dialog-images-grid-item images-grid-item__small">
						{/*<p>Images supplémentaires {`${index+1}`}</p>*/}
						<img src={work.pictures[index]} alt="" />
					</div>)
				))}
			</div>
			</div>
		</dialog>

		</li>
	);
}

export default WorkPanel;