import styled from 'styled-components';

export const StyledContact = styled.div`
	scroll-margin-top: 180px;
	width: 100%;
	margin: 100px auto;
	.contactInfo {
		width: 300px;
		margin: 80px auto;
		padding: 20px;
	}
	.title {
		display: flex;
		justify-content: center;
		font-size: 40px;
		line-height: 40px;
		padding: 20px 0 40px 0;
	}
	.CIIn {
		display: flex;
		justify-content: space-between;
		padding: 20px;
		border: 1px solid black;
		border-radius: 20px;
		span {
			margin-left: 10px;
		}
	}
	.CILeft p,
	.CIRight p {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 10px;
		span {
			font-weight: 400;
		}
	}
	.inquiryForm {
		width: 200px;
		margin: 10px 0;
		padding: 30px 0;
		border: 1px solid black;
		border-radius: 20px;
		.inquiryLabel {
			display: flex;
			justify-content: center;
			margin-bottom: 10px;
			p {
				font-weight: bold;
				font-size: 16px;
				margin: 22px 10px;
			}
			input {
				display: block;
				width: 200px;
				text-indent: 10px;
				margin: 20px 10px;
				border-radius: 10px;
			}
			.inptInquiry {
				height: 100px;
			}
		}
	}
	.submit {
		display: flex;
		justify-content: right;
		.btnSubmit {
			padding: 10px 10px;
			margin-right: 65px;
		}
	}
`;
