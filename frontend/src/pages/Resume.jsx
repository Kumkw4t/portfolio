import '../styles/Resume.css'
import SkillLine from '../components/SkillLine';
import ExperienceItem from '../components/ExperienceItem';
import workExp from '../data/experiences.json';

function Resume () {
	return(
		<div className="resume-global-case">
		<div className="resume-root-case">
			<div className="resume-column left">
			<div className="resume-case experience-case">
				<h2>Experience</h2>
				<ExperienceItem exDate={workExp.thesis.date} exName={workExp.thesis.name} 
					exDescription={workExp.thesis.description} exLinks={workExp.thesis.links} />
			</div>
			</div>

			<div className="resume-column right">
			<div className="resume-case skills-case">
				<h2>Skills</h2>
				<div className="hard-skills subskill-case">
					<h3>Hard Skills</h3>
					<SkillLine skillName="CSS/SCSS" skillValue="4" />
					<SkillLine skillName="HTML" skillValue="4" />
					<SkillLine skillName="JS" skillValue="3" />
					<SkillLine skillName="MERN Stack" skillValue="3" />
					<SkillLine skillName="SQL" skillValue="3" />
					<SkillLine skillName="C" skillValue="4" />
					<SkillLine skillName="CyberSecurity" skillValue="4" />
				</div>
				<div className="soft-skills subskill-case">
					<h3>Soft Skills</h3>
					<div className="skill-line">
						<h4 className="skill-name">Adaptability</h4>
					</div>
					<div className="skill-line">
						<h4 className="skill-name">Creativity</h4>
					</div>
					<div className="skill-line">
						<h4 className="skill-name">Decision making</h4>
					</div>
					<div className="skill-line">
						<h4 className="skill-name">Teamwork</h4>
					</div>
					<div className="skill-line">
						<h4 className="skill-name">Agile development (Scrum, Kanban)</h4>
					</div>
				</div>
				<div className="languages subskill-case">
					<h3>Languages</h3>
					<SkillLine skillName="French" skillValue="5" />
					<SkillLine skillName="English" skillValue="5" />
				</div>
			</div>

			<div className="resume-case education-case">
				<h2>Education</h2>
				<p>blabla</p>
			</div>
			</div>
		</div>
		</div>
	);
}

export default Resume;