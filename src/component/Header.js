import React from 'react';
import Button from './Button';
import {
	StyledHeaderMob,
	StyledHeaderTab,
} from '../styledComponent/StyledHeader';

const Header = ({
	toggleMenuModal,
	scrollToHome,
	isTabScreen,
	scrollTo,
	skillsRef,
	portfolioRef,
	contactRef,
}) => {
	return isTabScreen ? (
		<StyledHeaderTab className="styledHeaderTab">
			<div className="headerLeft">
				<Button
					btnType={'logo'}
					btnClick={scrollToHome}
					btnText={<img src="./img/logo(1)_resize.svg" alt="logo" />}
				/>
			</div>
			<ul>
				<li onClick={scrollToHome}>HOME</li>
				<li onClick={() => scrollTo(skillsRef)}>SKILLS</li>
				<li onClick={() => scrollTo(portfolioRef)}>PORTFOLIO</li>
				<li onClick={() => scrollTo(contactRef)}>CONTACT</li>
			</ul>
		</StyledHeaderTab>
	) : (
		<StyledHeaderMob className="styledHeaderMob">
			<div className="headerLeft">
				<Button
					btnType={'logo'}
					btnClick={scrollToHome}
					btnText={<img src="./img/logo(1)_resize.svg" alt="logo" />}
				/>
			</div>
			<div className="headerRight">
				<Button
					btnType={'menuModal'}
					btnClick={toggleMenuModal}
					btnText={
						<img src="./img/mingcute_menu-fill.svg" alt="menuModal" />
					}
				/>
			</div>
		</StyledHeaderMob>
	);
};
export default Header;
