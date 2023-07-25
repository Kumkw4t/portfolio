import '../styles/Footer.css';

function Footer () {
	return (
		<div className="footer-root-case">
			<a href="https://www.instagram.com/kumkw4t/" className="footer-item" target="_blank" rel="noreferrer"><img className="insta logo" src="./instagram-logo.svg" alt="logo instagram" /></a>
			<a href="https://twitter.com/kumkw4t" className="footer-item" target="_blank" rel="noreferrer"><img className="twitter logo" src="./twitter-logo.svg" alt="logo twitter" /></a>
			<a href="https://www.linkedin.com/in/mathilde-ollivier-808142a8/" className="footer-item" target="_blank" rel="noreferrer"><img className="linkedin logo" src="./linkedin-logo.png" alt="logo linkedin" /></a>
			<a href="https://www.github.com/kumkw4t/" className="footer-item" target="_blank" rel="noreferrer"><img className="github logo" src="./github-logo.svg" alt="logo github" /></a>
		</div>
	);
}

export default Footer;