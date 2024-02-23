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
					<div className="wia">
						<p className="frst">자기소개: </p>
						<p className="scnd">신참 프론트엔드 개발자 입니다.</p>
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
