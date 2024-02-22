import React from 'react';
import { StyledContact } from '../styledComponent/StyledContact';

const Contact = React.forwardRef((_props, ref) => {
	return (
		<StyledContact ref={ref} className="styledContact">
			<div className="contactIn">
				<h1 className="title">Contact information</h1>
				<div className="name">이름</div>
				<div className="age">나이</div>
				<div className="number">연락처</div>
				<div className="email">이메일</div>
			</div>
		</StyledContact>
	);
});
export default Contact;
