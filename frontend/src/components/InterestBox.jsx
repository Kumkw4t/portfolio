import {useState} from 'react';
import InterestItem from './InterestItem';
import interestsList from '../data/interests.json';

function InterestBox () {

	const [defActive,setDefActive] = useState(true);

	return(
		<div className="interests-root-case">
			<InterestItem key="interest1" item={interestsList[0]} handleActive={setDefActive} />
			<InterestItem key="interest2" item={interestsList[1]} isActive={defActive} handleActive={setDefActive} />
			<InterestItem key="interest3" item={interestsList[2]} handleActive={setDefActive} />
		</div>
	);
}

export default InterestBox;