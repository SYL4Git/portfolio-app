import React, { useState } from 'react';
import { StyledContact } from '../styledComponent/StyledContact';

const Contact = React.forwardRef((_props, ref) => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [number, setNumber] = useState('');
	const [email, setEmail] = useState('');
	const [inquiry, setInquiry] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', name);
	};
	return (
		<StyledContact ref={ref} className="styledContact">
			<div className="contactInfo">
				<h1 className="CITitle">Contact information</h1>
				<div className="CIIn">
					<div className="CILeft">
						<p>
							이름: <span>이승열</span>
						</p>
						<p>
							생년월일: <span>1992.10.07</span>
						</p>
					</div>
					<div className="CIRight">
						<p>
							연락처: <span>010 8578 3666</span>
						</p>
						<p>
							이메일: <span>leesngyl1007@gmail.com</span>
						</p>
					</div>
				</div>
			</div>
			<div className="inquiry">
				<form className="inquiryForm" onSubmit={handleSubmit}>
					<h1 className="inquiryTitle">Inquiry</h1>
					<label className="inquiryLable">
						<div className="name">
							이름:
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="age">
							나이:
							<input
								type="number"
								value={age}
								onChange={(e) => setAge(e.target.value)}
							/>
						</div>
						<div className="number">
							연락처:
							<input
								type="number"
								value={number}
								onChange={(e) => setNumber(e.target.value)}
							/>
						</div>
						<div className="email">
							이메일:
							<input
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="inquiryDetail">
							문의 내용:
							<input
								type="text"
								value={inquiry}
								onChange={(e) => setInquiry(e.target.value)}
							/>
						</div>
					</label>
					<input type="submit" value="보내기" />
				</form>
			</div>
		</StyledContact>
	);
});
export default Contact;
