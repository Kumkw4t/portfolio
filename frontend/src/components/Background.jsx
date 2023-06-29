import '../styles/Background.css';
import {useEffect} from 'react';
import { PtsCanvas, HandleAnimateFn, HandleStartFn, HandleActionFn } from "react-pts-canvas";
import {Pt, Create, Util} from "pts";

function Background ({children}) {

	let local_pointer = new Pt(0,0);

	useEffect(() => {
	    const getMouseLocation = (e) => {
	    	local_pointer.to(e.clientX,e.clientY+window.scrollY);
	    	// console.log(local_pointer);
	    };

	    document.addEventListener('mousemove',getMouseLocation,true);

	    return () => {
			document.removeEventListener('mousemove',getMouseLocation,true);
	    };
	});

	const handleAnimate: HandleAnimateFn = (space, form, time) => {
		form.point(local_pointer, (time%1000)/1000*20, 'circle');
	}

	return (
		<div className="background">
		    <PtsCanvas
		      background="#0e1012"
		      name="canvas"
		      onAnimate={handleAnimate}
		    />
		    {children}
		</div>
	)
}

export default Background;