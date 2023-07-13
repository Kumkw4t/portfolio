import '../styles/Background.css';
import {useEffect} from 'react';
import { PtsCanvas, HandleAnimateFn, HandleStartFn, HandleActionFn } from "react-pts-canvas";
import {Pt, Create, Util, Group, Particle, Num} from "pts";

function Background ({children}) {

	let local_pointer = new Pt(0,0);
	let stars = new Group();
	const colors = ['#5699e9','#7c85e8','#9478e7','#b268e6','#cf59e6'];

	class Star extends Pt {
			color = colors[Math.floor(Num.randomRange(0,5))];
			radius = Num.randomRange(0,1.5);
			offsetRadius = Num.randomRange(1,5000);
			offsetSpeed = Num.randomRange(1,5);

			constructor(point) {
				super(point);
				this.origin = point;
			}
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
		const points = Create.distributeRandom(space.innerBound,(space.width*space.height*0.00018));
		stars = Group.fromPtArray(points.map( (pt) => (new Star(pt))));
	}

	const handleAnimate: HandleAnimateFn = (space, form, time, ftime) => {
		// form.point(local_pointer, (time%1000)/1000*20, 'circle');
		stars.sort( (a,b) => (a.$subtract(local_pointer).magnitudeSq() - b.$subtract(local_pointer).magnitudeSq()) );
		let close_stars = stars.slice(0, 15);
		let close_move = close_stars.map(star => star.origin.$add(local_pointer.$subtract(star.origin).$multiply(time%5000/5000)));
		// console.log(close_move);
		form.fillOnly('#fff').points(close_move, 3, 'circle');
		stars.map( (star, index) => ( index < 15 ? '' : form.fillOnly(star.color).point(star,0.5+star.radius*Num.cycle((time+star.offsetRadius)%2000/2000), 'circle')));
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