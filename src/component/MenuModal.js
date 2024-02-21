import React from 'react';
import { StyledMenuModal } from '../styledComponent/StyledMenuModal';

const MenuModal = ({
	scrollToHome,
	scrollTo,
	skillsRef,
	portfolioRef,
	contactRef,
}) => {
	return (
		<StyledMenuModal className="styledMenuModal">
			<ul>
				<li onClick={scrollToHome}>HOME</li>
				<li onClick={() => scrollTo(skillsRef)}>SKILLS</li>
				<li onClick={() => scrollTo(portfolioRef)}>PORTFOLIO</li>
				<li onClick={() => scrollTo(contactRef)}>CONTACT</li>
			</ul>
		</StyledMenuModal>
	);
};
export default MenuModal;
