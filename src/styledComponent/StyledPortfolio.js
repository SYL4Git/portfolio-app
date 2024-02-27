import styled from 'styled-components';

export const StyledPortfolio = styled.div`
	scroll-margin-top: 180px;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 0 100px;

	.title {
		display: flex;
		justify-content: center;
		font-size: 30px;
		line-height: 40px;
		margin: 0 auto 40px;
	}
	.prjct {
		margin: 0 auto;
	}
	.preview img {
		width: 300px;
		height: auto;
		border: 1px solid black;
	}
	.info {
		width: 300px;
		margin: 50px 0;
		div {
			margin-bottom: 8px;
		}
		.itmTitle,
		.detail {
		}
		.github,
		.deploy {
		}
		.itmTitle p,
		.link p,
		.detail p {
			font-size: 16px;
			font-weight: bold;
		}
		.itmTitle p {
			margin-right: 25px;
		}
		.github p {
			margin-right: 35px;
		}
		.deploy p {
			margin-right: 15px;
		}
		.detail p {
			margin-right: 76px;
		}
	}
	@media (min-width: 768px) {
		.prjct {
			display: flex;
		}
		.preview {
			margin-top: 20px;
			margin-right: 30px;
		}
		.info {
			margin-top: 0;
		}
	}
`;
