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
			startTime = 0;
			endTime = 0;
			endPos = null;

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

	function startMoving (star,time) {
		if (star.startTime === 0) {
			star.startTime = time;
			star.endTime = 0;
			star.endPos = null;
		}
		return;
	}

	function endMoving (star,time) {
		if (star.startTime !== 0) {
			star.startTime = 0;
			star.endTime = time;
			star.endPos = star;
		}
		return;
	}

	function timeCycle (time) {
		const expResult = Math.pow(0.004*time/(1+0.004*time),2)*1.11;
		if (expResult < 1) {
			return expResult;
		}
		return 1;
	}

	const handleStart: HandleStartFn = (_bound, space, form) => {
		const points = Create.distributeRandom(space.innerBound,(space.width*space.height*0.00018));
		stars = Group.fromPtArray(points.map( (pt) => (new Star(pt))));
	}

	const handleAnimate: HandleAnimateFn = (space, form, time, ftime) => {
		stars.sort( (a,b) => (a.$subtract(local_pointer).magnitudeSq() - b.$subtract(local_pointer).magnitudeSq()) );
		let close_stars = stars.slice(0, 15);
		let far_stars = stars.slice(15);
		close_stars.forEach(star => startMoving(star, time));
		far_stars.forEach(star => endMoving(star, time));
		// let close_move = close_stars.map(star => star.origin.$add(local_pointer.$subtract(star.origin).$multiply((time-star.startTime)%5000/5000)));
		let close_move = close_stars.map(star => star.origin.$add(local_pointer.$subtract(star.origin).$multiply(timeCycle(time-star.startTime))));
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