import React, { useState } from 'react';
import { StyledContact } from '../styledComponent/StyledContact';

const Contact = React.forwardRef((_props, ref) => {
	// const [name, setName] = useState('');
	// const [age, setAge] = useState('');
	// const [number, setNumber] = useState('');
	// const [email, setEmail] = useState('');
	// const [inquiry, setInquiry] = useState('');

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log('Form submitted:', name);
	// };
	return (
		<StyledContact ref={ref} className="styledContact">
			<div className="contactInfo">
				<h1 className="title">Contact information</h1>
				<div className="CIIn">
					<div className="CILeft">
						<p>이름:</p>
						<span>이승열</span>
						<p>생년월일:</p>
						<span>1992.10.07</span>
					</div>
					<div className="CIRight">
						<p>연락처:</p>
						<span>010 8578 3666</span>
						<p>이메일:</p>
						<span>leesngyl1007@gmail.com</span>
					</div>
				</div>
			</div>
			{/* <div className="inquiry">
				<h1 className="title">Inquiry</h1>
				<h3 className='subtitle'>If you have inquires, please use the inqury form below.</h3>
				<form className="inquiryForm" onSubmit={handleSubmit}>
					<label className="inquiryLabel">
						<div className="elements">
							<p className="elemName">이름:</p>
							<p className="elemAge">나이: </p>
							<p className="elemEmail">이메일:</p>
							<p className="elemTitle">제목:</p>
							<p className="elemInquiry">내용:</p>
						</div>
						<div className="inputs">
							<input
								className="inptName"
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								className="inptAge"
								type="number"
								value={age}
								onChange={(e) => setAge(e.target.value)}
							/>
							<input
								className="inptNumber"
								type="number"
								value={number}
								onChange={(e) => setNumber(e.target.value)}
							/>
							<input
								className="inptEmail"
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								className="inptInquiry"
								type="text"
								value={inquiry}
								onChange={(e) => setInquiry(e.target.value)}
							/>
						</div>
					</label>
					<div className="submit">
						<input className="btnSubmit" type="submit" value="보내기" />
					</div>
				</form>
			</div> */}
		</StyledContact>
	);
});
export default Contact;
