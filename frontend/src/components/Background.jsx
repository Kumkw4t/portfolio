import '../styles/Background.css';
import { PtsCanvas, HandleAnimateFn, HandleStartFn, HandleActionFn } from "react-pts-canvas";
import {Pt, Create, Util} from "pts";

function Background ({children}) {

  const handleAnimate: HandleAnimateFn = (space, form, time) => {
    form.point(space.pointer, (time%1000)/1000*20, 'circle');
  }

  return (
  	<div className="background">
	    <PtsCanvas
	      background="#eae6ec"
	      name="canvas"
	      onAnimate={handleAnimate}
	    />
	    {children}
    </div>
  )
}

export default Background;