import styled from 'styled-components';

export const StyledContact = styled.div`
	scroll-margin-top: 180px;
	width: 1200px;
	margin: 100px auto;
	.contactInfo {
		width: 600px;
		margin: 80px auto;
		padding: 20px;
	}
	.title {
		display: flex;
		justify-content: center;
		font-size: 40px;
		line-height: 40px;
		margin-bottom: 50px;
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
	.inquiry {
		width: 600px;
		margin: 80px auto;
		padding: 20px;
		border: 1px solid black;
		.inquiryLabel {
			display: flex;
			justify-content: center;
			margin-bottom: 40px;
			p {
				font-weight: bold;
				font-size: 16px;
				margin: 24px 10px;
			}
			input {
				display: block;
				width: 400px;
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
		position: relative;
		.btnSubmit {
			position: absolute;
			right: 0;
			bottom: 0;
			padding: 10px 10px;
		}
	}
`;
