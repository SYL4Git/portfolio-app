import React, { useRef } from 'react';
import { useState } from 'react';

import { StyledHome, StyledAbout } from '../styledComponent/StyledHome';
import Header from '../component/Header';
import { useScrollTo } from '../component/ModalScrlEvnt';
import MenuModal from '../component/MenuModal';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';

const Home = () => {
	const [menuModal, setMenuModal] = useState(false);

	const skillsRef = useRef(null);
	const portfolioRef = useRef(null);
	const contactRef = useRef(null);

	const scrollToHome = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	};
	const toggleMenuModal = () => {
		setMenuModal((prevState) => !prevState);
	};
	const { scrollTo } = useScrollTo();

	return (
		<StyledHome className="styledHome">
			<Header
				toggleMenuModal={toggleMenuModal}
				scrollToHome={scrollToHome}
			/>
			{menuModal && (
				<MenuModal
					scrollToHome={scrollToHome}
					scrollTo={scrollTo}
					skillsRef={skillsRef}
					portfolioRef={portfolioRef}
					contactRef={contactRef}
				/>
			)}
			<StyledAbout className="styledAbout">
				<div className="bannerImg">
					<img src="./img/boatOnSpace.jpg" alt="banner" />
				</div>
				<div className="catchPhrase">
					<div className="WIA">
						<p className="frst">Who I Am: </p>
						<p className="scnd">A Rookie Front-End Developer</p>
					</div>
					<div className="creed">
						<p className="frst">My Creed:</p>
						<p className="scnd">Look Forward</p>
						<p className="thrd">Step Forward</p>
						<p className="frth">Improve Onward</p>
					</div>
				</div>
			</StyledAbout>
			<Skills ref={skillsRef} />
			<Portfolio ref={portfolioRef} />
			<Contact ref={contactRef} />
		</StyledHome>
	);
};
export default Home;
