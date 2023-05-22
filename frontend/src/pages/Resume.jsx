import '../styles/Resume.css'
import SkillLine from '../components/SkillLine';

function Resume () {
	return(
		<div className="resume-global-case">
		<div className="resume-root-case">
			<div className="resume-case experience-case">
				<h2>Experience</h2>
				<p>blabla</p>
			</div>
			<div className="resume-case skills-case">
				<h2>Skills</h2>
				<SkillLine skillName="CSS/SCSS" skillValue="4" />
				<SkillLine skillName="HTML" skillValue="4" />
				<SkillLine skillName="JS" skillValue="3" />
				<SkillLine skillName="MERN Stack" skillValue="3" />
				<SkillLine skillName="SQL" skillValue="3" />
				<SkillLine skillName="C" skillValue="4" />
				<SkillLine skillName="CyberSecurity" skillValue="4" />
			</div>
			<div className="resume-case education-case">
				<h2>Education</h2>
				<p>blabla</p>
			</div>
		</div>
		</div>
	);
}

export default Resume;