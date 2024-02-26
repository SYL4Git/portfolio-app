import styled from 'styled-components';

export const StyledPortfolio = styled.div`
	scroll-margin-top: 180px;
	width: 1200px;
	display: flex;
	flex-direction: column;
	margin: 0 auto 50px;

	.title {
		font-size: 40px;
		line-height: 50px;
		margin: 0 auto 40px;
	}
	.prjct {
		display: flex;
		margin-bottom: 60px;
	}
	img {
		width: 600px;
		height: auto;
		margin-left: 50px;
		border: 1px solid black;
	}
	.info {
		margin-top: 50px;
		margin-left: 150px;
		div {
			margin-bottom: 8px;
		}
		.itmTitle,
		.detail {
			display: flex;
		}
		.github,
		.deploy {
			display: flex;
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
`;
