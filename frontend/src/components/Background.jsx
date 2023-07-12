import '../styles/Background.css';
import {useEffect} from 'react';
import { PtsCanvas, HandleAnimateFn, HandleStartFn, HandleActionFn } from "react-pts-canvas";
import {Pt, Create, Util, Group, Particle, Num} from "pts";

function Background ({children}) {

	let local_pointer = new Pt(0,0);
	let particles = new Group();
	const colors = ['#5699e9','#7c85e8','#9478e7','#b268e6','#cf59e6'];

	class Star extends Pt {
			color = colors[Math.floor(Num.randomRange(0,5))];
			radius = Num.randomRange(0,1.5);
			offsetRadius = Num.randomRange(1,5000);
			offsetSpeed = Num.randomRange(1,5);
	}

	useEffect(() => {
	    const getMouseLocation = (e) => {
	    	local_pointer.to(e.clientX,e.clientY+window.scrollY);
	    };

	    document.addEventListener('mousemove',getMouseLocation,true);

	    return () => {
			document.removeEventListener('mousemove',getMouseLocation,true);
	    };
	});

	const handleStart: HandleStartFn = (_bound, space, form) => {
		console.log(space.size);
		console.log(space.width + ' ' + space.height);
		const points = Create.distributeRandom(space.innerBound,(space.width*space.height*0.00018));
		particles = Group.fromPtArray(points.map( (pt) => (new Star(pt))));
	}

	const handleAnimate: HandleAnimateFn = (space, form, time, ftime) => {
		// form.point(local_pointer, (time%1000)/1000*20, 'circle');
		particles.map( (particle) => (form.fillOnly(particle.color).point(particle,1+particle.radius*Num.cycle((time+particle.offsetRadius)%2000/2000), 'circle')));
	}

	return (
		<div className="background">
		    <PtsCanvas
		      background="#0e1012"
		      name="canvas"
		      onStart={handleStart}
		      onAnimate={handleAnimate}
		    />
		    {children}
		</div>
	)
}

export default Background;