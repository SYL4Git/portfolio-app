import React, { useState } from 'react';
import { StyledContact } from '../styledComponent/StyledContact';

const Contact = React.forwardRef((_props, ref) => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [number, setNumber] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', name);
	};
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
