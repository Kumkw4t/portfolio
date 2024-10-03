import '../styles/Resume.css'
import SkillLine from '../components/SkillLine';
import ExperienceItem from '../components/ExperienceItem';
import Background from '../components/Background';
import workExp from '../data/experiences.json';
import edList from '../data/education.json';
import resume from '../data/MathildeOllivier_SoftwareEngineer.pdf';

import { useEffect } from 'react';

function Resume () {

	useEffect( () => {
		const currentPage = document.getElementById("nav-resume");
		const otherPages = [document.getElementById("nav-home"),document.getElementById("nav-works"),document.getElementById("nav-about")]
		if (currentPage != null) {currentPage.classList.add("selected")};
		if (otherPages != null) {otherPages.map((nav) => (nav.classList.remove("selected")))};
	});

	return(
		<Background>
		<div className="resume-global-case">
		<div className="button-resume clickable-link">
			<a href={resume} download>Download PDF</a>
		</div>
		<div className="resume-root-case">
			<div className="resume-column-left">
			<div className="resume-case experience-case">
				<h2>Experience</h2>
				{workExp.map( (el => ( <ExperienceItem key={el.name} exItem={el} />)))}
			</div>
			</div>

			<div className="resume-column-right">
			<div className="resume-case skills-case">
				<h2>Skills</h2>
				<div className="hard-skills subskill-case">
					<h3 className="blue-color">Hard Skills</h3>
					<SkillLine skillName="CSS/SCSS" skillValue="4" />
					<SkillLine skillName="HTML" skillValue="4" />
					<SkillLine skillName="JS" skillValue="3" />
					<SkillLine skillName="MERN Stack" skillValue="3" />
					<SkillLine skillName="SQL" skillValue="3" />
					<SkillLine skillName="C" skillValue="4" />
					<SkillLine skillName="C++" skillValue="3" />
					<SkillLine skillName="Python" skillValue="3" />
					<SkillLine skillName="CyberSecurity" skillValue="4" />
				</div>
				<div className="soft-skills subskill-case">
					<h3 className="blue-color">Soft Skills</h3>
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
						<h4 className="skill-name">Agile development (CI/CD, Jira, Git)</h4>
					</div>
				</div>
				<div className="languages subskill-case">
					<h3 className="blue-color">Languages</h3>
					<SkillLine skillName="French" skillValue="5" />
					<SkillLine skillName="English" skillValue="5" />
				</div>
			</div>

			<div className="resume-case education-case">
				<h2>Education</h2>
				{edList.map( (el => ( <ExperienceItem key={el.name} exItem={el} />)))}
			</div>
			</div>
		</div>
		</div>
		</Background>
	);
}

export default Resume;
