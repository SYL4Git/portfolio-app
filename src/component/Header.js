import React from 'react';
import Button from './Button';
import { StyledHeader } from '../styledComponent/StyledHeader';

const Header = ({ toggleMenuModal, scrollToHome }) => {
	return (
		<StyledHeader className="styledHeader">
			<div className="headerBtnLeft">
				<Button
					btnType={'logo'}
					btnClick={scrollToHome}
					btnText={<img src="./img/logo(1)_resize.svg" alt="logo" />}
				/>
			</div>
			<div className="headerBtnRight">
				<Button
					btnType={'menuModal'}
					btnClick={toggleMenuModal}
					btnText={
						<img src="./img/mingcute_menu-fill.svg" alt="menuModal" />
					}
				/>
			</div>
		</StyledHeader>
	);
};
export default Header;
