import '../styles/Background.css';
import {useEffect} from 'react';
import { PtsCanvas, HandleAnimateFn, HandleStartFn, HandleResizeFn } from "react-pts-canvas";
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

			constructor(point) {
				super(point);
				this.origin = point;
				this.startPos = point;
				this.endPos = point;
				this.curPos = point;
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
			star.startPos = star.curPos;
			star.endPos = star.origin;
		}
		return;
	}

	function endMoving (star,time) {
		if (star.startTime !== 0) {
			star.startTime = 0;
			star.endTime = time;
			star.endPos = star.curPos;
		}
		return;
	}

	function move (star,time) {
		star.curPos = star.startPos.$add(local_pointer.$subtract(star.startPos).$multiply(timeCycle(time-star.startTime)));
		return;
	}

	function moveBack (star,time) {
		star.curPos = star.endPos.$add(star.origin.$subtract(star.endPos).$multiply(timeCycle(time-star.endTime)));
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
		const points = Create.distributeRandom(space.innerBound,(space.width*space.height*0.00035));
		stars = Group.fromPtArray(points.map( (pt) => (new Star(pt))));
	}

	const handleAnimate: HandleAnimateFn = (space, form, time, ftime) => {
		stars.sort( (a,b) => (a.$subtract(local_pointer).magnitudeSq() - b.$subtract(local_pointer).magnitudeSq()) );
		let close_stars = stars.slice(0, 35);
		let far_stars = stars.slice(35);

		close_stars.forEach(star => startMoving(star, time));
		far_stars.forEach(star => endMoving(star, time));
		close_stars.forEach(star => move(star,time));
		far_stars.forEach(star => moveBack(star,time));

		close_stars.map( star => (form.fillOnly(star.color).point(star.curPos,0.5+star.radius*Num.cycle((time+star.offsetRadius)%2000/2000), 'circle')));
		far_stars.map( (star) => (form.fillOnly(star.color).point(star.curPos,0.5+star.radius*Num.cycle((time+star.offsetRadius)%2000/2000), 'circle')));
	}

	const handleResize: HandleResizeFn = (space, form, size, evt) => {
		const pointsResize = Create.distributeRandom(space.innerBound,(space.width*space.height*0.00035));
		stars = Group.fromPtArray(pointsResize.map( (pt) => (new Star(pt))));
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