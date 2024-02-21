import React from 'react';
import { StyledContact } from '../styledComponent/StyledContact';

const Contact = React.forwardRef((_props, ref) => {
	return (
		<StyledContact ref={ref} className="styledContact">
			<h1>Contact information</h1>
			<div>이름</div>
			<div>나이</div>
			<div>연락처</div>
			<div>이메일</div>
		</StyledContact>
	);
});
export default Contact;
