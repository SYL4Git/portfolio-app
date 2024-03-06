import React, { useEffect, useRef } from 'react';
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
	const [isTabScreen, setIsTabScreen] = useState(window.innerWidth >= 768);

	useEffect(() => {
		const handleScreenResize = () => setIsTabScreen(window.innerWidth >= 768);
		window.addEventListener('resize', handleScreenResize);
		return () => window.removeEventListener('resize', handleScreenResize);
	}, []);

	return (
		<StyledHome className="styledHome">
			{isTabScreen ? (
				<>
					<Header
						scrollToHome={scrollToHome}
						isTabScreen={isTabScreen}
						scrollTo={scrollTo}
						skillsRef={skillsRef}
						portfolioRef={portfolioRef}
						contactRef={contactRef}
					/>
				</>
			) : (
				<>
					<Header
						isTabScreen={isTabScreen}
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
				</>
			)}
			<StyledAbout className="styledAbout">
				<div className="bannerImg">
					<img src="./img/boatOnSpace.jpg" alt="banner" />
				</div>
				<div className="catchPhrase">
					<div className="wia">
						<p className="frst">자기소개: </p>
						<p className="scnd">
							신입 프론트엔드 개발자입니다. <br /> 아직 많이 미숙하고
							배워야 할 것도 많지만, 꾸준히 연습하면서 여러 언어 및 개발
							도구들을 숙달해 나가고 있습니다. <br /> 프론트엔드와
							백엔드를 가리지 않고 새로운 것들을 꾸준히 공부하고
							배워나가며, 미래에 팔방미인형 풀스택 개발자가 되는 것을
							목표로 하고 있습니다.
						</p>
					</div>
					<div className="creed">
						<p className="frst">좌우명:</p>
						<p className="scnd">앞을 보고</p>
						<p className="thrd">한걸음씩 전진하며</p>
						<p className="frth">전보다 발전하자</p>
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
