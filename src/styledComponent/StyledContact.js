import styled from 'styled-components';

export const StyledContact = styled.div`
	scroll-margin-top: 180px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 100px 0 300px;

	.contactInfo {
		width: 80%;
	}
	.title {
		display: flex;
		justify-content: center;
		max-width: 700px;
		font-size: 40px;
		line-height: 40px;
		padding: 20px 0 40px 0;
		margin: 0 auto;
	}
	.contactInfo,
	.inquiry {
		max-width: 500px;
		margin: 20px auto;
	}
	.CIIn {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		border: 1px solid black;
		border-radius: 20px;
	}
	.CILeft,
	.CIRight {
		margin: 20px 20px;
	}
	.CILeft p,
	.CIRight p {
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 5px;
	}
	.CILeft span,
	.CIRight span {
		display: inline-block;
		font-weight: 400;
		margin-bottom: 10px;
	}
	.inquiry {
		width: 80%;

		.inquiryForm {
			border: 1px solid black;
			border-radius: 20px;
			padding: 10px;

			.inquiryLabel {
				display: flex;
				justify-content: center;
				p {
					font-weight: bold;
					font-size: 16px;
					margin: 22px 10px;
				}
				.inputs input {
					display: block;
					width: 100%;
					text-indent: 10px;
					margin: 20px 10px;
					border-radius: 10px;
				}
				.inptInquiry {
					height: 100px;
				}
			}
		}
	}
	.submit {
		display: flex;
		justify-content: right;
		.btnSubmit {
			padding: 10px 10px;
			margin: 10px 30px 10px;
		}
	}
	@media (min-width: 768px) {
	}
	@media (min-width: 1200px) {
		width: 100%;
		margin: 50px auto;
	}
`;
