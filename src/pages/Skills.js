import React from 'react';
import {
	StyledSkills,
	NonJava,
	Java,
	Miscellaneous,
} from '../styledComponent/StyledSkills';

const Skills = React.forwardRef((_props, ref) => {
	return (
		<StyledSkills ref={ref} className="styledSkills">
			<h1 className="title">Skill Inventory</h1>
			<NonJava className="styledNonJava">
				<div className="html">
					<img src=".\img\html5.png" alt="html5" />
				</div>
				<div className="css">
					<img src=".\img\css3.png" alt="css" />
				</div>
			</NonJava>
			<Java className="styledJava">
				<div className="javaScript">
					<img src="./img/javascript.png" alt="javaScript" />
				</div>
				<div className="react">
					<img src=".\img\reactLogoFrom_react.dev.png" alt="react" />
				</div>
				<div className="jQuery">
					<img src="./img/jquery.png" alt="jQuery" />
				</div>
				<div className="slick">
					<img src=".\img\slick.png" alt="slick" />
				</div>
				<div className="typeScript">
					<img src="./img/TypeScript.png" alt="typeScript" />
				</div>
			</Java>
			<Miscellaneous className="styledMiscellaneous">
				<div className="git">
					<img src="./img/gitNgithub.png" alt="git" />
				</div>
				<div className="figma">
					<img src="./img/figma.png" alt="figma" />
				</div>
				<div className="netlify">
					<img src="./img/netlify.png" alt="netlify" />
				</div>
				<div className="firebase">
					<img src="./img/Firebase_Logo.png" alt="firebase" />
				</div>
				<div className="node">
					<img src="./img/NodeJs_logo.png" alt="node" />
				</div>
				<div className="ps">
					<img src="./img/photoshop_noBack.svg" alt="photoshop" />
				</div>
			</Miscellaneous>
		</StyledSkills>
	);
});
export default Skills;
